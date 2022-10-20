import React, { Component } from 'react';
import styles from './ContactUsStyle'
import { Image, StatusBar, Text, TextInput, TouchableOpacity, View, Modal, FlatList } from 'react-native';
import * as IMG_CONST from '../../theme/ImageConstants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import * as commonActions from '../../redux/actions/commonActions';
import * as userActions from '../../redux/actions/userActions';
import * as homeActions from '../../redux/actions/homeActions';

export class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rebateList: [{ id: 1, image: IMG_CONST.offer1 }, { id: 2, image: IMG_CONST.offer2 }]
        }
    }

    componentDidMount = () => {
        this.getAllRebateTabList();
    }

    getAllRebateTabList = async () => {
        this.props.getAllRebateTabList((res) => this.getAllRebateTabListSuccessCallBack(res), (err) => this.getAllRebateTabListFailureCallBack(err))
    }

    getAllRebateTabListSuccessCallBack = async (res) => {
        console.log('@@@ Get All Rebate Tab List Success CallBack ===================', res);
        let localPlayerList = res.data.data;
        let modifiedList = [];
        localPlayerList.map((item) => {
            item['isSelected'] = false;
            modifiedList.push(item);
        });
        console.log('@@@ Get All Rebate Data CallBack ===================', localPlayerList);
        this.setState({ rebateList: modifiedList });
    }

    getAllRebateTabListFailureCallBack = (error) => {
        console.log('@@@ Get All Rebate Tab List Failure CallBack ===================', error);
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
                <Text style={styles.mainText}>Contact Us</Text>
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
        getAllRebateTabList: (successCallBack, failureCallBack) => dispatch(userActions.getAllRebateTabList(successCallBack, failureCallBack)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs)
