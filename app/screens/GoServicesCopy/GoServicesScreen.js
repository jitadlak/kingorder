import React, { Component } from 'react';
import styles from './GoServicesStyle'
import { Image, ImageBackground, StatusBar, Text, View, ScrollView, TouchableOpacity, TextInput, FlatList, SafeAreaView } from 'react-native';
import COLOR_CONST from '../../theme/ColorConstants';
import * as IMG_CONST from '../../theme/ImageConstants';
import * as STRING_CONST from '../../theme/StringConstants';
import scale, { verticalScale } from '../../utils/Scale';

export class GoServicesScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false,
            serviceList: [
                {
                    id: 1,
                    image: IMG_CONST.appliance,
                    serviceName: "Appliances",
                    bgColor: COLOR_CONST.goFoodBg
                }, {
                    id: 2,
                    image: IMG_CONST.water,
                    serviceName: "Water Purifier(RO)",
                    bgColor: COLOR_CONST.goShopBg
                }, {
                    id: 3,
                    image: IMG_CONST.refrigerator,
                    serviceName: "Refrigerator",
                    bgColor: COLOR_CONST.goMartBg
                }, {
                    id: 4,
                    image: IMG_CONST.geyser,
                    serviceName: "Geyser",
                    bgColor: COLOR_CONST.goServiceBg
                }, {
                    id: 5,
                    image: IMG_CONST.ac,
                    serviceName: "Ac services",
                    bgColor: COLOR_CONST.goGadgetBg
                }, {
                    id: 6,
                    image: IMG_CONST.electrician,
                    serviceName: "Electrician",
                    bgColor: COLOR_CONST.goNearbyBg
                }, {
                    id: 7,
                    image: IMG_CONST.plumber,
                    serviceName: "Plumber",
                    bgColor: '#c3f5fe'
                }, {
                    id: 8,
                    image: IMG_CONST.homeCleaning,
                    serviceName: "Home Cleaning",
                    bgColor: '#ffc6ac'
                }, {
                    id: 9,
                    image: IMG_CONST.pastControl,
                    serviceName: "Pest Control",
                    bgColor: '#c4c4c4'
                }
            ]
        }
    }

    onPressServiceCell = (item) => {
        var tempList = this.state.serviceList;
        for (var i = 0; i < tempList.length; i++) {
            if (tempList[i].id == item.id) {
                tempList[i]["isSelected"] = true;
            } else {
                tempList[i]["isSelected"] = false;
            }
        }
        this.setState({ serviceList: tempList }, () => this.props.navigation.navigate("GoServicesCellCopy", { item: item }))
    }

    renderHeaderContainer = () => {
        return (
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}><Image style={styles.backIcon} source={IMG_CONST.blackBackIcon} /></TouchableOpacity>
                <Text style={styles.mainText}>Go Services</Text>
                <TouchableOpacity><Image style={styles.bellIcon} source={IMG_CONST.orangeBell} /></TouchableOpacity>
            </View>
        );
    }

    renderServicesCell = (item) => {
        return (
            <TouchableOpacity style={styles.categoriesCell} onPress={() => this.onPressServiceCell(item)}>
                <View style={[styles.cellView, { backgroundColor: item.bgColor }]}>
                    <Image style={styles.categoryImage} source={item.image} resizeMode="contain" />
                </View>
                <Text style={[styles.categoriesName, { color: item.isSelected ? COLOR_CONST.btnBgColor : "#00000090" }]}>{item.serviceName}</Text>
            </TouchableOpacity>
        );
    }

    renderServicesListContainer = () => {
        return (
            <View style={{ marginTop: verticalScale(20) }}>
                <FlatList
                    data={this.state.serviceList}
                    numColumns={3}
                    renderItem={({ item }) => this.renderServicesCell(item)}
                />
            </View>
        );
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor={COLOR_CONST.btnBgColor} />
                {/* <SafeAreaView backgroundColor={this.props.route.params.topColor} style={{height: 10}}  /> */}
                {this.renderHeaderContainer()}
                {this.renderServicesListContainer()}
            </ScrollView>
        )
    }
}

export default GoServicesScreen
