import React, { Component } from 'react';
import styles from './CreateAccountStyle'
import { Image, ScrollView, ImageBackground, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import COLOR_CONST from '../../theme/ColorConstants';
import * as IMG_CONST from '../../theme/ImageConstants';
import * as STRING_CONST from '../../theme/StringConstants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import scale, { verticalScale } from '../../utils/Scale';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import * as commonActions from '../../redux/actions/commonActions';
import * as userActions from '../../redux/actions/userActions';

class CreateAccountScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEyeClicked: true,
            email: '',
            pass: '',
            name: '',
            phone: '',
            isInvalidName: false,
            isInvalidPass: false,
            isInvalidEmail: false
        };
    }

    onPressSignUpBtn = async () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (this.state.name.trim().length === 0) {
            this.setState({ isInvalidName: true })
            return
        } else if (!reg.test(this.state.email)) {
            this.setState({ isInvalidEmail: true })
            return
        } else if (this.state.pass.trim().length <= 4) {
            this.setState({ isInvalidPass: true })
            return
        }
        let data = {};
        data['emailId'] = this.state.email;
        data['firstname'] = this.state.name;
        data['password'] = this.state.pass;
        data['mobileno'] = this.state.phone;
        console.log('@@@ SignUp Data CallBack ===================', data);
        this.props.onSignUpUser(data, (res) => this.onSignUpUserSuccessCallBack(res), (err) => this.onSignUpUserFailureCallBack(err))
    }

    onSignUpUserSuccessCallBack = async (res) => {
        console.log('@@@ SignUp Success CallBack ===================', res);
        // setTimeout(() => {
        //     this.props.showErrorModal('You have been Sign Up Successfully', false);
        //     setTimeout(async () => {
        //         this.props.hideErrorModal();
        //         let userData = res.data;
        //         await AsyncStorage.setItem('USER_TOKEN', userData.token);
        //         await AsyncStorage.setItem('USER_ID', String(userData.user_id));
        //         this.setState({ email: '', password: '' });
        //     }, 2000);
        // }, 0);
        alert('You have been Sign Up Successfully');
        let userName = await AsyncStorage.setItem('USER_NAME', this.state.name);
        this.props.navigation.replace("MainStackScreen", { userName: userName })
    }

    onSignUpUserFailureCallBack = (error) => {
        if (error) {
            console.log('@@@ SignUp Failure CallBack ===================', error);
            alert(error);
            // setTimeout(() => {
            //     this.setState({ errorMessage: error }, () => {
            //         console.log('@@@ SignUp Failure CallBack ===================', error);
            //         this.props.showErrorModal(error);
            //     });
            // }, 0);
        } else {
            console.log('@@@ SignUp Failure CallBack Network Error ===================');
            alert('Network Error!');
            // setTimeout(() => {
            //     this.setState({ errorMessage: 'Network Error!' }, () => {
            //         console.log('@@@ SignUp Failure CallBack Network Error ===================');
            //         this.props.showErrorModal('Network Error!');
            //     });
            // }, 0);
        }
    }

    renderLogoContainer = () => {
        return (
            <ImageBackground style={styles.logoCOntainer} source={IMG_CONST.background}>
                {/* <Image source={IMG_CONST.logo} style={styles.appLogo} resizeMode="contain" /> */}
                <Image source={IMG_CONST.newLogo} style={styles.appText} resizeMode="contain" />
            </ImageBackground>
        )
    }

    renderTextInputContainer = () => {
        return (
            <View style={styles.textInputView}>
                <View style={[styles.nameView, { borderColor: this.state.isInvalidName ? 'red' : '#00000040' }]}>
                    <Image source={IMG_CONST.user} style={styles.userIcon} resizeMode="contain" />
                    <TextInput
                        style={styles.textInput}
                        placeholderTextColor='#00000090'
                        placeholder="Firstname Lastname"
                        onChangeText={(text) => this.setState({ name: text, isInvalidName: false })}
                    />
                    {this.state.isInvalidName ? <View style={styles.errorView} /> : null}
                </View>
                <View style={[styles.emailView, { borderColor: this.state.isInvalidEmail ? 'red' : '#00000040' }]}>
                    <Image source={IMG_CONST.mail} style={styles.mailIcon} resizeMode="contain" />
                    <TextInput
                        style={styles.textInput}
                        placeholderTextColor='#00000090'
                        placeholder="Email"
                        onChangeText={(text) => this.setState({ email: text, isInvalidEmail: false })}
                    />
                    {this.state.isInvalidEmail ? <View style={styles.errorView} /> : null}
                </View>
                <View style={[styles.passView, { borderColor: this.state.isInvalidPass ? 'red' : '#00000040' }]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={IMG_CONST.lock} style={styles.lockIcon} resizeMode="contain" />
                        <TextInput
                            style={styles.textInput1}
                            placeholderTextColor='#00000090'
                            placeholder="Password"
                            secureTextEntry={this.state.isEyeClicked}
                            onChangeText={(text) => this.setState({ pass: text, isInvalidPass: false })}
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        {/* <TouchableOpacity onPress={() => this.setState({ isEyeClicked: !this.state.isEyeClicked })}>
                            <Image source={this.state.isEyeClicked ? IMG_CONST.crossedEye : IMG_CONST.eye} style={styles.eyeIcon} resizeMode="contain" />
                        </TouchableOpacity> */}
                        {this.state.isInvalidPass ? <View style={styles.errorView} /> : null}
                    </View>
                </View>
                <View style={[styles.passView, { borderColor: this.state.isInvalidPass ? 'red' : '#00000040' }]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={IMG_CONST.lock} style={styles.lockIcon} resizeMode="contain" />
                        <TextInput
                            style={styles.textInput1}
                            placeholderTextColor='#00000090'
                            placeholder="Phone Number"
                            secureTextEntry={this.state.isEyeClicked}
                            maxLength={10}
                            onChangeText={(text) => this.setState({ phone: text, isInvalidPass: false })}
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        {/* <TouchableOpacity onPress={() => this.setState({ isEyeClicked: !this.state.isEyeClicked })}>
                            <Image source={this.state.isEyeClicked ? IMG_CONST.crossedEye : IMG_CONST.eye} style={styles.eyeIcon} resizeMode="contain" />
                        </TouchableOpacity> */}
                        {this.state.isInvalidPass ? <View style={styles.errorView} /> : null}
                    </View>
                </View>
                <TouchableOpacity onPress={() => this.setState({ isTAndCClicked: !this.state.isTAndCClicked })} style={{ flexDirection: 'row', paddingTop: verticalScale(10) }}>
                    {this.state.isTAndCClicked ?
                        <Image style={styles.blueCheck} source={IMG_CONST.checkBox} />
                        :
                        <Image style={styles.blueCheck} source={IMG_CONST.inactiveCheckBox} />
                    }
                    <Text style={[styles.rememberText, { marginLeft: scale(7), fontSize: scale(14) }]}>Terms And Conditions</Text>
                </TouchableOpacity>
                {this.renderButtonContainer()}
            </View>
        )
    }

    renderButtonContainer = () => {
        return (
            <View style={{ alignSelf: 'center', marginBottom: verticalScale(20) }}>
                <TouchableOpacity style={styles.logintBtn} onPress={() => this.onPressSignUpBtn()}>
                    <Text style={styles.loginBtnText}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")} style={{ marginBottom: verticalScale(30) }}>
                    <Text style={styles.haveAccountLink}>I have an account already</Text>
                </TouchableOpacity>
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
        onSignUpUser: (data, successCallBack, failureCallBack) => dispatch(userActions.onSignUpUser(data, successCallBack, failureCallBack)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccountScreen)
