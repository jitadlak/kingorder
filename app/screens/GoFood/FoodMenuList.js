import React, { Component } from 'react'
import styles from './FoodMenuStyle'
import { Image, ImageBackground, StatusBar, Text, View, ScrollView, TouchableOpacity, TextInput, FlatList, SafeAreaView } from 'react-native';
import COLOR_CONST from '../../theme/ColorConstants';
import * as IMG_CONST from '../../theme/ImageConstants';
import scale, { verticalScale } from '../../utils/Scale';

export class FoodMenuList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false,
            itemList: [
                {
                    menuId: 1,
                    isFav: false,
                    isCart: false,
                    menutName: 'Red Bell Pepper',
                    menuWeight: '1KG',
                    menuQty: 'Rs.500.00',
                    menuImg: IMG_CONST.fishIcon
                }, {
                    menuId: 2,
                    isFav: false,
                    isCart: true,
                    menutName: 'Yellow Bell Pepper',
                    menuWeight: '1KG',
                    menuQty: 'Rs.500.00',
                    menuImg: IMG_CONST.fishIcon
                }, {
                    menuId: 3,
                    isFav: true,
                    isCart: false,
                    menutName: 'Ginger',
                    menuWeight: '100G',
                    menuQty: 'Rs.100.00',
                    menuImg: IMG_CONST.fishIcon
                }
            ],
        }
    }

    componentDidMount = async () => {
        // this.getMartCategoryByNameList();
    }

    onPressHeart = (item) => {
        var tempList = this.state.itemList;
        for (var i = 0; i < tempList.length; i++) {
            if (tempList[i].id == item.id) {
                tempList[i]["isFav"] = true;
            }
        } this.setState({ itemList: tempList })
    }

    onPressCart = (item) => {
        var tempList = this.state.itemList;
        for (var i = 0; i < tempList.length; i++) {
            if (tempList[i].menuId == item.menuId) {
                tempList[i]["isCart"] = true;
            }
        } this.setState({ itemList: tempList })
    }

    getMartCategoryByNameList = async () => {
        let data = {};
        data['categoryName'] = 'Bag';
        this.props.getMartCategoryByNameList(data, (res) => this.getMartCategoryByNameListSuccessCallBack(res), (err) => this.getMartCategoryByNameListFailureCallBack(err))
    }

    getMartCategoryByNameListSuccessCallBack = async (res) => {
        console.log('@@@ Get Mart Category By Name List Success CallBack ===================', res);
        let localPlayerList = res.data.data;
        let modifiedList = [];
        localPlayerList.map((item) => {
            item['isSelected'] = false;
            modifiedList.push(item);
        });
        console.log('@@@ Get Mart Category By Name Data CallBack ===================', localPlayerList);
        this.setState({ itemList: modifiedList });
    }

    getMartCategoryByNameListFailureCallBack = (error) => {
        console.log('@@@ Get Mart Category By Name List Failure CallBack ===================', error);
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
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}><Image style={styles.backIcon} source={IMG_CONST.backIcon} /></TouchableOpacity>
                <Text style={styles.mainText}>Restaurant Menu</Text>
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

    renderItemCellContainer = (item) => {
        return (
            <TouchableOpacity style={styles.productCell} onPress={() => this.props.navigation.navigate("MenuDetail", { fav: item.isFav ? IMG_CONST.heartActive : IMG_CONST.heartDeactive, item: item })}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={styles.weightView}><Text style={styles.productWeight}>{item.menuWeight}</Text></View>
                    {/* <TouchableOpacity onPress={() => this.onPressHeart(item)}><Image source={item.isFav ? IMG_CONST.heartActive : IMG_CONST.heartDeactive} style={styles.productFav} resizeMode="contain" /></TouchableOpacity> */}
                </View>
                <Image style={styles.productImage} source={{ uri: `data:image/png[jpg];base64, ${item.menuImg}` }} resizeMode="contain" />
                {/* <Image source={item.menuImg} style={styles.productImage} resizeMode="contain" /> */}
                <Text style={styles.productName}>{item.menutName}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: verticalScale(5) }}>
                    <Text style={styles.productPice}>Rs.{item.menuQty}</Text>
                    <TouchableOpacity onPress={() => this.onPressCart(item)}><Image source={item.isCart ? IMG_CONST.cart : IMG_CONST.shoppingCart} style={[styles.productCart, { opacity: item.isCart ? 1 : 0.4 }]} resizeMode="contain" /></TouchableOpacity>
                </View>
            </TouchableOpacity>
        );
    }

    renderItemListContainer = () => {
        return (
            <View style={{ marginTop: verticalScale(10) }}>
                <FlatList
                    data={this.props.route.params.itemList}
                    numColumns={2}
                    renderItem={({ item }) => this.renderItemCellContainer(item)}
                />
            </View>
        );
    }

    render() {
        return (
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <StatusBar barStyle="light-content" backgroundColor={COLOR_CONST.btnBgColor} height={10} />
                {/* <SafeAreaView backgroundColor={COLOR_CONST.loginBtnOuterColor} style={{height: 10}} height={10}  /> */}
                {this.renderHeaderContainer()}
                {this.renderSearchContainer()}
                {this.renderItemListContainer()}
                {/* {this.renderOrderHistoryContainer()} */}
            </ScrollView>
        )
    }
}

export default FoodMenuList
