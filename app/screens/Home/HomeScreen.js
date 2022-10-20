import React, { Component } from 'react';
import styles from './HomeStyle'
import { Image, ImageBackground, StatusBar, Text, View, ScrollView, TouchableOpacity, TextInput, FlatList, SafeAreaView } from 'react-native';
import COLOR_CONST from '../../../app/theme/ColorConstants';
import * as IMG_CONST from '../../../app/theme/ImageConstants';
import * as STRING_CONST from '../../../app/theme/StringConstants';
import scale, { verticalScale } from '../../utils/Scale';
// import { Icon } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import GetLocation from 'react-native-get-location';
import Swiper from 'react-native-swiper'

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            swiperIndex: 0,
            isClicked: false,
            gotCurrentLocation: false,
            userName: '',
            searchedText: '',
            lat: 0,
            lng: 0,
            categoriesList: [
                {
                    id: 1,
                    image: IMG_CONST.goFood,
                    selectedImage: IMG_CONST.goFood,
                    bg: COLOR_CONST.goFoodBg,
                    heading: "Food",
                    navigateTo: "GoFood",
                    themeColor: COLOR_CONST.goFoodBg,
                    isSelected: false,
                }, {
                    id: 2,
                    image: IMG_CONST.goShop,
                    selectedImage: IMG_CONST.goShop,
                    bg: COLOR_CONST.goShopBg,
                    heading: "Shop",
                    navigateTo: "GoShop",
                    themeColor: COLOR_CONST.goShopBg,
                    isSelected: false,
                }, {
                    id: 3,
                    image: IMG_CONST.goMart,
                    selectedImage: IMG_CONST.goMart,
                    bg: COLOR_CONST.goMartBg,
                    heading: "Groceries",
                    navigateTo: "GoMart",
                    themeColor: COLOR_CONST.goMartBg,
                    isSelected: false,
                }, {
                    id: 4,
                    image: IMG_CONST.goServices,
                    selectedImage: IMG_CONST.goServices,
                    bg: COLOR_CONST.goServiceBg,
                    heading: "Services",
                    navigateTo: "GoServices",
                    themeColor: COLOR_CONST.goServiceBg,
                    isSelected: false,
                }, {
                    id: 5,
                    image: IMG_CONST.gaGadget,
                    selectedImage: IMG_CONST.gaGadget,
                    bg: COLOR_CONST.goGadgetBg,
                    heading: "Gadgets",
                    navigateTo: "GoGadgets",
                    themeColor: COLOR_CONST.goGadgetBg,
                    isSelected: false,
                }, {
                    id: 6,
                    image: IMG_CONST.goNearby,
                    selectedImage: IMG_CONST.goNearby,
                    bg: COLOR_CONST.goNearbyBg,
                    heading: "Nearby",
                    navigateTo: "GoServices",
                    themeColor: COLOR_CONST.goNearbyBg,
                    isSelected: false,
                },
            ],
        };
    }

    componentDidMount = async () => {
        let userName = await AsyncStorage.getItem('USER_NAME');
        this.setState({ userName: userName })
    }

    onPressCategory = (item) => {
        var tempList = this.state.categoriesList;
        for (var i = 0; i < tempList.length; i++) {
            if (tempList[i].id == item.id) {
                tempList[i]["isSelected"] = true;
            } else {
                tempList[i]["isSelected"] = false;
            }
        }
        item.id !== 6 ?
            this.setState({ categoriesList: tempList }, () => this.props.navigation.navigate(item.navigateTo, { topColor: item.themeColor }))
            :
            null
    }

    onPressCurrentLocation = () => {
        return (
            GetLocation.getCurrentPosition({
                enableHighAccuracy: true,
                timeout: 15000,
            }).then(location => {
                this.setState({ lat: location.latitude, lng: location.longitude, gotCurrentLocation: true }, () => console.log("@@@ CurrentLocation =======", this.state.lat))
            }).catch(error => {
                const { code, message } = error;
                console.warn(code, message);
            })
                // .then(this.setCurrentLocationToAsync())
        );
    }

    renderHeaderContainer = () => {
        return (
            <View style={styles.headerView}>
                <Text style={styles.goodMorningText}>KingsOrder</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Notification")} style={[styles.userIconView, {marginTop: verticalScale(0)}]}>
                    <Image style={styles.headerCartIcon} source={IMG_CONST.whiteNotification} resizeMode="contain" />
                </TouchableOpacity>
            </View>
        );
    }

    renderSearchContainer = () => {
        return (
            <View style={styles.searchAndCurrent}>
                <Text style={styles.deleveringText}>Delivering to</Text>
                {!this.state.gotCurrentLocation ?
                    <TouchableOpacity style={styles.currentLocationView} onPress={() => this.onPressCurrentLocation()}>
                        <Image style={styles.currentLocationDownArrow} source={IMG_CONST.currArrow} resizeMode="contain" />
                    </TouchableOpacity>
                    :
                    <MapView
                        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                        style={styles.map}
                        region={{
                            latitude: this.state.lat,
                            longitude: this.state.lng,
                            latitudeDelta: 0.015,
                            longitudeDelta: 0.0121,
                        }}></MapView>
                }
                <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
                    <View style={styles.searchView}>
                        {/* <TouchableOpacity><Image style={styles.searchIcon} source={IMG_CONST.search} resizeMode="contain" /></TouchableOpacity> */}
                        <TextInput
                            style={styles.searchTextInput}
                            placeholderTextColor='#00000040'
                            placeholder="Search"
                            onChangeText={(text) => this.setState({ searchedText: text })}
                        />
                    </View>
                    <TouchableOpacity style={styles.userIconView} onPress={() => {}}><Image style={styles.userIcon} source={IMG_CONST.search_white} resizeMode="contain" /></TouchableOpacity>
                </View>
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

    renderCellContainer = (item) => {
        return (
            <TouchableOpacity style={styles.categoriesCell} onPress={() => this.onPressCategory(item)}>
                {/* <TouchableOpacity 
                style={[styles.cellView, { backgroundColor: item.bg }]}
                    onPress={() => this.onPressCategory(item)}
                     > */}
                <Image style={styles.categoryImage} source={item.selectedImage} resizeMode="contain" />
                {/* </TouchableOpacity> */}
                <Text style={[styles.categoriesName, { color: item.isSelected ? COLOR_CONST.btnBgColor : "#00000090" }]}>{item.heading}</Text>
            </TouchableOpacity>
        );
    }

    renderCategoriesContainer = () => {
        return (
            <View>
                <View style={styles.categoriesView}>
                    <Text style={styles.categoryText}>Categories</Text>
                    {/* <TouchableOpacity><Text style={styles.viewAllText}>View all</Text></TouchableOpacity> */}
                </View>
                <View>
                    <FlatList
                        data={this.state.categoriesList}
                        numColumns={3}
                        renderItem={({ item }) => this.renderCellContainer(item)}
                    />
                </View>
            </View>
        );
    }

    renderOfferCell = (item) => {
        return (
            <TouchableOpacity style={styles.offerCellView}>
                <Image style={styles.offerImage} source={item.image} resizeMode="contain" />
                <View style={{ paddingHorizontal: scale(10) }}>
                    <Text style={styles.offerHeading}>Order for Fames Restorent</Text>
                    <Text style={styles.offerSubheading}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</Text>
                </View>
            </TouchableOpacity>
        );
    }

    renderOrderHistoryContainer = () => {
        return (
            <View style={{ marginBottom: verticalScale(50) }}>
                <View>
                    <FlatList
                        data={[{ id: 1, image: IMG_CONST.offer1 }, { id: 2, image: IMG_CONST.offer2 }]}
                        renderItem={({ item }) => this.renderOfferCell(item)}
                    />
                </View>
            </View>
        );
    }

    render() {
        return (
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <StatusBar barStyle="light-content" backgroundColor={COLOR_CONST.loginBtnOuterColor} height={10} />
                <SafeAreaView backgroundColor={COLOR_CONST.loginBtnOuterColor} style={{ height: 10 }} height={10} />
                {this.renderHeaderContainer()}
                {this.renderSearchContainer()}
                {this.renderSwiperContainer()}
                {this.renderCategoriesContainer()}
                {this.renderOrderHistoryContainer()}
            </ScrollView>
        )
    }
}

export default HomeScreen