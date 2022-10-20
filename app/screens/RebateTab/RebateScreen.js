import React, { Component } from 'react';
import styles from './RebateStyle'
import { Image, ImageBackground, StatusBar, Text, TextInput, TouchableOpacity, View, Modal, FlatList } from 'react-native';
import COLOR_CONST from '../../theme/ColorConstants';
import * as IMG_CONST from '../../theme/ImageConstants';
import * as STRING_CONST from '../../theme/StringConstants';
import scale, { verticalScale } from '../../utils/Scale';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import * as commonActions from '../../redux/actions/commonActions';
import * as userActions from '../../redux/actions/userActions';
import * as homeActions from '../../redux/actions/homeActions';

export class RebateScreen extends Component {
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
                <Text style={styles.mainText}>Rewards</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Notification")}><Image style={styles.bellIcon} source={IMG_CONST.whiteNotification} /></TouchableOpacity>
            </View>
        );
    }

    renderOfferCell = (item) => {
        return (
            <TouchableOpacity style={styles.offerCellView}>
                {/* <Image style={styles.offerImage} source={item.image} resizeMode="contain" /> */}
                <Image style={styles.offeImage} source={{ uri: `data:image/png;base64, ${item.rebateImage}`}}/>
                <View style={{ paddingHorizontal: scale(10) }}>
                    <Text style={styles.offerHeading}>Order for {item.rebateName}</Text>
                    <Text style={styles.offerSubheading}>{item.rebateMessege}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    renderOrderHistoryContainer = () => {
        return (
            <View style={{marginBottom: verticalScale(150)}}>
                <FlatList
                    data={this.state.rebateList}
                    renderItem={({ item }) => this.renderOfferCell(item)}
                />
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }} keyboardShouldPersistTaps={'always'}>
                    <StatusBar barStyle="light-content" />
                    {this.renderHeaderContainer()}
                    {this.renderOrderHistoryContainer()}
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

export default connect(mapStateToProps, mapDispatchToProps)(RebateScreen)
