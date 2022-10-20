import React, { Component } from 'react';
import styles from './ForgetChangePasswordStyle'
import { Image, ImageBackground, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import COLOR_CONST from '../../theme/ColorConstants';
import * as IMG_CONST from '../../theme/ImageConstants';
import * as STRING_CONST from '../../theme/StringConstants';
import scale, { verticalScale } from '../../utils/Scale';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class ForgetChangePasswordScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pass: '',
            confirmPass: '',
            isValidPass: false,
            isInvalidPass: false,
            isInvalidConfirmPass: false,
            isEyePassClicked: true,
            isEyeClicked: true,
        };
    }

    onPressSavePassBtn = () => {
        if (this.state.pass.trim().length > 4) {
            this.setState({ isInvalidPass: true })
            return
        } else if (this.state.confirmPass.trim().length > 4) {
            this.setState({ isInvalidConfirmPass: true })
            return
        } else if (this.state.pass !== this.state.confirmPass) {
            this.setState({ isInvalidConfirmPass: true, isInvalidPass: true })
            return
        } else { this.props.navigation.navigate("MainStackScreen") }
    }

    renderChangePasswordContainer = () => {
        return (
            <View style={{ alignSelf: 'center' }}>
                <View style={styles.ROW}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image style={styles.backIcon} source={IMG_CONST.backIcon} resizeMode="contain" />
                    </TouchableOpacity>
                    <Text style={styles.phoneText}>Forget Password</Text>
                </View>
                <View style={styles.changePassView}>
                    <Text style={styles.createPassText}>Create new Password</Text>
                    <View style={[styles.passView, { borderColor: this.state.isInvalidPass ? 'red' : '#77a4ba', borderWidth: this.state.isInvalidPass ? scale(1) : scale(1.5) }]}>
                        <TextInput
                            style={styles.textInput}
                            placeholderTextColor='#00000090'
                            placeholder="Password"
                            secureTextEntry={this.state.isEyeClicked}
                            onChangeText={(text) => this.setState({ pass: text, isInvalidPass: false, isValidPass: true })}
                        />
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => this.setState({ isEyeClicked: !this.state.isEyeClicked })}>
                                <Image source={this.state.isEyeClicked ? IMG_CONST.crossedEye : IMG_CONST.eye} style={[styles.eyeIcon, { opacity: !this.state.isEyeClicked ? null : 0.6 }]} resizeMode="contain" />
                            </TouchableOpacity>
                            {this.state.isInvalidPass ? <View style={styles.errorView} /> : null}
                        </View>
                    </View>
                    <View style={[styles.conPassView, { borderColor: this.state.isInvalidConfirmPass ? 'red' : '#77a4ba', borderWidth: this.state.isInvalidConfirmPass ? scale(1) : scale(1.5) }]}>
                        <TextInput
                            style={styles.textInput1}
                            placeholderTextColor='#00000090'
                            placeholder="Password"
                            secureTextEntry={this.state.isEyePassClicked}
                            onChangeText={(text) => this.setState({ confirmPass: text, isInvalidConfirmPass: false, isValidPass: true })}
                        />
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => this.setState({ isEyePassClicked: !this.state.isEyePassClicked })}>
                                <Image source={this.state.isEyePassClicked ? IMG_CONST.crossedEye : IMG_CONST.eye} style={[styles.eyeIcon, { opacity: !this.state.isEyePassClicked ? null : 0.6 }]} resizeMode="contain" />
                            </TouchableOpacity>
                            {this.state.isInvalidConfirmPass ? <View style={styles.errorView} /> : null}
                        </View>
                    </View>
                </View>
                <TouchableOpacity
                    disabled={!this.state.isValidPass} onPress={() => this.onPressSavePassBtn()}
                    style={[styles.savePassBtn, { backgroundColor: this.state.isValidPass ? COLOR_CONST.btnBgColor : "#e4e7ed" }]}>
                    <Text style={[styles.savePassText, { color: this.state.isValidPass ? COLOR_CONST.white : "#00000090" }]}>Save Password</Text>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }} keyboardShouldPersistTaps={'always'}>
                    <View style={styles.container} >
                        {/* <Image source={IMG_CONST.logo} style={styles.appLogo} resizeMode="contain" />
                        <Image source={IMG_CONST.kingsorder} style={styles.appText} resizeMode="contain" /> */}
                        <StatusBar barStyle="light-content" />
                        {this.renderChangePasswordContainer()}
                    </View>
                </KeyboardAwareScrollView>
            </View>
        )
    }
}

export default ForgetChangePasswordScreen