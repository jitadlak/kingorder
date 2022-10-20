import React, { Component } from 'react';
import styles from './FeedBackStyle'
import { Image, StatusBar, Text, TextInput, TouchableOpacity, View, Modal, FlatList } from 'react-native';
import * as IMG_CONST from '../../theme/ImageConstants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import * as commonActions from '../../redux/actions/commonActions';
import * as userActions from '../../redux/actions/userActions';
import * as homeActions from '../../redux/actions/homeActions';
import Scale, { verticalScale } from '../../utils/Scale';

export class FeedBack extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: '',
            description: ''
        }
    }

    componentDidMount = () => {
    }

    postFeedback = async () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (this.state.name.trim().length === 0) {
            this.setState({ isInvalidName: true })
            return
        } else if (this.state.phone.trim().length !== 10) {
            this.setState({ isInvalidPhone: true })
            return
        }
        let data = {
            'address': this.state.address,
            'adharCrard': this.state.adhaar,
            'emailId': this.state.email,
        }
        console.log('@@@ Feedback Data CallBack ===================', data);
        this.props.postFeedback(data, (res) => this.postFeedbackSuccessCallBack(res), (err) => this.postFeedbackFailureCallBack(err))
    }

    postFeedbackSuccessCallBack = async (res) => {
        console.log('@@@ Feedback Success CallBack ===================', res);
        alert('Your feedback submitted successfully');
    }

    postFeedbackFailureCallBack = (error) => {
        if (error) {
            console.log('@@@ Feedback Failure CallBack ===================', error);
            alert(error);
        } else {
            console.log('@@@ Feedback Failure CallBack Network Error ===================');
            this.props.showErrorModal('Network Error!');
        }
    }

    renderHeaderContainer = () => {
        return (
            <View style={styles.headerContainer}>
                {/* <TouchableOpacity onPress={() => this.props.navigation.goBack()}><Image style={styles.backIcon} source={IMG_CONST.backIcon} /></TouchableOpacity> */}
                <Text style={styles.mainText}>Feedback</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Notification")}><Image style={styles.bellIcon} source={IMG_CONST.whiteNotification} /></TouchableOpacity>
            </View>
        );
    }

    renderTextInputContainer = () => {
        return (
            <View style={{marginTop: verticalScale(30)}}>
                {/* <Text style={{color: "#000", fontSize: 15, marginLeft: Scale(20)}}>{'Subject'}</Text>
                <TextInput
                    placeholder={'Eg: Loved the App!'}
                    placeholderTextColor="#00000070"
                    onChangeText={(text) => { this.setState({ subject: text }) }}
                    value={this.state.subject}
                    style={styles.inputStyle}
                    multiline={true}
                    numberOfLines={2}
                /> */}
                <View style={{flexDirection: 'row', marginHorizontal: Scale(50), justifyContent: 'space-between', alignItems: 'center'}}>
                    <TouchableOpacity><Image source={IMG_CONST.like} style={{height: Scale(100), width: Scale(100)}}/></TouchableOpacity>
                    <TouchableOpacity><Image source={IMG_CONST.disLike} style={{height: Scale(100), width: Scale(100)}}/></TouchableOpacity>
                </View>
                <Text style={{color: "#000", fontSize: 15, marginLeft: Scale(20), marginTop: verticalScale(40)}}>{'Please share any comments or feedback'}</Text>
                <TextInput
                    placeholder={'Eg: Loved the App! But would.....'}
                    placeholderTextColor="#00000070"
                    onChangeText={text => this.setState({ description: text }) }
                    value={this.state.description}
                    style={styles.inputStyle}
                    multiline={true}
                    numberOfLines={8}
                />
                <TouchableOpacity style={styles.submiFeedbackBtn} onPress={() => this.postFeedback()}>
                    <Text style={styles.submiFeedbackBtnText}>Submit Feedback</Text>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }} keyboardShouldPersistTaps={'always'}>
                    <StatusBar barStyle="light-content" />
                    {this.renderHeaderContainer()}
                    {this.renderTextInputContainer()}
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
        postFeedback: (data, successCallBack, failureCallBack) => dispatch(userActions.postFeedback(data, successCallBack, failureCallBack)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedBack)
