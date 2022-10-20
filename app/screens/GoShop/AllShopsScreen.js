import React, { Component } from 'react';
import styles from './AllShopsStyle'
import { Image, ImageBackground, StatusBar, Text, View, ScrollView, TouchableOpacity, TextInput, FlatList, SafeAreaView } from 'react-native';
import COLOR_CONST from '../../theme/ColorConstants';
import * as IMG_CONST from '../../theme/ImageConstants';
import * as STRING_CONST from '../../theme/StringConstants';
import scale, { verticalScale } from '../../utils/Scale';
import { connect } from 'react-redux';
import * as commonActions from '../../redux/actions/commonActions';
import * as userActions from '../../redux/actions/userActions';
import * as homeActions from '../../redux/actions/homeActions';

export class AllShopsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurantList: []
        }
    }

    componentDidMount = () => {
        this.getAllShopList();
    }

    getAllShopList = async () => {
        this.props.getAllShopList( (res) => this.getAllShopListSuccessCallBack(res), (err) => this.getAllShopListFailureCallBack(err))
    }

    getAllShopListSuccessCallBack = async (res) => {
        console.log('@@@ Get All Shop Data Success CallBack ===================', res);
        let localPlayerList = res.data.data;
        let modifiedPlayerList = [];
        localPlayerList.map((item) => {
            item['isSelected'] = false;
            modifiedPlayerList.push(item);
        });
        console.log('@@@ Get All Shop Data CallBack ===================', localPlayerList);
        this.setState({ restaurantList: modifiedPlayerList, showSearchAFriendsList: true });
    }

    getAllShopListFailureCallBack = (error) => {
        console.log('@@@ Get All Shop Data Failure CallBack ===================', error);
        if (error) {
            alert(error);
        } else {
            alert('Network Error!');
        }
    }

    renderHeaderContainer = () => {
        return (
            <View style={styles.productImageHeader}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}><Image style={styles.backIcon} source={IMG_CONST.backIcon} /></TouchableOpacity>
                <Text style={styles.mainText}>Shops</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Notification")}><Image style={styles.bellIcon} source={IMG_CONST.whiteNotification} /></TouchableOpacity>
            </View>
        );
    }

    renderSearchContainer = () => {
        return (
            <View style={styles.searchView}>
                <TouchableOpacity><Image style={styles.searchIcon} source={IMG_CONST.search} resizeMode="contain" /></TouchableOpacity>
                <TextInput
                    style={styles.searchTextInput}
                    placeholderTextColor='#00000040'
                    placeholder="Search"
                    onChangeText={(text) => this.setState({ searchedText: text })}
                />
            </View>
        );
    }

    renderShopsCellContainer = (item) => {
        return (
            <TouchableOpacity style={styles.restaurantCell} onPress={() => this.props.navigation.navigate("ShopDetail", { item: item })}>
                {/* <ImageBackground style={styles.restaurantImage} source={item.image} resizeMode="cover" > */}
                <ImageBackground style={styles.restaurantImage} source={{uri: `data:image/gif;base64,${item.image}`}} resizeMode="cover" >
                    <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginTop: verticalScale(10) }}>
                        <View style={styles.statusView}>
                        <Text style={[styles.statusText, { color: item.status === "OPEN" ? "green" : "red" }]}>{item.status}</Text>
                        </View>
                        <View style={styles.ratingsView}>
                            <Image style={styles.starIcon} source={IMG_CONST.orangeStar} resizeMode="contain" />
                            <Text style={styles.ratingsText}>{item.shopRating}</Text>
                        </View>
                    </View>
                </ImageBackground>
                <View style={{ marginTop: verticalScale(15), marginHorizontal: scale(20) }}>
                    <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                    <Text style={styles.dealsName}>{item.storeName}</Text>
                        {/* <View style={styles.cuisineView}><Text style={styles.cuisineText}>{item.cuisine}</Text></View> */}
                        <View style={styles.distanceView}><Text style={styles.distanceText}>{item.distance}</Text></View>
                        {/* <Image style={styles.profile} source={IMG_CONST.profile} /> */}
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: verticalScale(5) }}>
                    <Text style={styles.min}>{item.storeAddress}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    renderAllShopListContainer = () => {
        return (
            <View>
                <FlatList
                    data={this.state.restaurantList}
                    showsVerticalScrollIndicator={false}
                    style={{ marginTop: verticalScale(5), marginBottom: verticalScale(30)}}
                    renderItem={({ item }) => this.renderShopsCellContainer(item)}
                />
            </View>
        );
    }

    render() {
        return (
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <StatusBar barStyle="dark-content" height={10} hidden={false} />
                {/* <SafeAreaView backgroundColor={COLOR_CONST.loginBtnOuterColor} style={{height: 10}} height={10}  /> */}
                {this.renderHeaderContainer()}
                {this.renderSearchContainer()}
                {this.renderAllShopListContainer()}
            </ScrollView>
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
        getAllShopList: (successCallBack, failureCallBack) => dispatch(homeActions.getAllShopList(successCallBack, failureCallBack)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllShopsScreen)
