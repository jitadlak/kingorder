import React, { Component } from 'react';
import styles from './GoFoodStyle'
import { Image, ImageBackground, StatusBar, Text, View, ScrollView, TouchableOpacity, TextInput, FlatList, SafeAreaView } from 'react-native';
import COLOR_CONST from '../../theme/ColorConstants';
import * as IMG_CONST from '../../theme/ImageConstants';
import * as STRING_CONST from '../../theme/StringConstants';
import scale, { verticalScale } from '../../utils/Scale';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import * as commonActions from '../../redux/actions/commonActions';
import * as userActions from '../../redux/actions/userActions';
import * as homeActions from '../../redux/actions/homeActions';
// import { Icon } from 'react-native-elements';

export class GoFoodScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurantList: [
                {
                    id: 1,
                    image: IMG_CONST.iceCream,
                    storeName: "Happy Bones",
                    distance: "1.2 km",
                    cuisine: "Italian",
                    storeAddress: "392 Brooms st, New York, USA",
                    price: 12,
                    currentPrice: 18,
                    status: "OPEN",
                    isSelected: false,
                }, {
                    id: 2,
                    image: IMG_CONST.product2,
                    storeName: "Uncle Boons",
                    distance: "4 km",
                    cuisine: "Chinese",
                    storeAddress: "392 Brooms st, New York, USA",
                    price: 12,
                    currentPrice: 18,
                    status: "CLOSED",
                    isSelected: false,
                }
            ],
            allCategoryList: [],
            offerList: [{ id: 1 }, { id: 2 }],
        }
    }

    componentDidMount = () => {
        this.getTrendingFoodList();
        this.getAllFoodCategoryList();
    }

    getTrendingFoodList = async () => {
        let data = {};
        data['offset'] = 0;
        data['limit'] = 10;
        this.props.getTrendingFoodList(data, (res) => this.getTrendingFoodListSuccessCallBack(res), (err) => this.getTrendingFoodListFailureCallBack(err))
    }

    getTrendingFoodListSuccessCallBack = async (res) => {
        console.log('@@@ Get Trending Food Data Success CallBack ===================', res);
        let localPlayerList = res.data.data;
        let modifiedList = [];
        localPlayerList.map((item) => {
            item['isSelected'] = false;
            modifiedList.push(item);
        });
        console.log('@@@ Get Trending Food Data CallBack ===================', localPlayerList);
        this.setState({ restaurantList: modifiedList, showSearchAFriendsList: true });
    }

    getTrendingFoodListFailureCallBack = (error) => {
        console.log('@@@ Get Trending Food Data Failure CallBack ===================', error);
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

    getAllFoodCategoryList = async () => {
        this.props.getAllFoodCategoryList((res) => this.getAllFoodCategoryListSuccessCallBack(res), (err) => this.getAllFoodCategoryListFailureCallBack(err))
    }

    getAllFoodCategoryListSuccessCallBack = async (res) => {
        console.log('@@@ Get All Food Category Success CallBack ===================', res);
        let localPlayerList = res.data.data;
        let modifiedList = [];
        localPlayerList.map((item) => {
            item['isSelected'] = false;
            modifiedList.push(item);
        });
        console.log('@@@ Get All Food Data CallBack ===================', localPlayerList);
        this.setState({ allCategoryList: modifiedList });
    }

    getAllFoodCategoryListFailureCallBack = (error) => {
        console.log('@@@ Get All Food Category Failure CallBack ===================', error);
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

    onPressRestaurant = (item) => {
        var tempList = this.state.restaurantList;
        for (var i = 0; i < tempList.length; i++) {
            if (tempList[i].id == item.id) {
                tempList[i]["isSelected"] = true;
            }
        }
        this.setState({ dealsList: tempList })
    }

    renderHeaderContainer = () => {
        return (
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}><Image style={styles.backIcon} source={IMG_CONST.backIcon} /></TouchableOpacity>
                <Text style={styles.mainText}>Food</Text>
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

    renderRestaurantCellContainer = (item) => {
        return (
            <TouchableOpacity style={styles.restaurantCell} 
            onPress={() =>  this.props.navigation.navigate("FoodDetail", { item: item })}>
            {/* onPress={() => item.status === "OPEN" ? this.props.navigation.navigate("FoodDetail", { item: item }) : alert("This restraunt is closed now")}> */}
                {/* <ImageBackground style={styles.restaurantImage} source={item.image} resizeMode="cover" > */}
                <ImageBackground style={styles.restaurantImage} source={{uri: `data:image/png[jpg];base64, ${item.image}`}} resizeMode="cover" >
                    <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginTop: verticalScale(10) }}>
                        <View style={styles.statusView}>
                            <Text style={[styles.statusText, { color: item.status === "OPEN" ? "green" : "red" }]}>{item.status}</Text>
                        </View>
                        <View style={styles.ratingsView}>
                            <Image style={styles.starIcon} source={IMG_CONST.orangeStar} resizeMode="contain" />
                            <Text style={styles.ratingsText}>{item.rstrntRating}</Text>
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

    renderTrendingContainer = () => {
        return (
            <View>
                <View style={styles.seeAllView}>
                    <Text style={styles.allRestaurants}>Trending Restaurants & Hotels</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("GoFoodAllRestaurant")}><Text style={styles.seeAll}>See all ({this.state.restaurantList.length})</Text></TouchableOpacity>
                </View>
                <FlatList
                    data={this.state.restaurantList}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: verticalScale(20), marginLeft: scale(10) }}
                    renderItem={({ item }) => this.renderRestaurantCellContainer(item)}
                />
            </View>
        );
    }

    renderCategoryCell = (item) => {
        return (
            <TouchableOpacity style={{marginHorizontal: scale(20)}}>
                <ImageBackground style={styles.categoryImage} source={{uri: `data:image/png[jpg];base64, ${item.categoryImage}`}}>
                {/* <ImageBackground style={styles.categoryImage} source={IMG_CONST.offer1}> */}
                    <View style={styles.textBg}><Text style={styles.categoryName}>{item.categoryName}</Text></View>
                </ImageBackground>
            </TouchableOpacity>
        );
    }

    renderCategoryContainer = () => {
        return (
            <View>
                <View style={styles.seeAllView}>
                    <Text style={styles.allRestaurants}>Category</Text>
                    <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate("GoFoodAllRestaurant")}
                    ><Text style={styles.seeAll}>See all ({this.state.allCategoryList.length})</Text></TouchableOpacity>
                </View>
                <FlatList
                    data={this.state.allCategoryList}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: verticalScale(20), marginLeft: scale(10), marginBottom: verticalScale(40) }}
                    renderItem={({ item }) => this.renderCategoryCell(item)}
                />
            </View>
        );
    }

    renderOfferCellContainer = (item) => {
        return (
            <View style={styles.offeCell}>
                <Image style={styles.offeImage} source={IMG_CONST.hamburger} />
                <View style={{ marginLeft: scale(30) }}>
                    <Text style={styles.offeMega}>Mega</Text>
                    <Text style={styles.offeShopName}>WHOPPER</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.offePrice}>$ 17</Text>
                        <Text style={styles.offeCurrPrice}>        $ 32</Text>
                    </View>
                    <Text style={styles.offeAvailable}>* Avaiable until 24 July 2021</Text>
                </View>
            </View>
        );
    }
    
    renderOfferContainer = () => {
        return (
            <View style={{ marginBottom: verticalScale(10), marginTop: verticalScale(30) }}>
                <FlatList
                    data={this.state.offerList}
                    renderItem={({ item }) => this.renderOfferCellContainer(item)}
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
                {this.renderTrendingContainer()}
                {this.renderCategoryContainer()}
                {this.renderOfferContainer()}
            </ScrollView>
        );
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
        getTrendingFoodList: (data, successCallBack, failureCallBack) => dispatch(homeActions.getTrendingFoodList(data, successCallBack, failureCallBack)),
        getAllFoodCategoryList: (successCallBack, failureCallBack) => dispatch(homeActions.getAllFoodCategoryList(successCallBack, failureCallBack)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GoFoodScreen)
