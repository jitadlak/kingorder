import React, { Component } from 'react';
import styles from './ProfileStyle'
import { Image, Modal, StatusBar, Text, View, ScrollView, TouchableOpacity, TextInput, FlatList, SafeAreaView } from 'react-native';
import COLOR_CONST from '../../theme/ColorConstants';
import * as IMG_CONST from '../../theme/ImageConstants';
import * as STRING_CONST from '../../theme/StringConstants';
import scale, { verticalScale } from '../../utils/Scale';
// import { Icon } from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import * as commonActions from '../../redux/actions/commonActions';
import * as userActions from '../../redux/actions/userActions';
import * as homeActions from '../../redux/actions/homeActions';

export class ProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: null,
            show: true,
            showImagePickerModal: false,
            isInvalidUploadImage: false,
            profileImageData: '',
            isImageSelected: false,
            showModal: true,
            showRegisterModal: false,
            shoMoreTabModal: true,
            moreItems: [{
                id: 1,
                title: 'Category',
                icon: IMG_CONST.cat
                // }, {
                //     id: 2,
                //     title: 'Profile',
                //     icon: IMG_CONST.blueUser,
                //     navigateTo: 'Profile',
            }, {
                id: 3,
                title: 'Cart',
                icon: IMG_CONST.cart,
                navigateTo: 'Cart'
            }, {
                id: 4,
                title: 'About Us',
                icon: IMG_CONST.userTie
            }, {
                id: 5,
                title: 'Privacy Policy',
                icon: IMG_CONST.police
            }, {
                id: 6,
                title: 'Offer',
                icon: IMG_CONST.offer
            }, {
                id: 7,
                title: 'Register',
                icon: IMG_CONST.registered
            }, {
                id: 8,
                title: 'Feedback',
                icon: IMG_CONST.feedback
            }, {
                id: 9,
                title: 'Ratings',
                icon: IMG_CONST.blueStarIcon
            }, {
                id: 10,
                title: 'Add Service',
                icon: IMG_CONST.localService
            }],
            profileData: '',
        }
    }

    onPressCamera = () => {
        try {
            ImagePicker.openCamera({
                mediaType: 'photo',
                compressImageQuality: 0.3,
                includeBase64: true,
                cropping: true,
            }).then(async image => {
                console.log('@@@ Selected Image Item =============', image);
                const source = { uri: (Platform.OS === 'android') ? image.path : image.path };
                this.setState({ photo: image.path, showImagePickerModal: false, isImageSelected: true, profileImageData: image }, () => {
                    this.updateProfileImage();
                });
            });
        } catch (e) {
            console.log('@@@ Error opening camera ==========', e);
        }
    }

    onPressPickImage = () => {
        try {
            ImagePicker.openPicker({
                mediaType: 'photo',
                compressImageQuality: 0.3,
                includeBase64: true,
                cropping: true,
            }).then(async image => {
                console.log('@@@ Selected Image Item =============', image);
                const source = { uri: (Platform.OS === 'android') ? image.path : image.path };
                this.setState({ photo: image.path, showImagePickerModal: false, isImageSelected: true, profileImageData: image }, () => {
                    this.updateProfileImage();
                });
            });
        } catch (e) {
            console.log('@@@ Error opening image picker ==========', e);
        }
    }

    onPressServiceCell = (item) => {
        var tempList = this.state.moreItems;
        for (var i = 0; i < tempList.length; i++) {
            if (tempList[i].id == item.id) {
                tempList[i]["isSelected"] = true;
            } else {
                tempList[i]["isSelected"] = false;
            }
        }
        item.id === 3 || item.id === 2 ?
            this.setState({ moreItems: tempList, shoMoreTabModal: false }, () => this.props.navigation.navigate(item.navigateTo))
            :
            null
        item.id === 7 && this.setState({ showRegisterModal: true, shoMoreTabModal: false })
    }

    componentDidMount = () => {
        this.getUserProfileData();
    }

    getUserProfileData = async () => {
        let emailId = await AsyncStorage.getItem('USER_EMAIL');
        let data = {};
        data['emailId'] = 'DSACSCDCDc@gmail.com';
        this.props.getUserProfileData(data, (res) => this.getUserProfileDataSuccessCallBack(res), (err) => this.getUserProfileDataFailureCallBack(err))
    }

    getUserProfileDataSuccessCallBack = async (res) => {
        console.log('@@@ Get User Profile Data Success CallBack ===================', res);
        this.setState({ profileData: res.data.data });
    }

    getUserProfileDataFailureCallBack = (error) => {
        console.log('@@@ Get User Profile Data Failure CallBack ===================', error);
        if (error) {
            setTimeout(() => {
                alert(error);
            }, 0);
        } else {
            setTimeout(() => {
                alert('Network Error!');
            }, 0);
        }
    }

    updateProfileImage = async () => {
        let emailId = await AsyncStorage.getItem('USER_EMAIL');
        let data = {};
        // data['emailID'] = emailId;
        data['emailID'] = 'DSACSCDCDc@gmail.com';
        data['image'] = this.state.profileImageData.data;
        this.props.uploadProfileImage(data, (res) => this.updateProfileImageSuccessCallBack(res), (err) => this.updateProfileImageFailureCallBack(err))
    }

    updateProfileImageSuccessCallBack = async (res) => {
        console.log('@@@ Upload Profile Image Success CallBack ===================', res);
        alert('Profile Image Updated Successfully')
        this.getUserProfileData()
    }

    updateProfileImageFailureCallBack = (error) => {
        if (error) {
            console.log('@@@ Upload Profile Image Failure CallBack ===================', error);
            alert(error.data);
        } else {
            console.log('@@@ Upload Profile Image Failure CallBack Network Error ===================');
            this.props.showErrorModal('Network Error!');
        }
    }

    renderHeaderContainer = () => {
        return (
            <View style={styles.headerContainer}>
                {/* <TouchableOpacity onPress={() => this.props.navigation.goBack()}><Image style={styles.backIcon} source={IMG_CONST.backIcon} /></TouchableOpacity> */}
                <Text style={styles.mainText}>Profile</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Notification")}><Image style={styles.bellIcon} source={IMG_CONST.notification} /></TouchableOpacity>
                {/* <TouchableOpacity onPress={() => this.setState({ shoMoreTabModal: true })}><Image style={styles.moreIcon} source={IMG_CONST.more} /></TouchableOpacity> */}
            </View>
        );
    }

    renderProfileIconContainer = () => {
        return (
            <View style={{ marginVertical: verticalScale(20), justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity onPress={() => this.setState({ showImagePickerModal: true })}>
                    <Image style={styles.profileIcon} source={this.state.isImageSelected ? { uri: this.state.photo } : IMG_CONST.profile} />
                </TouchableOpacity>
                    {/* <Text style={styles.userText}>{this.state.profileData[0].fullName}</Text>
                    <Text style={styles.userSubText}>{this.state.profileData[0].emailId}</Text> */}
                    <Text style={[styles.userSubText, {marginTop: verticalScale(30)}]}>Full Name</Text>
                    <Text style={styles.userText}>Jeffery Lawrence</Text>
                    <Text style={[styles.userSubText, {marginTop: verticalScale(30)}]}>Email ID</Text>
                    <Text style={styles.userText}>DSACSCDCDc@gmail.com</Text>
                    <Text style={[styles.userSubText, {marginTop: verticalScale(30)}]}>Address</Text>
                    <Text style={styles.userText}>325 Gulmarg</Text>
                    <Text style={[styles.userSubText, {marginTop: verticalScale(30)}]}>Mobile Number</Text>
                    <Text style={styles.userText}>0850348342</Text>
                    <Text style={[styles.userSubText, {marginTop: verticalScale(30)}]}>DOB</Text>
                    <Text style={styles.userText}>04/10/1995</Text>
                    {/* <Text style={[styles.userSubText, {marginTop: verticalScale(30)}]}>emailId</Text>
                    <Text style={styles.userText}>fullName</Text> */}
            </View>
        );
    }

    renderCellContainer = (item) => {
        return (
            <View style={{ alignSelf: 'flex-start' }}>
                <TouchableOpacity style={styles.moreLisCell} onPress={() => this.onPressServiceCell(item)}>
                    <Image style={styles.moreIcons} source={item.icon} resizeMode="contain" />
                    <Text style={[styles.moreListName, { color: "#00000090" }]}>{item.title}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    renderModalContainer = () => {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.shoMoreTabModal}
                onRequestClose={() => {
                    this.setState({ shoMoreTabModal: false })
                }}
            >
                <View style={styles.registerModal}>
                    <View style={styles.registerTransparentBg} />
                    <View style={styles.modalContaine}>
                        <View style={styles.modalView}>
                            {/* <View style={{ marginVertical: verticalScale(15), flexDirection: 'row', alignSelf: 'flex-start' }}>
                                <Image style={styles.profileIcon} source={IMG_CONST.profile} />
                                <View>
                                    <Text style={styles.userText}>Jeffery Lawrence</Text>
                                    <Text style={styles.userSubText}>Lorem Ipsum</Text>
                                </View>
                            </View> */}
                            <TouchableOpacity onPress={() => this.setState({ shoMoreTabModal: false })} style={{ justifyContent: 'flex-end', alignItems: 'flex-end', alignSelf: 'flex-end' }}>
                                <Image
                                    source={IMG_CONST.crossIcon}
                                    style={styles.registerCrossIcon}
                                />
                            </TouchableOpacity>
                            <View style={styles.divider} />
                            <FlatList
                                style={{ marginBottom: verticalScale(20) }}
                                data={this.state.moreItems}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item }) => this.renderCellContainer(item)}
                            />
                        </View>
                    </View>
                </View>
            </Modal >
        );
    }

    renderRegisterPickerModal = () => {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.showRegisterModal}
                onRequestClose={() => {
                    this.setState({ showRegisterModal: false })
                }}
            >
                <View style={styles.registerModal}>
                    <View style={styles.registerTransparentBg} />
                    <View style={styles.registerView}>
                        <TouchableOpacity onPress={() => this.setState({ showRegisterModal: false })}>
                            <Image
                                source={IMG_CONST.crossIcon}
                                style={styles.registerCrossIcon1}
                            />
                        </TouchableOpacity>
                        <View style={styles.registerButton}>
                            <TouchableOpacity onPress={() => this.setState({ showRegisterModal: false }, () => this.props.navigation.navigate("VendorRegistration"))} style={styles.registerLeftButton}>
                                <Image
                                    source={IMG_CONST.blueUser}
                                    style={styles.registerAsIcon}
                                />
                                <Text style={styles.registerAsText}>As Vendor</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.setState({ showRegisterModal: false }, () => this.props.navigation.navigate("EmployeeRegistration"))} style={styles.registerRightButton}>
                                <Image
                                    source={IMG_CONST.blueUser}
                                    style={styles.registerAsIcon}
                                />
                                <Text style={styles.registerAsText}>As Employee</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }

    renderImagePickerModal = () => {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.showImagePickerModal}
                onRequestClose={() => {
                    this.setState({ showImagePickerModal: false })
                }}
            >
                <View style={styles.modalPickerContainer}>
                    <View style={styles.imagePickerTransparentBg} />
                    <View style={styles.pickerBottomView}>
                        <TouchableOpacity onPress={() => this.setState({ showImagePickerModal: false })}>
                            <Image
                                source={IMG_CONST.crossIcon}
                                style={styles.pickerCrossIcon}
                            />
                        </TouchableOpacity>
                        <View style={styles.pickerButtonContainer}>
                            <TouchableOpacity onPress={() => this.onPressCamera()} style={styles.pickerLeftButton}>
                                <Image
                                    source={IMG_CONST.blueCamera}
                                    style={styles.pickerCameraIcon}
                                />
                                <Text style={styles.pickerPictureText}>{`TAKE PICTURE\nFROM CAMERA`}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.onPressPickImage()} style={styles.pickerRightButton}>
                                <Image
                                    source={IMG_CONST.bluePhotos}
                                    style={styles.pickerCameraIcon}
                                />
                                <Text style={styles.pickerPictureText}>{`ADD FROM\nGALLERY`}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                {/* <ScrollView style={styles.container} showsVerticalScrollIndicator={false}> */}
                <StatusBar barStyle="dark-content" height={10} hidden={false} />
                {/* <SafeAreaView backgroundColor={COLOR_CONST.loginBtnOuterColor} style={{height: 10}} height={10}  /> */}
                {this.renderHeaderContainer()}
                {this.renderProfileIconContainer()}
                {/* {this.renderModalContainer()}
                {this.renderRegisterPickerModal()} */}
                {this.renderImagePickerModal()}
                {/* </ScrollView> */}
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
        showErrorModal: (message, isShowError) => dispatch(commonActions.showErrorModal(message, isShowError)),
        hideErrorModal: () => dispatch(commonActions.hideErrorModal()),
        getUserProfileData: (data, successCallBack, failureCallBack) => dispatch(userActions.getUserProfileData(data, successCallBack, failureCallBack)),
        updateProfileImage: (data, successCallBack, failureCallBack) => dispatch(userActions.updateProfileImage(data, successCallBack, failureCallBack)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
