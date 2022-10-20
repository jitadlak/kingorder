import React, { Component } from 'react';
import styles from './AboutUsStyle'
import { Image, StatusBar, Text, TextInput, TouchableOpacity, View, Modal, FlatList } from 'react-native';
import * as IMG_CONST from '../../theme/ImageConstants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import * as commonActions from '../../redux/actions/commonActions';
import * as userActions from '../../redux/actions/userActions';
import * as homeActions from '../../redux/actions/homeActions';

export class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aboutUs: ''
        }
    }

    componentDidMount = () => {
        this.getAboutUsData();
    }

    getAboutUsData = async () => {
        this.props.getAboutUsData((res) => this.getAboutUsDataSuccessCallBack(res), (err) => this.getAboutUsDataFailureCallBack(err))
    }

    getAboutUsDataSuccessCallBack = async (res) => {
        console.log('@@@ Get About Us Success CallBack ===================', res);
        this.setState({ aboutUs: res.data.aboutUs });
    }

    getAboutUsDataFailureCallBack = (error) => {
        console.log('@@@ Get About Us Failure CallBack ===================', error);
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

    renderHeaderContainer = () => {
        return (
            <View style={styles.headerContainer}>
                {/* <TouchableOpacity onPress={() => this.props.navigation.goBack()}><Image style={styles.backIcon} source={IMG_CONST.backIcon} /></TouchableOpacity> */}
                <Text style={styles.mainText}>About Us</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Notification")}><Image style={styles.bellIcon} source={IMG_CONST.whiteNotification} /></TouchableOpacity>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }} keyboardShouldPersistTaps={'always'}>
                    <StatusBar barStyle="light-content" />
                    {this.renderHeaderContainer()}
                    <Text style={styles.aboutUs}>{this.state.aboutUs}</Text>
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
        getAboutUsData: (successCallBack, failureCallBack) => dispatch(userActions.getAboutUsData(successCallBack, failureCallBack)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs)
