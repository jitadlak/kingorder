import React, { Component } from 'react';
import styles from './CheckoutStyle'
import { Image, ImageBackground, StatusBar, Text, View, ScrollView, TouchableOpacity, TextInput, FlatList, SafeAreaView } from 'react-native';
import COLOR_CONST from '../../../app/theme/ColorConstants';
import * as IMG_CONST from '../../../app/theme/ImageConstants';
import * as STRING_CONST from '../../../app/theme/StringConstants';
import scale, { verticalScale } from '../../utils/Scale';
// import { Icon } from 'react-native-elements';

export class CheckoutScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardsList: [
                {
                    id: 1,
                    cardName: "MasterCard",
                    cardImage: IMG_CONST.walletIcon,
                    isSelected: false
                }, {
                    id: 2,
                    cardName: "wallet",
                    cardImage: IMG_CONST.walletIcon,
                    isSelected: false
                }, {
                    id: 3,
                    cardName: "Cash On Delivery",
                    cardImage: IMG_CONST.walletIcon,
                    isSelected: false
                }
            ],
            isWorkClicked: false,
            isHomeClicked: false
        }
    }

    onPressSelectCard = (item) => {
        var tempList = this.state.cardsList;
        for (var i = 0; i < tempList.length; i++) {
            if (tempList[i].id == item.id) {
                tempList[i]["isSelected"] = true;
            } else {
                tempList[i]["isSelected"] = false;
            }
        }
        this.setState({ cardsList: tempList })
    }

    renderHeaderContainer = () => {
        return (
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}><Image style={styles.backIcon} source={IMG_CONST.blackBackIcon} /></TouchableOpacity>
                <Text style={styles.mainText}>Checkout</Text>
                <TouchableOpacity>
                    {/* <Image style={styles.bellIcon} source={IMG_CONST.orangeBell} /> */}
                </TouchableOpacity>
            </View>
        );
    }

    renderAddressContainer = () => {
        return (
            <View>
                <View style={styles.shippingView}>
                    <Text style={styles.shippingText}>Shipping To:</Text>
                    <TouchableOpacity>
                        <Text style={styles.addLocationText}>Add Location</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.addressView}>
                <TouchableOpacity><Image style={styles.radiButton} source={this.state.isWorkClicked ? IMG_CONST.orangeBell : IMG_CONST.orangeBell} /></TouchableOpacity> 
                    <View>
                        <Text style={styles.locatnText}>Work Location</Text>
                        <Text style={styles.phoneNoText}>9999999999</Text>
                        <Text style={styles.addressText}>325/C, Indore</Text>
                    </View>
                </View>
                <View style={styles.addressView}>
                <TouchableOpacity><Image style={styles.radiButton} source={this.state.isHomeClicked ? IMG_CONST.orangeBell : IMG_CONST.orangeBell} /></TouchableOpacity> 
                    <View>
                        <Text style={styles.locatnText}>Home Location</Text>
                        <Text style={styles.phoneNoText}>9999999999</Text>
                        <Text style={styles.addressText}>325/C, Indore</Text>
                    </View>
                </View>
            </View>
        );
    }

    renderCardCellContainer = (item) => {
        return (
            <View style={styles.cardsCell}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={styles.cardsImage} source={item.cardImage} resizeMode="contain" />
                    <Text style={styles.cardsName}>{item.cardName}</Text>
                </View>
                <TouchableOpacity onPress={() => this.onPressSelectCard(item)}>
                    <Image style={styles.radiButton} source={item.isSelected ? item.cardImage : item.cardImage} resizeMode="contain" />
                </TouchableOpacity>
            </View>
        );
    }

    renderCardListContainer = () => {
        return (
            <View>
                <Text style={styles.selectText}>Select Card:</Text>
                <FlatList
                    data={this.state.cardsList}
                    renderItem={({ item }) => this.renderCardCellContainer(item)}
                />
            </View>
        );
    }

    renderButtonCOntaier = () => {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Payment")} style={styles.confirmButton}>
                <Text style={styles.confirmText}>Confirm Order</Text>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            // <View style={{flex: 1}}>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <StatusBar barStyle="dark-content" />
                {/* <SafeAreaView backgroundColor={COLOR_CONST.loginBtnOuterColor} style={{ height: 10 }} height={10} /> */}
                {this.renderHeaderContainer()}
                {this.renderAddressContainer()}
                {this.renderCardListContainer()}
                {this.renderButtonCOntaier()}
            </ScrollView>
            // </View>
        )
    }
}

export default CheckoutScreen
