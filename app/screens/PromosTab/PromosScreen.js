import React, { Component } from 'react';
import styles from './PromosStyle'
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

export class PromosScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offerList: [{ id: 1 }, { id: 2 }],
        }
    }

    componentDidMount = () => {
        this.getAllPromoTabList();
    }

    getAllPromoTabList = async () => {
        this.props.getAllPromoTabList((res) => this.getAllPromoTabListSuccessCallBack(res), (err) => this.getAllPromoTabListFailureCallBack(err))
    }

    getAllPromoTabListSuccessCallBack = async (res) => {
        console.log('@@@ Get All Promo Tab List Success CallBack ===================', res);
        let localPlayerList = res.data.data;
        let modifiedList = [];
        localPlayerList.map((item) => {
            item['isSelected'] = false;
            modifiedList.push(item);
        });
        console.log('@@@ Get All Promo Tab Data CallBack ===================', localPlayerList);
        this.setState({ offerList: modifiedList });
    }

    getAllPromoTabListFailureCallBack = (error) => {
        console.log('@@@ Get All Promo Tab List Failure CallBack ===================', error);
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
                <Text style={styles.mainText}>Promos</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Notification")}><Image style={styles.bellIcon} source={IMG_CONST.whiteNotification} /></TouchableOpacity>
            </View>
        );
    }

    renderOfferCellContainer = (item) => {
        return (
            <View style={styles.offeCell}>
                {/* <Image style={styles.offeImage} source={item.promosImage} /> */}
                <Image style={styles.offeImage} source={{ uri: `data:image/png[jpg];base64, ${item.promosImage}` }}/>
                <View style={{ marginLeft: scale(30) }}>
                <Text style={styles.offeMega}>{item.promosName}</Text>
                <Text style={styles.offeShopName}>WHOPPER</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.offePrice}>{item.price}</Text>
                <Text style={styles.offeCurrPrice}>        {item.offerPrice}</Text>
                </View>
                <Text style={styles.offeAvailable}>* Avaiable until {item.promosEndDate}</Text>
                </View>
            </View>
        );
    }

    renderOfferContainer = () => {
        return (
            <View style={{ marginBottom: verticalScale(150), marginTop: verticalScale(30) }}>
                <FlatList
                    data={this.state.offerList}
                    renderItem={({ item }) => this.renderOfferCellContainer(item)}
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
                    {this.renderOfferContainer()}
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
        getAllPromoTabList: (successCallBack, failureCallBack) => dispatch(userActions.getAllPromoTabList(successCallBack, failureCallBack)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PromosScreen)
