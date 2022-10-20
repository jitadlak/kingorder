import React, { Component } from 'react';
import styles from './LoginStyle'
import { Image, ImageBackground, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import COLOR_CONST from '../../theme/ColorConstants';
import * as IMG_CONST from '../../theme/ImageConstants';
import * as STRING_CONST from '../../theme/StringConstants';
import scale, { verticalScale } from '../../utils/Scale';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';
import * as commonActions from '../../redux/actions/commonActions';
import * as userActions from '../../redux/actions/userActions';
import AsyncStorage from '@react-native-community/async-storage';

class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEyeClicked: true,
            phoneNo: '',
            otp: '',
            isInvalidOtp: false,
            isInvalidphoneNo: false,
            text: ''
        };
    }

    onPressLoginButton = () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!reg.test(this.state.phoneNo)) {
            this.setState({ isInvalidphoneNo: true })
            return
        } else if (this.state.otp.trim().length < 4) {
            this.setState({ isInvalidOtp: true })
            return
        }
        let data = {};
        data['emailId'] = this.state.phoneNo;
        data['password'] = this.state.otp;
        this.props.onLoginUser(data, (res) => this.onLoginUserSuccessCallBack(res), (err) => this.onLoginUserFailureCallBack(err))
    }

    onLoginUserSuccessCallBack = async (res) => {
        console.log('@@@ Login Success CallBack ===================', res);
        let userData = res.data.data;
        await AsyncStorage.setItem('USER_TOKEN', userData.jwt);
        await AsyncStorage.setItem('USER_PHONE', this.state.phoneNo);
        alert('You have been Logged In Successfully')
        this.setState({ phoneNo: '', otp: '' });
        // setTimeout(() => {
        //     // this.props.showErrorModal('You have been Logged In Successfully', false);
        //     setTimeout(async () => {
        //         this.props.hideErrorModal();
        //         let userData = res.data.data;
        //         await AsyncStorage.setItem('USER_TOKEN', userData.jwt);
        //         // await AsyncStorage.setItem('USER_ID', String(userData.user_id));
        //         alert('You have been Logged In Successfully')
        //         this.setState({ email: '', password: '' });
        //     }, 2000);
        // }, 0);
        this.props.navigation.replace("MainStackScreen");
    }

    onLoginUserFailureCallBack = (error) => {
        // if (error) {
        //     setTimeout(() => {
        //         this.setState({ errorMessage: error }, () => {
        //             console.log('@@@ Login Failure CallBack ===================', error);
        //             this.props.showErrorModal(error);
        //         });
        //     }, 0);
        // } else {
        //     setTimeout(() => {
        //         this.setState({ errorMessage: 'Network Error!' }, () => {
        //             console.log('@@@ Login Failure CallBack Network Error ===================');
        //             this.props.showErrorModal('Network Error!');
        //         });
        //     }, 0);
        // }
        if (error) {
            console.log('@@@ Login Failure CallBack ===================', error);
            alert(error.data);
        } else {
            console.log('@@@ Login Failure CallBack Network Error ===================');
            alert('Network Error!');
        }
    }

    renderLogoContainer = () => {
        return <ImageBackground style={styles.logoCOntainer} source={IMG_CONST.background}>
            {/* <Image source={IMG_CONST.logo} style={styles.appLogo} resizeMode="contain" /> */}
            <Image source={IMG_CONST.newLogo} style={styles.appText} resizeMode="contain" />
        </ImageBackground>
    }

    renderTextInputContainer = () => {
        return (
            <View style={styles.textInputView}>
                <View style={[styles.emailView, { borderColor: this.state.isInvalidphoneNo ? 'red' : '#00000040' }]}>
                    <Image source={IMG_CONST.mail} style={styles.mailIcon} resizeMode="contain" />
                    <TextInput
                        style={styles.textInput}
                        placeholderTextColor='#00000090'
                        placeholder="Phone Number"
                        onChangeText={(text) => this.setState({ phoneNo: text, isInvalidphoneNo: false })}
                    />
                    {this.state.isInvalidphoneNo ? <View style={styles.errorView} /> : null}
                </View>
                <View style={[styles.passView, { borderColor: this.state.isInvalidOtp ? 'red' : '#00000040' }]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={IMG_CONST.lock} style={styles.lockIcon} resizeMode="contain" />
                        <TextInput
                            style={styles.textInput1}
                            placeholderTextColor='#00000090'
                            placeholder="OTP"
                            secureTextEntry={this.state.isEyeClicked}
                            onChangeText={(text) => this.setState({ otp: text, isInvalidOtp: false })}
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => this.setState({ isEyeClicked: !this.state.isEyeClicked })}>
                            <Image source={this.state.isEyeClicked ? IMG_CONST.crossedEye : IMG_CONST.eye} style={styles.eyeIcon} resizeMode="contain" />
                        </TouchableOpacity>
                        {this.state.isInvalidOtp ? <View style={styles.errorView} /> : null}
                    </View>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("MainStackScreen")} style={{ flexDirection: 'row', paddingTop: verticalScale(10), justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={[styles.rememberText, { marginLeft: scale(7), fontSize: scale(14) }]}>SKIP</Text>
                </TouchableOpacity>
                {this.renderButtonContainer()}
            </View>
        )
    }

    renderButtonContainer = () => {
        return (
            <View style={{ alignSelf: 'center' }}>
                <TouchableOpacity style={styles.logintBtn} onPress={() => this.onPressLoginButton()}>
                    <Text style={styles.loginBtnText}>Login</Text>
                </TouchableOpacity>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("SignUp")} style={{ alignSelf: 'center' }}>
                        <Text style={styles.haveAccountLink}>Create an account</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }} keyboardShouldPersistTaps={'always'}>
                    <StatusBar barStyle="light-content" />
                    {/* <ImageBackground
                    source={IMG_CONST.SPLASH_BG}
                    style={styles.container}
                > */}
                    {this.renderLogoContainer()}
                    {this.renderTextInputContainer()}
                    {/* </ImageBackground> */}
                </KeyboardAwareScrollView>
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
        onLoginUser: (data, successCallBack, failureCallBack) => dispatch(userActions.onLoginUser(data, successCallBack, failureCallBack)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)