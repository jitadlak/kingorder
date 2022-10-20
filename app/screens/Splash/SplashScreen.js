/**
 * Splash Screen
 */
import React, { Component } from 'react';
import { Image, ImageBackground, StatusBar, View } from 'react-native';
import * as IMG_CONST from '../../../app/theme/ImageConstants';
import styles from './SplashScreenStyle';
import AsyncStorage from '@react-native-community/async-storage';
import COLOR_CONST from '../../theme/ColorConstants';

class SplashScreen extends Component {

  async componentDidMount() {
    let userToken = await AsyncStorage.getItem('USER_TOKEN');
    this.timeoutHandle = setTimeout(() => {
      // if(!userToken)
      //   this.props.navigation.replace('AuthStackScreen');
      // else
        // this.props.navigation.replace('MainStackScreen');
      this.props.navigation.replace('Onboarding');
      // this.props.navigation.replace('UploadProduct');
    }, 5000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutHandle);
  }

  render() {
    return (
      <ImageBackground style={styles.container} source={IMG_CONST.background}>
        <StatusBar hidden={true} />
        {/* <Image source={IMG_CONST.logo} style={styles.appLogo} resizeMode="contain" /> */}
        <Image source={IMG_CONST.newLogo} style={styles.appText} resizeMode="contain" />
      </ImageBackground>
    );
  }
};

export default SplashScreen;
