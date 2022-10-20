import React, { Component } from 'react';
import styles from './GoMartStyle'
import { Image, ImageBackground, StatusBar, Text, View, ScrollView, TouchableOpacity, TextInput, FlatList, SafeAreaView } from 'react-native';
import COLOR_CONST from '../../../app/theme/ColorConstants';
import * as IMG_CONST from '../../../app/theme/ImageConstants';
import scale, { verticalScale } from '../../utils/Scale';
import Swiper from 'react-native-swiper'
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import * as commonActions from '../../redux/actions/commonActions';
import * as userActions from '../../redux/actions/userActions';
import * as homeActions from '../../redux/actions/homeActions';

export class GoMartScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            swiperIndex: 0,
            isClicked: false,
            showAllCategory: false,
            userName: '',
            searchedText: '',
            categoriesList: [
                // {
                //     id: 1,
                //     categoryImage: IMG_CONST.stekIcon,
                //     selectedImage: IMG_CONST.mapFood,
                //     categoryName: "Steak",
                //     isSelected: true,
                // }, {
                //     id: 2,
                //     categoryImage: IMG_CONST.vegIcon,
                //     selectedImage: IMG_CONST.mapFood,
                //     categoryName: "Vegetables",
                //     isSelected: false,
                // }, {
                //     id: 3,
                //     categoryImage: IMG_CONST.beverages,
                //     selectedImage: IMG_CONST.mapFood,
                //     categoryName: "Bevarages",
                //     isSelected: false,
                // }, {
                //     id: 4,
                //     categoryImage: IMG_CONST.fishIcon,
                //     selectedImage: IMG_CONST.mapFood,
                //     categoryName: "Fish",
                //     isSelected: false,
                // }
            ],
            dealsList: [
                {
                    id: 1,
                    image: IMG_CONST.iceCream,
                    heading: "Summer Sun Ice Cream Pack",
                    piece: "Pieces 5",
                    minutes: "15 Minutes Away",
                    price: 12,
                    currentPrice: 18,
                    isSelected: false,
                }, {
                    id: 2,
                    image: IMG_CONST.product2,
                    heading: "Summer Sun Ice Cream Pack",
                    piece: "Pieces 5",
                    minutes: "15 Minutes Away",
                    price: 12,
                    currentPrice: 18,
                    isSelected: false,
                }
            ],
            offerList: [{ id: 1 }, { id: 2 }],
        };
    }

    componentDidMount = async () => {
        let userName = await AsyncStorage.getItem('USER_NAME');
        this.getAllMartCategoryList()
    }

    onPressCategory = (item) => {
        var tempList = this.state.categoriesList;
        for (var i = 0; i < tempList.length; i++) {
            if (tempList[i].categoryId == item.categoryId) {
                tempList[i]["isSelected"] = true;
            } else {
                tempList[i]["isSelected"] = false;
            }
        }
        this.setState({ categoriesList: tempList }, () => this.props.navigation.navigate("GoMartCategories", {categoryName: item.categoryName}))
    }

    onPressDeals = (item) => {
        var tempList = this.state.dealsList;
        for (var i = 0; i < tempList.length; i++) {
            if (tempList[i].id == item.id) {
                tempList[i]["isSelected"] = true;
            }
        }
        this.setState({ dealsList: tempList })
    }

    getAllMartCategoryList = async () => {
        this.props.getAllMartCategoryList((res) => this.getAllMartCategoryListSuccessCallBack(res), (err) => this.getAllMartCategoryListFailureCallBack(err))
    }

    getAllMartCategoryListSuccessCallBack = async (res) => {
        console.log('@@@ Get All Mart Category Success CallBack ===================', res);
        let localPlayerList = res.data.data;
        let modifiedList = [];
        localPlayerList.map((item) => {
            item['isSelected'] = false;
            modifiedList.push(item);
        });
        console.log('@@@ Get All Mart Data CallBack ===================', localPlayerList);
        this.setState({ categoriesList: modifiedList });
    }

    getAllMartCategoryListFailureCallBack = (error) => {
        console.log('@@@ Get All Mart Category Failure CallBack ===================', error);
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

    getFoodSearchList = async () => {
        let data = {};
        data['categoryName'] = 'mart';
        data['searchParam'] = 'po';
        this.props.getFoodSearchList(data, (res) => this.getFoodSearchListSuccessCallBack(res), (err) => this.getFoodSearchListFailureCallBack(err))
    }

    getFoodSearchListSuccessCallBack = async (res) => {
        console.log('@@@ Get Food Search List Success CallBack ===================', res);
        let localPlayerList = res.data.data;
        let modifiedList = [];
        localPlayerList.map((item) => {
            item['isSelected'] = false;
            modifiedList.push(item);
        });
        console.log('@@@ Get Food Search Data CallBack ===================', localPlayerList);
        this.setState({ searchList: modifiedList });
    }

    getFoodSearchListFailureCallBack = (error) => {
        console.log('@@@ Get Food Search List Failure CallBack ===================', error);
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
            <View style={styles.headerView}>
                {/* <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity>
                        <Image style={styles.menuIcon} source={IMG_CONST.orangeMenu} resizeMode="contain" />
                    </TouchableOpacity>
                </View> */}
                <Text style={styles.goodMorningText}>Groceries</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Notification")} style={[styles.userIconView, {marginTop: verticalScale(0)}]}>
                    <Image style={styles.headerCartIcon} source={IMG_CONST.whiteNotification} resizeMode="contain" />
                </TouchableOpacity>
            </View>
        );
    }

    renderSearchContainer = () => {
        return (
            <View style={styles.searchView}>
                <TouchableOpacity onPress={() => this.getFoodSearchList()}><Image style={styles.searchIcon} source={IMG_CONST.search} resizeMode="contain" /></TouchableOpacity>
                <TextInput
                    style={styles.searchTextInput}
                    placeholderTextColor='#00000040'
                    placeholder="Search"
                    onChangeText={(text) => this.setState({ searchedText: text }, () => {})}
                />
            </View>
        );
    }


    renderSwiperContainer = () => {
        return (
            <View style={{ paddingVertical: verticalScale(10), height: scale(180), width: scale(375) }}>
                <Swiper
                    showsButtons={false}
                    index={this.state.swiperIndex}
                    loop={true}
                    paginationStyle={styles.pagination}
                    showsPagination={this.state.isShowDots}
                    activeDot={<View style={styles.activeDot} />}
                    dot={<View style={styles.inActiveDot} />}
                    autoplay={true}
                >
                    <View style={{ flex: 1 }}>
                        <Image source={IMG_CONST.medlifeImage} style={styles.wt1} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Image source={IMG_CONST.medlifeImage} style={styles.wt2} />
                    </View>

                    <View style={{ flex: 1 }}>
                        <Image source={IMG_CONST.medlifeImage} style={styles.wt3} resizeMode="cover" />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Image source={IMG_CONST.medlifeImage} style={styles.wt4} resizeMode="cover" />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Image source={IMG_CONST.medlifeImage} style={styles.wt5} resizeMode="cover" />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Image source={IMG_CONST.medlifeImage} style={styles.wt6} resizeMode="cover" />
                    </View>
                </Swiper>
            </View>
        );
    }

    renderAddressContainer = () => {
        return (
            <View style={styles.addressView}>
                <TouchableOpacity style={styles.adressView}>
                    <Image style={styles.mapImage} source={IMG_CONST.map_image} />
                    <View>
                        <Text style={styles.adressName}>Home Address</Text>
                        <Text numberOfLines={2} style={styles.adress}>Oxford St. No.2 Street x12</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.adressView}>
                    <Image style={styles.mapImage} source={IMG_CONST.map_image} />
                    <View>
                        <Text style={styles.adressName}>Office Address</Text>
                        <Text numberOfLines={2} style={styles.adress}>Oxford St. No.2 Street x12</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity><Text style={{ fontSize: scale(20), color: COLOR_CONST.btnBgColor }}>+</Text></TouchableOpacity>
            </View>
        );
    }

    renderCellContainer = (item) => {
        return (
            <TouchableOpacity style={styles.categoriesCell} onPress={() => this.onPressCategory(item)}>
                <View style={[styles.cellView, { backgroundColor: item.isSelected ? COLOR_CONST.btnBgColor : '#ffffff60' }]}
                // onPress={() => this.onPressCategory(item)}
                >
                    <Image style={styles.categoryImage} source={item.categoryImage} resizeMode="contain" />
                    {/* <Image style={styles.categoryImage} source={{uri: `data:image/png[jpg];base64, ${item.image}`}} resizeMode="contain" /> */}
                </View>
                <Text style={styles.categoriesName}>{item.categoryName}</Text>
            </TouchableOpacity>
        );
    }

    renderCategoriesContainer = () => {
        return (
            <View>
                <View style={styles.categoriesView}>
                    <Text style={styles.categoryText}>Explore by Category</Text>
                    <TouchableOpacity onPress={() => this.setState({ showAllCategory: true })}><Text style={styles.viewAllText}>See All({this.state.categoriesList.length})</Text></TouchableOpacity>
                </View>
                {
                    this.state.showAllCategory ?
                        <View>
                            <FlatList
                                data={this.state.categoriesList}
                                numColumns={4}
                                renderItem={({ item }) => this.renderCellContainer(item)}
                            />
                        </View>
                        :
                        <View style={{ height: scale(210) }}>
                            <FlatList
                                data={this.state.categoriesList}
                                numColumns={4}
                                showsVerticalScrollIndicator={false}
                                scrollEnabled={false}
                                renderItem={({ item }) => this.renderCellContainer(item)}
                            />
                        </View>
                }
            </View>
        );
    }

    renderDealsCellContainer = (item) => {
        return (
            <TouchableOpacity style={styles.dealsCell}>
                <ImageBackground style={styles.dealsImage} source={item.image} resizeMode="contain" >
                    {/* <TouchableOpacity style={styles.dealsCellView}
                        onPress={() => this.onPressDeals(item)}>
                        <Image style={styles.heart} source={item.isSelected ? IMG_CONST.heartActive : IMG_CONST.heartDeactive} resizeMode="contain" />
                    </TouchableOpacity> */}
                </ImageBackground>
                <View>
                    <Text style={styles.dealsName}>{item.heading}</Text>
                    <Text style={styles.piece}>{item.piece}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: verticalScale(10) }}>
                        <Image style={styles.loca} source={IMG_CONST.map} resizeMode="contain" />
                        <Text style={styles.min}>    {item.minutes}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.price}>$ {item.price}</Text>
                        <Text style={styles.currPrice}>       $ {item.currentPrice}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    renderDealsContainer = () => {
        return (
            <View>
                <View style={styles.dealsView}>
                    <Text style={styles.dealsText}>Deals of the day</Text>
                </View>
                <View>
                    <FlatList
                        data={this.state.dealsList}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => this.renderDealsCellContainer(item)}
                    />
                </View>
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
                <StatusBar barStyle="dark-content" />
                {this.renderHeaderContainer()}
                {this.renderSearchContainer()}
                {this.renderSwiperContainer()}
                {this.renderCategoriesContainer()}
                {this.renderDealsContainer()}
                {this.renderOfferContainer()}
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
        getAllMartCategoryList: (successCallBack, failureCallBack) => dispatch(homeActions.getAllMartCategoryList(successCallBack, failureCallBack)),
        getFoodSearchList: (data, successCallBack, failureCallBack) => dispatch(homeActions.getFoodSearchList(data, successCallBack, failureCallBack)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GoMartScreen)
