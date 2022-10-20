import React, { Component } from 'react';
import styles from './EmployeeRegistrationStyle'
import { Image, ImageBackground, StatusBar, Text, TextInput, TouchableOpacity, View, Modal, FlatList, ScrollView } from 'react-native';
import COLOR_CONST from '../../theme/ColorConstants';
import * as IMG_CONST from '../../theme/ImageConstants';
import * as STRING_CONST from '../../theme/StringConstants';
import scale, { verticalScale } from '../../utils/Scale';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';
import * as commonActions from '../../redux/actions/commonActions';
import * as userActions from '../../redux/actions/userActions';
import AsyncStorage from '@react-native-community/async-storage';
import DocumentPicker from "react-native-document-picker"
import ImagePicker from 'react-native-image-crop-picker';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import GetLocation from 'react-native-get-location';

class EmployeeRegistrationScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEyeClicked: true,
            email: '',
            adhaar: '',
            name: '',
            phone: '',
            address: '',
            licence: '',
            selectedCategory: '',
            isInvalidName: false,
            isInvalidAdhaar: false,
            isInvalidEmail: false,
            isInvalidPhone: false,
            isInvalidPic: false,
            isInvalidDoc: false,
            isInvalidAdhaarDoc: false,
            isAddressInvalid: false,
            isClicked: false,
            attachedDOc: {},
            attachedDocName: "",
            photo: '',
            show: true,
            showPickerModal: false,
            isInvalidUploadImage: false,
            profileImageData: '',
            isImageSelected: false,
            showCategoryList: false,
            isAddressClicked: false,
            selectedCatName: '',
            lat: 0,
            lng: 0,
            categoryList: [{id: 1, categoryName: 'Food', isSelected: false}, {id: 2, categoryName: 'Shop', isSelected: false}, {id: 3, categoryName: 'Mart', isSelected: false}, {id: 4, categoryName: 'Services', isSelected: false}, {id: 5, categoryName: 'Gadgets', isSelected: false}, {id: 6, categoryName: 'Nearby', isSelected: false}]
        };
    }

    componentDidMount() {
        this.onPressCorrentLocation()
    }

    onPressCorrentLocation = () => {
        return (
            GetLocation.getCurrentPosition({
                enableHighAccuracy: true,
                timeout: 15000,
            }).then(location => {
                this.setState({ lat: location.latitude, lng: location.longitude }, () => console.log("@@@ CurrentLocation", this.state.lat))
            }).catch(error => {
                    const { code, message } = error;
                    console.warn(code, message);
                })
            // .then(this.setCurrentLocationToAsync())
        );
    }

    onAttachDocument = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.pdf, DocumentPicker.types.images],
            });
            console.log("@@@ Uploaded Prescription ========", res);
            this.setState({ attachedDOc: res, attachedDocName: res.name }, () => console.log("@@@ Uploaded Prescription Name ========", this.state.attachedDocName))
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                // User cancelled the picker, exit any dialogs or menus and move on
            } else {
                throw err;
            }
        }
        // this.props.navigation.navigate("MainStackScreen")
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
                this.setState({ photo: image.path, showPickerModal: false, isImageSelected: true, profileImageData: image }, () => {
                    // this.updateProfileImage();
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
                this.setState({ photo: image.path, showPickerModal: false, isImageSelected: true, profileImageData: image }, () => {
                    // this.updateProfileImage();
                });
            });
        } catch (e) {
            console.log('@@@ Error opening image picker ==========', e);
        }
    }

    onPressRegistrationBtn = async () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (this.state.name.trim().length === 0) {
            this.setState({ isInvalidName: true })
            return
        } else if (this.state.phone.trim().length !== 10) {
            this.setState({ isInvalidPhone: true })
            return
        } else if (!reg.test(this.state.email)) {
            this.setState({ isInvalidEmail: true })
            return
        // } else if (this.state.adhaar.trim().length === 0) {
        //     this.setState({ isInvalidAdhaarDoc: true })
        //     return
        // } else if (this.state.address.trim().length === 0) {
        //     this.setState({ isAddressInvalid: true })
        //     return
        // } else if (this.state.licence.trim().length === 0) {
        //     this.setState({ isInvalidDoc: true })
        //     return
        } else if (this.state.photo.trim().length === 0) {
            this.setState({ isInvalidPic: true })
            return
        } else {
            let userName = await AsyncStorage.setItem('USER_NAME', this.state.name);
            this.props.navigation.navigate("MainStackScreen", { userName: userName })
        }
        let data = {};
        data['address'] = this.state.address;
        data['adharCrard'] = this.state.adhaar;
        data['emailId'] = this.state.email;
        data['fullName'] = this.state.name;
        data['licence'] = this.state.licence;
        data['moibleNo'] = this.state.phone;
        data['photo'] = this.state.photo;
        console.log('@@@ Employee Data CallBack ===================', data);
        this.props.onEmployeeRegistartion(data, (res) => this.onEmployeeRegistartionSuccessCallBack(res), (err) => this.onEmployeeRegistartionFailureCallBack(err))
    }

    onEmployeeRegistartionSuccessCallBack = async (res) => {
        console.log('@@@ Employee Success CallBack ===================', res);
        alert('Your registration has been successfully completed');
        let userName = await AsyncStorage.setItem('USER_NAME', this.state.name);
        this.props.navigation.replace("MainStackScreen", { userName: userName })
    }

    onEmployeeRegistartionFailureCallBack = (error) => {
        if (error) {
            console.log('@@@ Employee Failure CallBack ===================', error);
            alert(erroe);
        } else {
            console.log('@@@ Employee Failure CallBack Network Error ===================');
            this.props.showErrorModal('Network Error!');
        }
    }

    onPressChooseCategory = (item) => {
        var tempList = this.state.categoryList;
        for (var i = 0; i < tempList.length; i++) {
            if (tempList[i].id == item.id) {
                tempList[i]["isSelected"] = true;
                this.setState({ selectedCatName: tempList[i]["categoryName"], showCategoryList: false })
            } else {
                tempList[i]["isSelected"] = false;
            }
        }
        this.setState({ categoryList: tempList })
    }

    renderCategoryListCell = (item) => {
        return (
            <TouchableOpacity onPress={() => this.onPressChooseCategory(item)}>
                <Text style={[styles.currentTetx, {marginTop: verticalScale(5), alignSelf: 'flex-start'}]}>{item.categoryName}</Text>
            </TouchableOpacity>
        );
    }

    renderTextInputContainer = () => {
        return (
            <View style={styles.textInputView}>
                <View style={[styles.nameView, { borderColor: this.state.isInvalidName ? 'red' : '#00000040' }]}>
                    <Image source={IMG_CONST.blueUser} style={styles.userIcon} resizeMode="contain" />
                    <TextInput
                        style={styles.textInput}
                        placeholderTextColor='#00000090'
                        placeholder="Firstname Lastname*"
                        onChangeText={(text) => this.setState({ name: text, isInvalidName: false })}
                    />
                    {this.state.isInvalidName ? <View style={styles.errorView} /> : null}
                </View>
                <View style={[styles.nameView, { borderColor: this.state.isInvalidPhone ? 'red' : '#00000040' }]}>
                    <Image source={IMG_CONST.blueCallIcon} style={styles.userIcon} resizeMode="contain" />
                    <TextInput
                        style={styles.textInput}
                        placeholderTextColor='#00000090'
                        placeholder="Phone Number*"
                        maxLength={10}
                        onChangeText={(text) => this.setState({ phone: text, isInvalidPhone: false })}
                    />
                    {this.state.isInvalidPhone ? <View style={styles.errorView} /> : null}
                </View>
                <View style={[styles.emailView, { borderColor: this.state.isInvalidEmail ? 'red' : '#00000040' }]}>
                    <Image source={IMG_CONST.blueMail} style={styles.mailIcon} resizeMode="contain" />
                    <TextInput
                        style={styles.textInput}
                        placeholderTextColor='#00000090'
                        placeholder="Email"
                        onChangeText={(text) => this.setState({ email: text, isInvalidEmail: false })}
                    />
                    {this.state.isInvalidEmail ? <View style={styles.errorView} /> : null}
                </View>
                <TouchableOpacity style={[styles.emailView, { borderColor: this.state.isAddressInvalid ? 'red' : '#00000040' }]} onPress={() => this.setState({isAddressClicked: true})}>
                    <Image source={IMG_CONST.metroLocation} style={styles.mailIcon} resizeMode="contain" />
                    {!this.state.isAddressClicked ?
                        <Text style={[styles.textInput, {color: this.state.address ? '#000' : '#00000090'}]}>{this.state.address ? this.state.address : 'Address*'}</Text>
                    :
                    <MapView
                        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                        style={{height: scale(25), width: scale(300), alignSelf: 'center', marginTop: verticalScale(5),}}
                        region={{
                            latitude: this.state.lat,
                            longitude: this.state.lng,
                            latitudeDelta: 0.015,
                            longitudeDelta: 0.0121,
                        }}></MapView>}
                    {/* {this.state.isInvalidEmail ? <View style={styles.errorView} /> : null} */}
                </TouchableOpacity>
                {/* <TouchableOpacity style={[styles.emailView, { borderColor: this.state.isInvalidEmail ? 'red' : '#00000040' }]} onPress={() => this.setState({ showCategoryList: !this.state.showCategoryList })}>
                    <Image source={IMG_CONST.cat} style={styles.mailIcon} resizeMode="contain" />
                    <Text style={[styles.textInput, {color: this.state.selectedCatName ? '#000' : '#00000090'}]}>{this.state.selectedCatName ? this.state.selectedCatName : 'Service Category'}</Text>
                    {this.state.isInvalidEmail ? <View style={styles.errorView} /> : null}
                </TouchableOpacity> */}
                {this.state.showCategoryList ?
                    <View style={styles.openedView}>
                        <FlatList
                            data={this.state.categoryList}
                            renderItem={({ item }) => this.renderCategoryListCell(item)}
                            keyExtractor={(item) => item.id}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                    :
                    null} 
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    {!this.state.isImageSelected ?
                        <TouchableOpacity style={[styles.uploadView, {justifyContent: 'space-between', }]} onPress={() => this.setState({ showPickerModal: true })} style={[styles.uploadView, { borderColor: this.state.isInvalidPic ? 'red' : '#00000040', marginLeft: scale(10) }]}>
                            <Image
                                source={IMG_CONST.profile}
                                style={styles.uploadImage}
                            />
                            <Text style={styles.currentTetx}>  Upload Photo</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.uploadView} onPress={() => this.setState({ showPickerModal: true })} style={[styles.uploadView, { borderColor: this.state.isInvalidPic ? 'red' : '#00000040', marginLeft: scale(10) }]}>
                            <Image
                                source={{ uri: this.state.photo }}
                                style={styles.uploadImage}
                            />
                            <Text style={[styles.currentTetx, {color: '#000', marginRight: scale(10)}]}> Uploaded Photo</Text>
                        </TouchableOpacity>
                    }
                    {this.state.isInvalidPic ? <View style={styles.errorView} /> : null}
                    <TouchableOpacity style={[styles.uploadView, { borderColor: this.state.isInvalidDoc ? 'red' : '#00000040'}]} onPress={() => this.onAttachDocument()}>
                        <Text style={[styles.currentTetx, { color: this.state.attachedDocName.length === 0 ? '#00000090' : '#000', alignSelf: 'center' }]}>{this.state.attachedDocName.length !== 0 ? this.state.attachedDocName : 'Upload Licence'}</Text>
                        {this.state.isInvalidDoc ? <View style={styles.errorView} /> : null}
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.uploadView, { borderColor: this.state.isInvalidAdhaarDoc ? 'red' : '#00000040', marginRight: scale(10) }]} onPress={() => this.onAttachDocument()}>
                        <Text style={[styles.currentTetx, { color: this.state.attachedDocName.length === 0 ? '#00000090' : '#000', alignSelf: 'center' }]}>{this.state.attachedDocName.length !== 0 ? this.state.attachedDocName : 'Upload Adhaar'}</Text>
                        {this.state.isInvalidAdhaarDoc ? <View style={styles.errorView} /> : null}
                    </TouchableOpacity>
                </View>
                {this.renderButtonContainer()}
            </View>
        )
    }

    renderButtonContainer = () => {
        return (
            <View style={{ alignSelf: 'center' }}>
                <TouchableOpacity style={styles.logintBtn} onPress={() => this.onPressRegistrationBtn()}>
                    <Text style={styles.loginBtnText}>Register As Employee</Text>
                </TouchableOpacity>
            </View>
        );
    }

    renderImagePickerModal = () => {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.showPickerModal}
                onRequestClose={() => {
                    this.setState({ showPickerModal: false })
                }}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.transparentBg} />
                    <View style={styles.bottomView}>
                        <TouchableOpacity onPress={() => this.setState({ showPickerModal: false })}>
                            <Image
                                source={IMG_CONST.crossIcon}
                                style={styles.crossIcon}
                            />
                        </TouchableOpacity>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={() => this.onPressCamera()} style={styles.leftButton}>
                                <Image
                                    source={IMG_CONST.blueCamera}
                                    style={styles.cameraIcon}
                                />
                                <Text style={styles.takePictureText}>{`TAKE PICTURE\nFROM CAMERA`}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.onPressPickImage()} style={styles.rightButton}>
                                <Image
                                    source={IMG_CONST.bluePhotos}
                                    style={styles.cameraIcon}
                                />
                                <Text style={styles.takePictureText}>{`ADD FROM\nGALLERY`}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }

    render() {
        return (
            <View>
                    {this.renderTextInputContainer()}
                    {this.renderImagePickerModal()}
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
        onEmployeeRegistartion: (data, successCallBack, failureCallBack) => dispatch(userActions.onEmployeeRegistartion(data, successCallBack, failureCallBack)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeRegistrationScreen)