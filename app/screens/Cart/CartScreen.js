import React, { Component } from 'react';
import styles from './CartStyle'
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

export class CartScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalPrice: 1000,
            item: [],
            promoCodeFood: '',
            promoCodeShop: '',
            promoCodeMart: '',
            promoCodeGadget: '',
            foodItemList: [
                // {
                //     id: 1,
                //     isFav: false,
                //     isCart: false,
                //     productName: 'Red Bell Pepper',
                //     productWeight: '1KG',
                //     productRate: 'Rs.500.00',
                //     rate: 500,
                //     productImage: IMG_CONST.fishIcon
                // }, {
                //     id: 2,
                //     isFav: false,
                //     isCart: true,
                //     productName: 'Yellow Bell Pepper',
                //     productWeight: '1KG',
                //     productRate: 'Rs.500.00',
                //     rate: 500,
                //     productImage: IMG_CONST.fishIcon
                // }, {
                //     id: 3,
                //     isFav: false,
                //     isCart: false,
                //     productName: 'Red Onions',
                //     productWeight: '!KG',
                //     productRate: 'Rs.260.00',
                //     rate: 260,
                //     productImage: IMG_CONST.fishIcon
                // }
            ],
            shopItemList: [{
                id: 1,
                isFav: true,
                isCart: false,
                productName: 'Ginger',
                productWeight: '100G',
                productRate: 'Rs.100.00',
                rate: 100,
                productImage: IMG_CONST.wineIcon
            }, {
                id: 2,
                isFav: true,
                isCart: true,
                productName: 'Garlic',
                productWeight: '100G',
                productRate: 'Rs.100.00',
                rate: 100,
                productImage: IMG_CONST.wineIcon
            }],
            gadgetItemList: [{
                id: 1,
                isFav: false,
                isCart: true,
                productName: 'Mango',
                productWeight: '1KG',
                productRate: 'Rs.500.00',
                rate: 500,
                productImage: IMG_CONST.fishIcon
            }, {
                id: 2,
                isFav: true,
                isCart: false,
                productName: 'Grapes',
                productWeight: '100G',
                productRate: 'Rs.140.00',
                rate: 140,
                productImage: IMG_CONST.fishIcon
            }],
            martItemList: [{
                id: 1,
                isFav: false,
                isCart: true,
                productName: 'Mango',
                productWeight: '1KG',
                productRate: 'Rs.500.00',
                rate: 500,
                productImage: IMG_CONST.fishIcon
            }, {
                id: 2,
                isFav: true,
                isCart: false,
                productName: 'Grapes',
                productWeight: '100G',
                productRate: 'Rs.140.00',
                rate: 140,
                productImage: IMG_CONST.fishIcon
            }],
        }
    }

    onPressCrossicon1 = (item) => {
        var tempList = this.state.foodItemList;
        for (var i = 0; i < tempList.length; i++) {
            if (tempList[i].id == item.id) {
                tempList[i]["isSelected"] = true;
            }
        } this.setState({ foodItemList: tempList })
    }

    onPressCrossicon2 = (item) => {
        var tempList = this.state.shopItemList;
        for (var i = 0; i < tempList.length; i++) {
            if (tempList[i].id == item.id) {
                tempList[i]["isSelected"] = true;
            }
        } this.setState({ shopItemList: tempList })
    }

    onPressCrossicon3 = (item) => {
        var tempList = this.state.gadgetItemList;
        for (var i = 0; i < tempList.length; i++) {
            if (tempList[i].id == item.id) {
                tempList[i]["isSelected"] = true;
            }
        } this.setState({ gadgetItemList: tempList })
    }

    onPressCrossicon4 = (item) => {
        var tempList = this.state.martItemList;
        for (var i = 0; i < tempList.length; i++) {
            if (tempList[i].id == item.id) {
                tempList[i]["isSelected"] = true;
            }
        } this.setState({ martItemList: tempList })
    }

    onPressCart = (item) => {
        var tempList = this.state.foodItemList;
        for (var i = 0; i < tempList.length; i++) {
            if (tempList[i].id == item.id) {
                tempList[i]["isSelected"] = true;
            }
        } this.setState({ itemList: tempList })
    }

    componentDidMount = () => {
        this.getCartByEmail();
    }

    getCartByEmail = async () => {
        let data = {};
        data['emailID'] = 'rohitk@gmail.com';
        this.props.getCartByEmail(data, (res) => this.getCartByEmailSuccessCallBack(res), (err) => this.getCartByEmailFailureCallBack(err))
    }

    getCartByEmailSuccessCallBack = async (res) => {
        console.log('@@@ Get Cart By Email Data Success CallBack ===================', res);
        let localPlayerList = res.foodCart;
        let modifiedList = [];
        localPlayerList.map((item) => {
            item['isSelected'] = false;
            modifiedList.push(item);
        });
        let localPlayerList1 = res.gadgetCart;
        let modifiedList1 = [];
        localPlayerList1.map((item) => {
            item['isSelected'] = false;
            modifiedList1.push(item);
        });
        let localPlayerList2 = res.groceryCart;
        let modifiedList2 = [];
        localPlayerList2.map((item) => {
            item['isSelected'] = false;
            modifiedList2.push(item);
        });
        let localPlayerList3 = res.shopCart;
        let modifiedList3 = [];
        localPlayerList3.map((item) => {
            item['isSelected'] = false;
            modifiedList3.push(item);
        });
        console.log('@@@ Get Cart By Email Data CallBack ===================', localPlayerList);
        this.setState({ foodItemList: modifiedList, gadgetItemList: modifiedList1, martItemList: modifiedList2, shopItemList: modifiedList3, showSearchAFriendsList: true });
    }

    getCartByEmailFailureCallBack = (error) => {
        console.log('@@@ Get Cart By Email Data Failure CallBack ===================', error);
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

    removeCartItem = async () => {
        let emailId = await AsyncStorage.getItem('USER_EMAIL');
        let formData = new FormData()
        formData.append("emailID", emailId)
        this.props.removeCartItem(formData, (res) => this.removeCartItemSuccessCallBack(res), (err) => this.removeCartItemFailureCallBack(err))
    }

    removeCartItemSuccessCallBack = async (res) => {
        console.log('@@@ Remove Cart Item Success CallBack ===================', res);
        alert(res.data.message);
    }

    removeCartItemFailureCallBack = (error) => {
        if (error) {
            console.log('@@@ Remove Cart Item Failure CallBack ===================', error);
            alert(error.response.data.message);
        } else {
            console.log('@@@ Remove Cart Item CallBack Network Error ===================');
            alert('Network Error!');
        }
    }

    renderHeaderContainer = () => {
        return (
            <View style={styles.headerContainer}>
                {/* <TouchableOpacity onPress={() => this.props.navigation.goBack()}><Image style={styles.backIcon} source={IMG_CONST.backIcon} /></TouchableOpacity> */}
                <Text style={styles.mainText}>Your Cart</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Notification")}><Image style={styles.bellIcon} source={IMG_CONST.whiteNotification} /></TouchableOpacity>
            </View>
        );
    }

    renderFoodItemCellContainer = (item) => {
        return (
            <View>
            {!item.isSelected ?
            <TouchableOpacity style={styles.productCell} onPress={() => { }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={item.menuImage} style={styles.productImage} resizeMode="cover" />
                    <View style={{ marginLeft: verticalScale(15) }}>
                        <Text style={styles.productName}>{item.categoryName}</Text>
                        <Text style={styles.productPice}>{item.price}</Text>
                        <View style={styles.weightView}><Text style={styles.productWeight}>{item.weight}</Text></View>
                    </View>
                </View>
                <TouchableOpacity onPress={() => this.onPressCrossicon1(item)} style={{ alignSelf: 'flex-start', marginRight: scale(10) }}><Image source={IMG_CONST.crossIcon} style={styles.productFav} resizeMode="contain" /></TouchableOpacity>
            </TouchableOpacity>
            :
            null}
            </View>
        );
    }

    renderItemListContainer = () => {
        return (
            <View>
                {this.state.foodItemList.length > 0 ?
                    <View style={styles.listedItem}>
                        <Text style={styles.listedItems}>Food Items: {this.state.foodItemList.length}</Text>
                        <Text style={styles.totalPrice}>Total: Rs.{this.state.totalPrice}</Text>
                    </View>
                    :
                    null}
                <FlatList
                    data={this.state.foodItemList}
                    renderItem={({ item }) => this.renderFoodItemCellContainer(item)}
                    ListEmptyComponent={() => <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={styles.image} source={IMG_CONST.thamks} />
                        <Text style={styles.emptyListText}>Your food cart is EMPTY!</Text>
                    </View>}
                />
                {this.state.foodItemList.length > 0 ?
                    <View style={[styles.emailView, { borderColor: this.state.isInvalidCode ? 'red' : COLOR_CONST.btnBgColor }]}>
                        <TextInput
                            style={styles.textInput}
                            placeholderTextColor={COLOR_CONST.textInputTextColor}
                            placeholder="Food Promo Code"
                            onChangeText={(text) => this.setState({ promoCodeFood: text, isInvalidCode: false }, () => this.checkEmail())}
                        />
                        <Image source={IMG_CONST.ticket} style={styles.greenChecked} resizeMode="contain" />
                    </View>
                    :
                    null}
            </View>
        );
    }

    renderShopItemCellContainer = (item) => {
        return (
            <View>
            {!item.isSelected ?
            <TouchableOpacity style={styles.productCell} onPress={() => { }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={item.productImage} style={styles.productImage} resizeMode="cover" />
                    <View style={{ marginLeft: verticalScale(15) }}>
                        <Text style={styles.productName}>{item.productName}</Text>
                        <Text style={styles.productPice}>{item.productRate}</Text>
                        <View style={styles.weightView}><Text style={styles.productWeight}>{item.productWeight}</Text></View>
                    </View>
                </View>
                <TouchableOpacity onPress={() => this.onPressCrossicon2(item)} style={{ alignSelf: 'flex-start', marginRight: scale(10) }}><Image source={IMG_CONST.crossIcon} style={styles.productFav} resizeMode="contain" /></TouchableOpacity>
            </TouchableOpacity>
            :
            null}
            </View>
        );
    }

    renderShopItemListContainer = () => {
        return (
            <View>
                {this.state.shopItemList.length > 0 ?
                    <View style={styles.listedItem}>
                        <Text style={styles.listedItems}>Shop Items: {this.state.shopItemList.length}</Text>
                        <Text style={styles.totalPrice}>Total: Rs.{this.state.totalPrice}</Text>
                    </View>
                    :
                    null}
                <FlatList
                    data={this.state.shopItemList}
                    renderItem={({ item }) => this.renderShopItemCellContainer(item)}
                    ListEmptyComponent={() => <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={styles.image} source={IMG_CONST.thamks} />
                        <Text style={styles.emptyListText}>Your shop cart is EMPTY!</Text>
                    </View>}
                />
                {this.state.shopItemList.length > 0 ?
                    <View style={[styles.emailView, { borderColor: this.state.isInvalidCode ? 'red' : COLOR_CONST.btnBgColor }]}>
                        <TextInput
                            style={styles.textInput}
                            placeholderTextColor={COLOR_CONST.textInputTextColor}
                            placeholder="Shop Promo Code"
                            onChangeText={(text) => this.setState({ promoCodeShop: text, isInvalidCode: false }, () => this.checkEmail())}
                        />
                        <Image source={IMG_CONST.ticket} style={styles.greenChecked} resizeMode="contain" />
                    </View>
                    :
                    null}
            </View>
        );
    }

    renderMartItemCellContainer = (item) => {
        return (
            <View>
            {!item.isSelected ?
            <TouchableOpacity style={styles.productCell} onPress={() => { }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={item.productImage} style={styles.productImage} resizeMode="cover" />
                    <View style={{ marginLeft: verticalScale(15) }}>
                        <Text style={styles.productName}>{item.productName}</Text>
                        <Text style={styles.productPice}>{item.productRate}</Text>
                        <View style={styles.weightView}><Text style={styles.productWeight}>{item.productWeight}</Text></View>
                    </View>
                </View>
                <TouchableOpacity onPress={() => this.onPressCrossicon4(item)} style={{ alignSelf: 'flex-start', marginRight: scale(10) }}><Image source={IMG_CONST.crossIcon} style={styles.productFav} resizeMode="contain" /></TouchableOpacity>
            </TouchableOpacity>
            :
            null}
            </View>
        );
    }

    renderMartItemListContainer = () => {
        return (
            <View>
                {this.state.martItemList.length > 0 ?
                    <View style={styles.listedItem}>
                        <Text style={styles.listedItems}>Mart Items: {this.state.martItemList.length}</Text>
                        <Text style={styles.totalPrice}>Total: Rs.{this.state.totalPrice}</Text>
                    </View>
                    :
                    null}
                <FlatList
                    data={this.state.martItemList}
                    renderItem={({ item }) => this.renderMartItemCellContainer(item)}
                    ListEmptyComponent={() => <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={styles.image} source={IMG_CONST.thamks} />
                        <Text style={styles.emptyListText}>Your mart cart is EMPTY!</Text>
                    </View>}
                />
                {this.state.martItemList.length > 0 ?
                    <View style={[styles.emailView, { borderColor: this.state.isInvalidCode ? 'red' : COLOR_CONST.btnBgColor }]}>
                        <TextInput
                            style={styles.textInput}
                            placeholderTextColor={COLOR_CONST.textInputTextColor}
                            placeholder="Mart Promo Code"
                            onChangeText={(text) => this.setState({ promoCodeMart: text, isInvalidCode: false }, () => this.checkEmail())}
                        />
                        <Image source={IMG_CONST.ticket} style={styles.greenChecked} resizeMode="contain" />
                    </View>
                    :
                    null}
            </View>
        );
    }

    renderGadgetItemCellContainer = (item) => {
        return (
            <View>
            {!item.isSelected ?
            <TouchableOpacity style={styles.productCell} onPress={() => { }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={item.productImage} style={styles.productImage} resizeMode="cover" />
                    <View style={{ marginLeft: verticalScale(15) }}>
                        <Text style={styles.productName}>{item.productName}</Text>
                        <Text style={styles.productPice}>{item.productRate}</Text>
                        <View style={styles.weightView}><Text style={styles.productWeight}>{item.productWeight}</Text></View>
                    </View>
                </View>
                <TouchableOpacity onPress={() => this.onPressCrossicon3(item)} style={{ alignSelf: 'flex-start', marginRight: scale(10) }}><Image source={IMG_CONST.crossIcon} style={styles.productFav} resizeMode="contain" /></TouchableOpacity>
            </TouchableOpacity>
            :
            null}
            </View>
        );
    }

    renderGadgetItemListContainer = () => {
        return (
            <View>
                {this.state.gadgetItemList.length > 0 ?
                    <View style={styles.listedItem}>
                        <Text style={styles.listedItems}>Gadgets Items: {this.state.gadgetItemList.length}</Text>
                        <Text style={styles.totalPrice}>Total: Rs.{this.state.totalPrice}</Text>
                    </View>
                    :
                    null}
                <FlatList
                    data={this.state.gadgetItemList}
                    renderItem={({ item }) => this.renderGadgetItemCellContainer(item)}
                    ListEmptyComponent={() => <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={styles.image} source={IMG_CONST.thamks} />
                        <Text style={styles.emptyListText}>Your gadget cart is EMPTY!</Text>
                    </View>}
                />
                {this.state.gadgetItemList.length > 0 ?
                    <View style={[styles.emailView, { borderColor: this.state.isInvalidCode ? 'red' : COLOR_CONST.btnBgColor, marginBottom: verticalScale(50) }]}>
                        <TextInput
                            style={styles.textInput}
                            placeholderTextColor={COLOR_CONST.textInputTextColor}
                            placeholder="Gadget Promo Code"
                            onChangeText={(text) => this.setState({ promoCodeGadget: text, isInvalidCode: false }, () => this.checkEmail())}
                        />
                        <Image source={IMG_CONST.ticket} style={styles.greenChecked} resizeMode="contain" />
                    </View>
                    :
                    null}
            </View>
        );
    }

    render() {
        return (
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <StatusBar barStyle="light-content" backgroundColor={COLOR_CONST.btnBgColor} height={10} />
                {/* <SafeAreaView backgroundColor={COLOR_CONST.loginBtnOuterColor} style={{height: 10}} height={10}  /> */}
                {this.renderHeaderContainer()}
                {this.renderItemListContainer()}
                {this.renderShopItemListContainer()}
                {this.renderMartItemListContainer()}
                {this.renderGadgetItemListContainer()}
                <TouchableOpacity style={styles.checkoutBtn}>
                    <Text style={styles.buyNowText}>CHECKOUT</Text>
                </TouchableOpacity>
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
        getCartByEmail: (data, successCallBack, failureCallBack) => dispatch(homeActions.getCartByEmail(data, successCallBack, failureCallBack)),
        removeCartItem: (data, successCallBack, failureCallBack) => dispatch(homeActions.removeCartItem(data, successCallBack, failureCallBack)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen)
