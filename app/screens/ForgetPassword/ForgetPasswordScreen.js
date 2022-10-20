import React, { Component } from 'react';
import styles from './ForgetPasswordStyle'
import { Image, ImageBackground, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import COLOR_CONST from '../../theme/ColorConstants';
import * as IMG_CONST from '../../theme/ImageConstants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import * as commonActions from '../../redux/actions/commonActions';
import * as userActions from '../../redux/actions/userActions';

class ForgetPasswordScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEyeClicked: true,
            phone: '',
            pass: '',
            isInvalidPass: false,
            isInvalidPhone: false,
            verifyNumber: '',
            confirmation: null,
            phoneNumber: '',
            inputBoxLength: 4,
            isPasswordChanged: false,
            otp: [],
            verifyNumber: '',
            isSendCodeClicked: false,
            isOtpEntered: false,
            isInvalidOtp: false,
        };
    }
    otpTextInput = [];

    onPressSendCodeBtn = () => {
        if (this.state.phoneNumber.trim().length < 10) {
            this.setState({ isInvalidPhone: true })
            return
        } else {
            this.setState({ isSendCodeClicked: true })
        }
        let data = {};
        data['emailId'] = this.state.email;
        data['firstname'] = this.state.name;
        data['password'] = this.state.pass;
        data['mobileno'] = '9';
        this.props.forgotPassword(data, (res) => this.onForgotPasswordSuccessCallBack(res), (err) => this.onForgotPasswordFailureCallBack(err))
    }

    onForgotPasswordSuccessCallBack = async (res) => {
        console.log('@@@ Forgot Success CallBack ===================', res);
        setTimeout(() => {
            // this.props.showErrorModal('You have been  Successfully', false);
            setTimeout(async () => {
                this.props.hideErrorModal();
                let userData = res.data;
                await AsyncStorage.setItem('USER_TOKEN', userData.token);
                await AsyncStorage.setItem('USER_ID', String(userData.user_id));
                this.setState({ email: '', password: '' });
            }, 2000);
        }, 0);
        let userName = await AsyncStorage.setItem('USER_NAME', this.state.name);
        this.props.navigation.replace("MainStackScreen", { userName: userName })    
    }

    onForgotPasswordFailureCallBack = (error) => {
        if (error) {
            setTimeout(() => {
                this.setState({ errorMessage: error }, () => {
                    console.log('@@@ Forgot Failure CallBack ===================', error);
                    this.props.showErrorModal(error);
                });
            }, 0);
        } else {
            setTimeout(() => {
                this.setState({ errorMessage: 'Network Error!' }, () => {
                    console.log('@@@ SignUp Failure CallBack Network Error ===================');
                    this.props.showErrorModal('Network Error!');
                });
            }, 0);
        }
    }

    formatUSNumber(phone) {
        let ph = phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3")
        console.log("@@@ Formated Phone Number=======", ph)
        // this.setState({phoneNumber: ph})  
        return ph
    }

    onPressConfirmCode = async () => {
        this.props.navigation.navigate("ForgetChange")
        if (this.otpTextInput.trim().length < 4) {
            this.setState({ isInvalidOtp: true })
            return
        }
        // let finalOTP = this.state.otp.join('')
        // const { confirmation } = this.state
        // alert(finalOTP)
        // try {
        //     const result = await confirmation.confirm(finalOTP);
        //     console.log('@@@ Result=============', result);
        //     alert('Account verified successfully.')
        //     this.props.navigation.navigate('HomeScreen', { phoneNumber: this.state.phoneNumber })
        // } catch (error) {
        //     alert('Invalid otp code.');
        // }
        let data = {};
        data['emailId'] = this.state.email;
        data['firstname'] = this.state.name;
        data['password'] = this.state.pass;
        data['mobileno'] = '9';
        this.props.verifyOTP(data, (res) => this.onVerifyOTPSuccessCallBack(res), (err) => this.onVerifyOTPFailureCallBack(err))
        this.props.navigation.navigate("ForgetChange")
    }

    onVerifyOTPSuccessCallBack = async (res) => {
        console.log('@@@ OTP Entered Success CallBack ===================', res);
        setTimeout(() => {
            this.props.showErrorModal('OTP Entered Successfully', false);
            setTimeout(async () => {
                this.props.hideErrorModal();
                let userData = res.data;
                await AsyncStorage.setItem('USER_TOKEN', userData.token);
                await AsyncStorage.setItem('USER_ID', String(userData.user_id));
                this.setState({ email: '', password: '' });
            }, 2000);
        }, 0);
        let userName = await AsyncStorage.setItem('USER_NAME', this.state.name);
        this.props.navigation.replace("MainStackScreen", { userName: userName })    
    }

    onVerifyOTPFailureCallBack = (error) => {
        if (error) {
            setTimeout(() => {
                this.setState({ errorMessage: error }, () => {
                    console.log('@@@ OTP Entered Failure CallBack ===================', error);
                    this.props.showErrorModal(error);
                });
            }, 0);
        } else {
            setTimeout(() => {
                this.setState({ errorMessage: 'Network Error!' }, () => {
                    console.log('@@@ SignUp Failure CallBack Network Error ===================');
                    this.props.showErrorModal('Network Error!');
                });
            }, 0);
        }
    }

    focusPrevious(key, index) {
        if (key === 'Backspace' && index !== 0)
            this.otpTextInput[index - 1].focus();
    }

    focusNext(index, value) {
        this.setState({ isPasswordChanged: false });
        if (index < this.otpTextInput.length - 1 && value) {
            this.otpTextInput[index + 1].focus();
        }
        if (index === this.otpTextInput.length - 1) {
            this.otpTextInput[index].blur();
        }
        const otp = this.state.otp;
        otp[index] = value.charAt(value.length - 1);
        this.setState({ otp, isOtpEntered: true });
        console.log('OTP number===============', this.state.otp)
    }

    renderOtpInputContainer = () => {
        const inputs = Array(this.state.inputBoxLength).fill(0);
        return (
            <View>
                <View style={styles.ROW}>
                    <TouchableOpacity onPress={() => this.setState({ isSendCodeClicked: false })}>
                        <Image style={styles.backIcon} source={IMG_CONST.backIcon} resizeMode="contain" />
                    </TouchableOpacity>
                    <Text style={styles.phoneText}>Forget Password</Text>
                </View>
                <View style={styles.otpInputView}>
                    <Text style={styles.phoneNumberText}>Confirmtion Code</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.resetCodeText}>We have sent a code to <Text style={styles.highlightNo}>{this.formatUSNumber(this.state.phoneNumber)}</Text>. Please write down</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        {inputs.map((i, j) => (
                            <View key={j} style={[styles.inputView, { borderColor: !this.state.isInvalidOtp ? 'transparent' : '#00000040' }]}>
                                <View style={[styles.colorBorderView, { borderColor: this.state.isInvalidOtp ? '#e34d50' : '#77a4ba' }]}>
                                    <TextInput
                                        style={styles.input}
                                        keyboardType="numeric"
                                        onChangeText={(v) => this.focusNext(j, v)}
                                        onKeyPress={(e) => this.focusPrevious(e.nativeEvent.key, j)}
                                        ref={(ref) => (this.otpTextInput[j] = ref)}
                                        value={this.state.otp[j]}
                                    />
                                </View>
                            </View>
                        ))}
                    </View>
                    {this.state.isInvalidOtp ? <Text style={styles.wrongOtp}>Wrong code. Please try again.</Text> : null}
                    <TouchableOpacity style={styles.resendBtn} onPress={() => this.setState({ otpTextInput: [], otp: [] })}>
                        <Image
                            style={styles.resendText}
                            source={IMG_CONST.refreshCw}
                        />
                        <Text style={styles.resendText}>Resend</Text>
                    </TouchableOpacity>
                    {this.renderButtonContainer()}
                </View>

            </View>
        )
    }

    renderNumberInputContainer = () => {
        return (
            <View>
                <View style={styles.ROW}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image style={styles.backIcon} source={IMG_CONST.backIcon} resizeMode="contain" />
                    </TouchableOpacity>
                    <Text style={styles.phoneText}>Forget Password</Text>
                </View>
                <View style={styles.textInputView}>
                    <Text style={styles.phoneNumberText}>Phone Number</Text>
                    <Text style={styles.resetCodeText}>Please enter your phone number. We will send you a reset code.</Text>
                    <View style={styles.codeView}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.codeText}>+91</Text>
                            <Image source={IMG_CONST.downArrow} style={styles.downArrow} resizeMode="contain" />
                        </View>
                        <View style={[styles.phoneView, { borderColor: this.state.isInvalidPhone ? 'red' : '#77a4ba' }]}>
                            <TextInput
                                style={styles.textInput}
                                keyboardType="numeric"
                                placeholderTextColor='#00000090'
                                placeholder="Phone Number"
                                maxLength={10}
                                value={this.formatUSNumber(this.state.phoneNumber)}
                                onChangeText={(text) => this.setState({ phoneNumber: text, isInvalidPhone: false }, () => this.formatUSNumber(this.state.phoneNumber))}
                            />
                        </View>
                    </View>
                    {this.renderButtonContainer()}
                </View>
            </View>
        )
    }

    renderButtonContainer = () => {
        return (
            <View style={{ alignSelf: 'center' }}>
                <TouchableOpacity
                    disabled={this.state.isSendCodeClicked ? !this.state.isOtpEntered : null}
                    style={this.state.isSendCodeClicked ? [styles.confirmCodeBtn, { backgroundColor: this.state.isOtpEntered ? COLOR_CONST.btnBgColor : COLOR_CONST.diableCodeBtn }] : styles.sendCodeBtn} onPress={() => this.state.isSendCodeClicked ? this.onPressConfirmCode() : this.onPressSendCodeBtn()}
                >
                    <Text style={this.state.isSendCodeClicked ? [styles.sendCodeText, { color: this.state.isOtpEntered ? COLOR_CONST.white : "#00000090" }] : styles.sendCodeText}>{this.state.isSendCodeClicked ? "Confirm Code" : "Send Code"}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }} keyboardShouldPersistTaps={'always'}>
                    <View style={styles.container} >
                        <StatusBar barStyle="light-content" />
                        {!this.state.isSendCodeClicked && this.renderNumberInputContainer()}
                        {this.state.isSendCodeClicked && this.renderOtpInputContainer()}
                    </View>
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
        forgotPassword: (data, successCallBack, failureCallBack) => dispatch(userActions.forgotPassword(data, successCallBack, failureCallBack)),
        verifyOTP: (data, successCallBack, failureCallBack) => dispatch(userActions.verifyOTP(data, successCallBack, failureCallBack)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgetPasswordScreen)