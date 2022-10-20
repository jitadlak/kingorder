import React, { Component } from 'react';
import styles from './ProductDetailStyle'
import { Image, ImageBackground, StatusBar, Text, View, ScrollView, TouchableOpacity, TextInput, FlatList, SafeAreaView } from 'react-native';
import COLOR_CONST from '../../theme/ColorConstants';
import * as IMG_CONST from '../../theme/ImageConstants';
import * as STRING_CONST from '../../theme/StringConstants';
import scale, { verticalScale } from '../../utils/Scale';
// import { Icon } from 'react-native-elements';

export class ProductDetailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 0,
            quantityInGm: '',
            fClicked: false,
            sClicked: false,
            tClicked: false,
            foClicked: false
        }
    }

    renderHeaderContainer = () => {
        return (
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}><Image style={styles.backIcon} source={IMG_CONST.backIcon} /></TouchableOpacity>
                <Text style={styles.mainText}>Grocery App Deals</Text>
                <TouchableOpacity>
                    {/* <Image style={styles.bellIcon} source={this.props.route.params.fav} resizeMode="contain" /> */}
                </TouchableOpacity>
            </View>
        );
    }

    renderProductDetailContainer = () => {
        return (
            <View>
                <Image style={styles.productImage} source={{ uri: `data:image/png[jpg];base64, ${this.props.route.params.item.menuImg}` }}/>
                {/* <Image style={styles.productImage} source={this.props.route.params.item.menuImg} resizeMode="contain" /> */}
                <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginHorizontal: scale(80) }}>
                    <TouchableOpacity style={[styles.weightView, {backgroundColor: this.state.fClicked ? COLOR_CONST.btnBgColor : '#00000010'}]} onPress={() => this.setState({quantityInGm: '100g', fClicked: true, sClicked: false, tClicked: false, foClicked: false})}><Text style={[styles.productWeight, {color: this.state.fClicked ? COLOR_CONST.white : COLOR_CONST.black}]}>100 g</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.weightView, {backgroundColor: this.state.sClicked ? COLOR_CONST.btnBgColor : '#00000010'}]} onPress={() => this.setState({quantityInGm: '250g', fClicked: false, sClicked: true, tClicked: false, foClicked: false})}><Text style={[styles.productWeight, {color: this.state.sClicked ? COLOR_CONST.white : COLOR_CONST.black}]}>250 g</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.weightView, {backgroundColor: this.state.tClicked ? COLOR_CONST.btnBgColor : '#00000010'}]} onPress={() => this.setState({quantityInGm: '500g', fClicked: false, sClicked: false, tClicked: true, foClicked: false})}><Text style={[styles.productWeight, {color: this.state.tClicked ? COLOR_CONST.white : COLOR_CONST.black}]}>500 g</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.weightView, {backgroundColor: this.state.foClicked ? COLOR_CONST.btnBgColor : '#00000010'}]} onPress={() => this.setState({quantityInGm: '1kg', fClicked: false, sClicked: false, tClicked: false, foClicked: true})}><Text style={[styles.productWeight, {color: this.state.foClicked ? COLOR_CONST.white : COLOR_CONST.black}]}>1 kg</Text></TouchableOpacity>
                </View>
                <Text style={styles.productName}>{this.props.route.params.item.menutName}</Text>
                <Text style={styles.productPice}>Rs.{this.props.route.params.item.menuQty}</Text>
            </View>
        );
    }

    renderStarContainer = () => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: verticalScale(20) }}>
                <Image source={IMG_CONST.star} style={styles.star} />
                <Image source={IMG_CONST.star} style={styles.star} />
                <Image source={IMG_CONST.star} style={styles.star} />
                <Image source={IMG_CONST.star} style={styles.star} />
                <Image source={IMG_CONST.star} style={styles.star} />
            </View>
        );
    }

    renderQuantityContainer = () => {
        return (
            <View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: verticalScale(30) }}>
                    <Text style={{ color: '#00000090', fontSize: scale(16) }}>Quantity</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: verticalScale(10), paddingHorizontal: scale(40) }}>
                        <TouchableOpacity style={styles.touchable} onPress={() => this.setState({ quantity: this.state.quantity - 1 })} disabled={this.state.quantity === 0}><Text style={styles.plus}>-</Text></TouchableOpacity>
                        <Text style={[styles.plus, { color: '#000', width: scale(100), alignSelf: 'center', textAlign: 'center' }]}>{this.state.quantity}</Text>
                        <TouchableOpacity style={styles.touchable} onPress={() => this.setState({ quantity: this.state.quantity + 1 })}><Text style={styles.plus}>+</Text></TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.buyNow}><Text style={styles.buyNowText}>BUY NOW</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.addToCart}>ADD TO CART</Text></TouchableOpacity>
            </View>
        );
    }

    render() {
        return (
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <StatusBar barStyle="light-content" backgroundColor={COLOR_CONST.btnBgColor} height={10} />
                {/* <SafeAreaView backgroundColor={COLOR_CONST.loginBtnOuterColor} style={{height: 10}} height={10}  /> */}
                {this.renderHeaderContainer()}
                {this.renderProductDetailContainer()}
                {/* {this.renderStarContainer()} */}
                {this.renderQuantityContainer()}
            </ScrollView>
        )
    }
}

export default ProductDetailScreen
