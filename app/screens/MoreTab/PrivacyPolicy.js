import React, { Component } from 'react';
import styles from './PrivacyPolicyStyle'
import { Image, StatusBar, Text, TextInput, TouchableOpacity, View, Modal, FlatList } from 'react-native';
import * as IMG_CONST from '../../theme/ImageConstants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import * as commonActions from '../../redux/actions/commonActions';
import * as userActions from '../../redux/actions/userActions';
import * as homeActions from '../../redux/actions/homeActions';

export class PrivacyPolicy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            policy: ''
        }
    }

    componentDidMount = () => {
        this.getPolicyData();
    }

    getPolicyData = async () => {
        this.props.getPolicyData((res) => this.getPolicyDataSuccessCallBack(res), (err) => this.getPolicyDataFailureCallBack(err))
    }

    getPolicyDataSuccessCallBack = async (res) => {
        console.log('@@@ Get Policy Success CallBack ===================', res);
        this.setState({ policy: res.data });
    }

    getPolicyDataFailureCallBack = (error) => {
        console.log('@@@ Get Policy Failure CallBack ===================', error);
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
                <Text style={styles.mainText}>Privacy Policy</Text>
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
        getPolicyData: (successCallBack, failureCallBack) => dispatch(userActions.getPolicyData(successCallBack, failureCallBack)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivacyPolicy)
