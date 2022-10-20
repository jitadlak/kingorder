import React, { Component } from 'react';
import styles from './VendorRegistrationStyle'
import { Image, ImageBackground, StatusBar, Text, TextInput, TouchableOpacity, View, FlatList, ScrollView, Modal } from 'react-native';
import COLOR_CONST, { FONTS } from '../../theme/ColorConstants';
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

class VendorRegistrationScree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVendorSelected: true,
            vendorEmail: '',
            vendorName: '',
            storeName: '',
            vendorPhone: '',
            storePhone: '',
            vendorAddress: '',
            websiteLink: '',
            businessCategory: '',
            selectedCategory: '',
            isInvalidVendorName: false,
            isInvalidStoreName: false,
            isInvalidPass: false,
            isInvalidVendorEmail: false,
            isInvalidVendorPhone: false,
            isInvalidStorePhone: false,
            isInvalidLink: false,
            isVendorAddressInvalid: false,
            showVendorCategoryList: false,
            isVendorAddressClicked: false,
            isInvalidBusinessCategory: false,
            selectedVendorCatName: '',
            vendorLat: 0,
            vendorLng: 0,
            vendorCategoryList: [{ id: 1, categoryName: 'Food', isSelected: false }, { id: 2, categoryName: 'Shop', isSelected: false }, { id: 3, categoryName: 'Mart', isSelected: false }, { id: 4, categoryName: 'Services', isSelected: false }, { id: 5, categoryName: 'Gadgets', isSelected: false }, { id: 6, categoryName: 'Nearby', isSelected: false }, { id: 7, categoryName: 'Any', isSelected: false }],
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
            attachedLiDOc: {},
            attachedDOc: {},
            attachedDocName: "",
            attachedLiDocName: "",
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
            categoryList: [{ id: 1, categoryName: 'Food', isSelected: false }, { id: 2, categoryName: 'Shop', isSelected: false }, { id: 3, categoryName: 'Mart', isSelected: false }, { id: 4, categoryName: 'Services', isSelected: false }, { id: 5, categoryName: 'Gadgets', isSelected: false }, { id: 6, categoryName: 'Nearby', isSelected: false }]
        };
    }

    componentDidMount() {
        this.onPressCurrentLocation()
        this.onPressCorrentLocation()
    }

    onPressCurrentLocation = () => {
        return (
            GetLocation.getCurrentPosition({
                enableHighAccuracy: true,
                timeout: 15000,
            }).then(location => {
                this.setState({ vendorLat: location.latitude, vendorLng: location.longitude }, () => console.log("@@@ CurrentLocation", this.state.vendorLat))
            }).catch(error => {
                const { code, message } = error;
                console.warn(code, message);
            })
            // .then(this.setCurrentLocationToAsync())
        );
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

    onAttachliDocument = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.pdf, DocumentPicker.types.images],
            });
            console.log("@@@ Uploaded License ========", res);
            this.setState({ attachedLiDOc: res, attachedLiDocName: res.name, licence: res.uri, isInvalidDoc: false }, () => console.log("@@@ Uploaded License Name ========", this.state.attachedLiDocName))
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                // User cancelled the picker, exit any dialogs or menus and move on
            } else {
                throw err;
            }
        }
        // this.props.navigation.navigate("MainStackScreen")
    }

    onAttachDocument = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.pdf, DocumentPicker.types.images],
            });
            console.log("@@@ Uploaded Adhaar ========", res);
            this.setState({ attachedDOc: res, attachedDocName: res.name, adhaar: res.uri, isInvalidAdhaarDoc: false }, () => console.log("@@@ Uploaded Adhaar Name ========", this.state.attachedDocName))
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
        } else if (this.state.adhaar.trim().length === 0) {
            this.setState({ isInvalidAdhaarDoc: true })
            return
        // } else if (this.state.address.trim().length === 0) {
        //     this.setState({ isAddressInvalid: true })
        //     return
        } else if (this.state.licence.trim().length === 0) {
            this.setState({ isInvalidDoc: true })
            return
        } else if (this.state.photo.trim().length === 0) {
            this.setState({ isInvalidPic: true })
            return
        }
        let data = {
            'address': this.state.address,
            'adharCrard': this.state.adhaar,
            'emailId': this.state.email,
            'fullName': this.state.name,
            'licence': this.state.licence,
            'moibleNo': this.state.phone,
            'photo': this.state.profileImageData.data,
        }
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
            alert(error);
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

    onPressVendorRegistrationBtn = async () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (this.state.vendorName.trim().length === 0) {
            this.setState({ isInvalidVendorName: true })
            return
        } else if (this.state.vendorPhone.trim().length !== 10) {
            this.setState({ isInvalidVendorPhone: true })
            return
        } else if (this.state.storeName.trim().length === 0) {
            this.setState({ isInvalidStoreName: true })
            return
        } else if (this.state.storePhone.trim().length !== 10) {
            this.setState({ isInvalidStorePhone: true })
            return
            // } else if (this.state.vendorAddress.trim().length === 0) {
            //     this.setState({ isVendorAddressInvalid: true })
            //     return
        } else if (this.state.websiteLink.trim().length === 0) {
            this.setState({ isInvalidLink: true })
            return
        } else if (!reg.test(this.state.vendorEmail)) {
            this.setState({ isInvalidEmail: true })
            return
        } else if (this.state.businessCategory.trim().length === 0) {
            this.setState({ isInvalidBusinessCategory: true })
            return
        }
        let data = {};
        data['businessCategory'] = this.state.businessCategory;
        data['fullName'] = this.state.vendorName;
        data['storeAddress'] = this.state.vendorAddress;
        data['storeContacteNo'] = this.state.storePhone;
        data['storeName'] = this.state.storeName;
        data['vendorEmailId'] = this.state.vendorEmail;
        data['vendorPhoneNo'] = this.state.vendorPhone;
        data['websiteLink'] = this.state.websiteLink;
        console.log('@@@ Vendor Data CallBack ===================', data);
        this.props.onVendorRegistartion(data, (res) => this.onVendorRegistartionSuccessCallBack(res), (err) => this.onVendorRegistartionFailureCallBack(err))
    }

    onVendorRegistartionSuccessCallBack = async (res) => {
        console.log('@@@ Vendor Success CallBack ===================', res);
        alert('Your registration has been successfully completed');
        this.props.navigation.replace("UploadProduct")
    }

    onVendorRegistartionFailureCallBack = (error) => {
        if (error) {
            console.log('@@@ Vendor Failure CallBack ===================', error);
            alert(error);
        } else {
            console.log('@@@ Vendor Failure CallBack Network Error ===================');
            this.props.showErrorModal('Network Error!');
        }
    }

    onPressVendorChooseCategory = (item) => {
        var tempList = this.state.vendorCategoryList;
        for (var i = 0; i < tempList.length; i++) {
            if (tempList[i].id == item.id) {
                tempList[i]["isSelected"] = true;
                this.setState({ selectedVendorCatName: tempList[i]["categoryName"], showVendorCategoryList: false, businessCategory: tempList[i]["categoryName"] })
            } else {
                tempList[i]["isSelected"] = false;
            }
        }
        this.setState({ vendorCategoryList: tempList })
    }

    renderCheckbox = () => {
        return (
            <View style={{ marginTop: verticalScale(40) }} >
                <Text style={{ alignSelf: 'center', fontFamily: FONTS.MontserratRegular, fontSize: scale(20), color: COLOR_CONST.btnBgColor }}>Choose Account Type</Text>
                <View style={styles.logoCOntainer} >
                    <TouchableOpacity style={[styles.venderView, { marginLeft: scale(15) }]} onPress={() => this.setState({ isVendorSelected: true })}>
                        <ImageBackground style={styles.venderImage} source={IMG_CONST.vendor_for_registartion} resizeMode="contain">
                            <Image style={styles.check_box} source={this.state.isVendorSelected ? IMG_CONST.check_box : null} />
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.venderView, { marginRight: scale(15) }]} onPress={() => this.setState({ isVendorSelected: false })}>
                        <ImageBackground style={styles.venderImage} source={IMG_CONST.user_for_registartion} resizeMode="contain">
                            <Image style={styles.check_box} source={this.state.isVendorSelected ? null : IMG_CONST.check_box} />
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    renderVendorCategoryListCell = (item) => {
        return (
            <View>
                <TouchableOpacity onPress={() => this.onPressVendorChooseCategory(item)}>
                    <Text style={[styles.currentTetx, { marginTop: verticalScale(5), alignSelf: 'flex-start' }]}>{item.categoryName}</Text>
                </TouchableOpacity>
                <View style={styles.divider} />
            </View>
        );
    }

    renderVendorTextInputContainer = () => {
        return (
            <View style={styles.vendorTextInputView}>
                <View style={[styles.vendorNameView, { borderColor: this.state.isInvalidVendorName ? 'red' : '#00000040' }]}>
                    <Image source={IMG_CONST.user_name} style={styles.vendorUserIcon} resizeMode="contain" />
                    <TextInput
                        style={styles.vendorTextInput}
                        placeholderTextColor='#00000090'
                        placeholder="Full Name*"
                        onChangeText={(text) => this.setState({ vendorName: text, isInvalidVendorName: false })}
                    />
                    {this.state.isInvalidVendorName ? <View style={styles.vendorErrorView} /> : null}
                </View>
                <View style={[styles.vendorNameView, { borderColor: this.state.isInvalidVendorPhone ? 'red' : '#00000040' }]}>
                    <Image source={IMG_CONST.phone_numcer} style={styles.vendorUserIcon} resizeMode="contain" />
                    <TextInput
                        style={styles.vendorTextInput}
                        placeholderTextColor='#00000090'
                        placeholder="Phone Number*"
                        maxLength={10}
                        onChangeText={(text) => this.setState({ vendorPhone: text, isInvalidVendorPhone: false })}
                    />
                    {this.state.isInvalidVendorPhone ? <View style={styles.vendorErrorView} /> : null}
                </View>
                <View style={[styles.vendorNameView, { borderColor: this.state.isInvalidStoreName ? 'red' : '#00000040' }]}>
                    <Image source={IMG_CONST.store} style={styles.vendorUserIcon} resizeMode="contain" />
                    <TextInput
                        style={styles.vendorTextInput}
                        placeholderTextColor='#00000090'
                        placeholder="Store Name*"
                        onChangeText={(text) => this.setState({ storeName: text, isInvalidStoreName: false })}
                    />
                    {this.state.isInvalidStoreName ? <View style={styles.vendorErrorView} /> : null}
                </View>
                <View style={[styles.vendorNameView, { borderColor: this.state.isInvalidStorePhone ? 'red' : '#00000040' }]}>
                    <Image source={IMG_CONST.store_number} style={styles.vendorUserIcon} resizeMode="contain" />
                    <TextInput
                        style={styles.vendorTextInput}
                        placeholderTextColor='#00000090'
                        placeholder="Store Contact Number"
                        maxLength={10}
                        onChangeText={(text) => this.setState({ storePhone: text, isInvalidStorePhone: false })}
                    />
                    {this.state.isInvalidStorePhone ? <View style={styles.vendorErrorView} /> : null}
                </View>
                <View style={[styles.vendorEmailView, { borderColor: this.state.isInvalidVendorEmail ? 'red' : '#00000040' }]}>
                    <Image source={IMG_CONST.blueMail} style={styles.vendorMailIcon} resizeMode="contain" />
                    <TextInput
                        style={styles.vendorTextInput}
                        placeholderTextColor='#00000090'
                        placeholder="Email"
                        onChangeText={(text) => this.setState({ vendorEmail: text, isInvalidVendorEmail: false })}
                    />
                    {this.state.isInvalidVendorEmail ? <View style={styles.vendorErrorView} /> : null}
                </View>
                <TouchableOpacity style={[styles.vendorEmailView, { borderColor: this.state.isVendorAddressInvalid ? 'red' : '#00000040' }]} onPress={() => this.setState({ isVendorAddressClicked: true })}>
                    <Image source={IMG_CONST.address} style={styles.vendorMailIcon} resizeMode="contain" />
                    {!this.state.isVendorAddressClicked ?
                        <Text style={[styles.vendorTextInput, { color: this.state.vendorAddress ? '#000' : '#00000090' }]}>{this.state.vendorAddress ? this.state.vendorAddress : 'Store Address*'}</Text>
                        :
                        <MapView
                            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                            style={{ height: scale(25), width: scale(300), alignSelf: 'center', marginTop: verticalScale(5), }}
                            region={{
                                latitude: this.state.vendorLat,
                                longitude: this.state.vendorLng,
                                latitudeDelta: 0.015,
                                longitudeDelta: 0.0121,
                            }}></MapView>}
                    {/* {this.state.isInvalidVendorEmail ? <View style={styles.errorView} /> : null} */}
                </TouchableOpacity>
                <TouchableOpacity style={[styles.vendorEmailView, { borderColor: this.state.isInvalidBusinessCategory ? 'red' : '#00000040' }]} onPress={() => this.setState({ showVendorCategoryList: !this.state.showVendorCategoryList })}>
                    <Image source={IMG_CONST.category} style={styles.vendorMailIcon} resizeMode="contain" />
                    <Text style={[styles.vendorTextInput, { color: this.state.selectedVendorCatName ? '#000' : '#00000090' }]}>{this.state.selectedVendorCatName ? this.state.selectedVendorCatName : 'Business Category*'}</Text>
                    {/* {this.state.isInvalidVendorEmail ? <View style={styles.errorView} /> : null} */}
                </TouchableOpacity>
                {this.state.showVendorCategoryList ?
                    <View style={styles.vendorOpenedView}>
                        <FlatList
                            data={this.state.vendorCategoryList}
                            renderItem={({ item }) => this.renderVendorCategoryListCell(item)}
                            keyExtractor={(item) => item.id}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                    :
                    null}
                <View style={[styles.vendorNameView, { borderColor: this.state.isInvalidLink ? 'red' : '#00000040' }]}>
                    <Image source={IMG_CONST.web_link} style={styles.vendorUserIcon} resizeMode="contain" />
                    <TextInput
                        style={styles.vendorTextInput}
                        placeholderTextColor='#00000090'
                        placeholder="Website Link"
                        onChangeText={(text) => this.setState({ websiteLink: text, isInvalidLink: false })}
                    />
                    {this.state.isInvalidLink ? <View style={styles.vendorErrorView} /> : null}
                </View>
                <TouchableOpacity onPress={() => this.setState({ isVendorTAndCClicked: !this.state.isVendorTAndCClicked })} style={{ flexDirection: 'row', paddingTop: verticalScale(10) }}>
                    {this.state.isVendorTAndCClicked ?
                        <Image style={styles.vendorBlueCheck} source={IMG_CONST.checkBox} />
                        :
                        <Image style={styles.vendorBlueCheck} source={IMG_CONST.inactiveCheckBox} />
                    }
                    <Text style={[styles.vendorRememberText, { marginLeft: scale(7) }]}>Staff to deliver products?*</Text>
                </TouchableOpacity>
                {this.renderButtonContainer()}
            </View>
        )
    }

    renderButtonContainer = () => {
        return (
            <View style={{ alignSelf: 'center' }}>
                <TouchableOpacity style={styles.vendorLogintBtn} onPress={() => this.onPressVendorRegistrationBtn()}>
                    <Text style={styles.vendorLoginBtnText}>Register As Vendor</Text>
                </TouchableOpacity>
            </View>
        );
    }

    renderCategoryListCell = (item) => {
        return (
            <TouchableOpacity onPress={() => this.onPressChooseCategory(item)}>
                <Text style={[styles.currentTetx, { marginTop: verticalScale(5), alignSelf: 'flex-start' }]}>{item.categoryName}</Text>
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
                <TouchableOpacity style={[styles.emailView, { borderColor: this.state.isAddressInvalid ? 'red' : '#00000040' }]} onPress={() => this.setState({ isAddressClicked: true })}>
                    <Image source={IMG_CONST.metroLocation} style={styles.mailIcon} resizeMode="contain" />
                    {!this.state.isAddressClicked ?
                        <Text style={[styles.textInput, { color: this.state.address ? '#000' : '#00000090' }]}>{this.state.address ? this.state.address : 'Address*'}</Text>
                        :
                        <MapView
                            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                            style={{ height: scale(25), width: scale(300), alignSelf: 'center', marginTop: verticalScale(5), }}
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
                        <TouchableOpacity style={[styles.uploadView, { justifyContent: 'space-between', }]} onPress={() => this.setState({ showPickerModal: true })} style={[styles.uploadView, { borderColor: this.state.isInvalidPic ? 'red' : '#00000040', marginLeft: scale(10) }]}>
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
                            <Text style={[styles.currentTetx, { color: '#000', marginRight: scale(10) }]}> Uploaded Photo</Text>
                        </TouchableOpacity>
                    }
                    {/* {this.state.isInvalidPic ? <View style={styles.errorView} /> : null} */}
                    <TouchableOpacity style={[styles.uploadView, { borderColor: this.state.isInvalidDoc ? 'red' : '#00000040' }]} onPress={() => this.onAttachliDocument()}>
                        <Text style={[styles.currentTetx, { color: this.state.attachedLiDocName.length === 0 ? '#00000090' : '#000', alignSelf: 'center' }]}>{this.state.attachedLiDocName.length !== 0 ? this.state.attachedLiDocName : 'Upload Licence'}</Text>
                        {this.state.isInvalidDoc ? <View style={styles.errorView} /> : null}
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.uploadView, { borderColor: this.state.isInvalidAdhaarDoc ? 'red' : '#00000040', marginRight: scale(10) }]} onPress={() => this.onAttachDocument()}>
                        <Text style={[styles.currentTetx, { color: this.state.attachedDocName.length === 0 ? '#00000090' : '#000', alignSelf: 'center' }]}>{this.state.attachedDocName.length !== 0 ? this.state.attachedDocName : 'Upload Adhaar'}</Text>
                        {this.state.isInvalidAdhaarDoc ? <View style={styles.errorView} /> : null}
                    </TouchableOpacity>
                </View>
                {this.renderEmployeeButtonContainer()}
            </View>
        )
    }

    renderEmployeeButtonContainer = () => {
        return (
            <View style={{ alignSelf: 'center' }}>
                <TouchableOpacity style={styles.logintBtn} onPress={() => this.onPressRegistrationBtn()}>
                    <Text style={styles.loginBtnText}>Register As Delivery Partner</Text>
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
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }} keyboardShouldPersistTaps={'always'}>
                    <StatusBar barStyle="dark-content" />
                    {this.renderCheckbox()}
                    {
                        this.state.isVendorSelected ?
                            <View>
                                {this.renderVendorTextInputContainer()}
                            </View>
                            :
                            <View>
                                {this.renderTextInputContainer()}
                                {this.renderImagePickerModal()}
                            </View>
                    }
                </KeyboardAwareScrollView>
            </ScrollView>
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
        onVendorRegistartion: (data, successCallBack, failureCallBack) => dispatch(userActions.onVendorRegistartion(data, successCallBack, failureCallBack)),
        onEmployeeRegistartion: (data, successCallBack, failureCallBack) => dispatch(userActions.onEmployeeRegistartion(data, successCallBack, failureCallBack)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(VendorRegistrationScree)
