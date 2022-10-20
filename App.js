/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, ImageBackground, StatusBar } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import RootStackScreen from './app/screens/RootStackNavigator/RootStackScreen';
import { Provider } from 'react-redux';
import configureStore from './app/redux/config/store/index';
import ApplicationLoader from './app/components/AppLoader/AppLoader';
import CustomErrorModal from './app/components/CustomErrorModal/CustomErrorModal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkTheme: false,
      isLoading: true,
      isLoggedIn: false,
      isOnBoardingCompleted: false,
      store: configureStore(() => {
      }).store
    };
    console.disableYellowBox = true;
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <StatusBar barStyle="dark-content" backgroundColor={'#004491'} />
        <NavigationContainer>
          {/* <ApplicationLoader /> */}
          {/* <CustomErrorModal /> */}
          <RootStackScreen />
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
