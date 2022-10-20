import React, { Component } from 'react';
import styles from './HomeStyle'
import { Image, ImageBackground, StatusBar, Text, View, ScrollView, TouchableOpacity, TextInput, FlatList } from 'react-native';
import COLOR_CONST from '../../../app/theme/ColorConstants';
import * as IMG_CONST from '../../../app/theme/ImageConstants';
import * as STRING_CONST from '../../../app/theme/StringConstants';
import scale, { verticalScale } from '../../utils/Scale';
// import { Icon } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false,
            userName: '',
            searchedText: '',
            categoriesList: [
                {
                    id: 1,
                    image: IMG_CONST.map_food,
                    selectedImage: IMG_CONST.mapFood,
                    heading: "Go Food",
                    isSelected: true,
                }, {
                    id: 2,
                    image: IMG_CONST.cart,
                    selectedImage: IMG_CONST.mapFood,
                    heading: "Go Shop",
                    isSelected: false,
                }, {
                    id: 3,
                    image: IMG_CONST.basket,
                    selectedImage: IMG_CONST.mapFood,
                    heading: "Go Mart",
                    isSelected: false,
                }, {
                    id: 4,
                    image: IMG_CONST.tools,
                    selectedImage: IMG_CONST.mapFood,
                    heading: "Go Services",
                    isSelected: false,
                }, {
                    id: 5,
                    image: IMG_CONST.mobile,
                    selectedImage: IMG_CONST.mapFood,
                    heading: "Go Gadgets",
                    isSelected: false,
                }, {
                    id: 6,
                    image: IMG_CONST.locationOn,
                    selectedImage: IMG_CONST.mapFood,
                    heading: "Go Nearby",
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
        this.setState({ categoriesList: tempList })
    }

    renderHeaderContainer = () => {
        return (
            <View style={styles.headerView}>
                <Text style={styles.goodMorningText}>Good morning Jone!</Text>
                <TouchableOpacity>
                    <Image style={styles.headerCartIcon} source={IMG_CONST.cart} resizeMode="contain" />
                </TouchableOpacity>
            </View>
        );
    }

    renderSearchContainer = () => {
        return (
            <View style={styles.searchAndCurrent}>
                <Text style={styles.deleveringText}>Delivering to</Text>
                <TouchableOpacity style={styles.currentLocationView}>
                    <Text style={styles.currentLocation}>Current Location</Text>
                    <Image style={styles.currentLocationDownArrow} source={IMG_CONST.downArrow} resizeMode="contain" />
                </TouchableOpacity>
                <View style={styles.searchView}>
                    <TouchableOpacity><Image style={styles.searchIcon} source={IMG_CONST.search} resizeMode="contain" /></TouchableOpacity>
                    <TextInput
                        style={styles.searchTextInput}
                        placeholderTextColor='#00000040'
                        placeholder="Search"
                        onChangeText={(text) => this.setState({ searchedText: text })}
                    />
                </View>

            </View>
        );
    }

    renderCellContainer = (item) => {
        return (
            <View style={styles.categoriesCell}>
                <TouchableOpacity style={[styles.cellView, {backgroundColor: item.isSelected ? COLOR_CONST.btnBgColor : '#ffffff60'}]}
                onPress={() => this.onPressCategory(item)}>
                    <Image style={styles.categoryImage} source={item.image} resizeMode="contain" />
                </TouchableOpacity>
                <Text style={[styles.categoriesName, {color: item.isSelected ? COLOR_CONST.btnBgColor : "#00000090"}]}>{item.heading}</Text>
            </View>
        );
    }

    renderCategoriesContainer = () => {
        return (
            <View>
                <View style={styles.categoriesView}>
                    <Text style={styles.categoryText}>Categories</Text>
                    <TouchableOpacity><Text style={styles.viewAllText}>View all</Text></TouchableOpacity>
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

    render() {
        return (
            <ScrollView style={styles.container}>
                <StatusBar barStyle="dark-content" />
                {this.renderHeaderContainer()}
                {this.renderSearchContainer()}
                {this.renderCategoriesContainer()}
            </ScrollView>
        )
    }
}

export default HomeScreen