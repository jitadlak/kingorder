import React, { Component } from 'react';
import styles from './PaymentStyle'
import { Image, ImageBackground, StatusBar, Text, View, ScrollView, TouchableOpacity, TextInput, FlatList, SafeAreaView } from 'react-native';
import COLOR_CONST from '../../../app/theme/ColorConstants';
import * as IMG_CONST from '../../../app/theme/ImageConstants';
import * as STRING_CONST from '../../../app/theme/StringConstants';
import scale, { verticalScale } from '../../utils/Scale';
import { color } from 'react-native-reanimated';
// import { Icon } from 'react-native-elements';

export class PaymentScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPaymentDone: false
        }
    }

    renderHeaderContainer = () => {
        return (
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}><Image style={styles.backIcon} source={IMG_CONST.blackBackIcon} /></TouchableOpacity>
                <Text style={styles.mainText}>Payment</Text>
                <TouchableOpacity>
                    {/* <Image style={styles.bellIcon} source={IMG_CONST.orangeBell} /> */}
                </TouchableOpacity>
            </View>
        );
    }

    renderShowCardContainer = () => {
        return (
            <View>
                <View style={styles.showCardView}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={[styles.showCardText, { fontSize: scale(16), marginTop: verticalScale(0) }]}>Shopping Card</Text>
                        <Image style={styles.showCardImage} source={IMG_CONST.orangeBell} />
                    </View>
                    <Text style={styles.showCardNoText}>7474 7474 7474 7474</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={[styles.cardHeading, { color: '#f2f2f2', fontSize: scale(12) }]}>CARD HOLDER</Text>
                            <Text style={styles.showCardText}>Janni Kavin</Text>
                        </View>
                        <View>
                            <Text style={[styles.cardHeading, { color: '#fdfdfd', fontSize: scale(12) }]}>EXPIRES</Text>
                            <Text style={styles.showCardText}>01 / 12</Text>
                        </View>
                        <View>
                            <Text style={[styles.cardHeading, { color: '#fdfdfd', fontSize: scale(12) }]}>CVV</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: scale(25) }}><View style={styles.showCardCvv} /><View style={styles.showCardCvv} /><View style={styles.showCardCvv} /></View>
                        </View>
                    </View>
                </View>
                <View style={styles.showCardRupees}>
                    <View>
                        <Text style={styles.cardHeading}>Received</Text>
                        <Text style={styles.rupeesText}>500$</Text>
                    </View>
                    <View>
                        <Text style={styles.cardHeading}>Available</Text>
                        <Text style={styles.boldRupeesText}>1300$</Text>
                    </View>
                    <View>
                        <Text style={styles.cardHeading}>Sent</Text>
                        <Text style={styles.rupeesText}>20$</Text>
                    </View>
                </View>
            </View>
        );
    }

    renderCardHolderDetailsContainer = () => {
        return (
            <View style={styles.cardHolderView}>
                <Text style={styles.cardHeading}>Cardholder Name</Text>
                <Text style={styles.cardHolderText}>Janni Kavin</Text>
                <Text style={styles.cardHeading}>Card Number</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={styles.cardHolderImage} source={IMG_CONST.orangeBell} />
                    <Text style={styles.cardNoText}>7474 7474 7474 7474</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View>
                        <Text style={styles.cardHeading}>EXPIRES</Text>
                        <Text style={styles.cardHolderText}>01 / 12</Text>
                    </View>
                    <View style={{ marginRight: scale(30) }}>
                        <Text style={styles.cardHeading}>CVV</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: scale(25) }}><View style={[styles.showCardCvv, { backgroundColor: '#000000' }]} /><View style={[styles.showCardCvv, { backgroundColor: '#000000' }]} /><View style={[styles.showCardCvv, { backgroundColor: '#000000' }]} /></View>
                    </View>
                </View>
            </View>
        );
    }

    renderTransactionCell = (item) => {
        return (
            <TouchableOpacity style={styles.transactionView}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={styles.transactionNameBg}><Text style={styles.firstLetter}>M</Text></View>
                    <View style={{width: scale(170)}}>
                        <Text style={styles.transactTo}>Mohit Kumar</Text>
                        <Text style={styles.transactFor}>Shopping</Text>
                    </View>
                </View>
                <View>
                <Text style={[styles.transactTo, {color: '#4d8fe4', alignSelf: 'center', marginRight: scale(8)}]}>-722$</Text>
                        <Text style={styles.transactFor}>03:20 PM</Text>
                </View>
            </TouchableOpacity>
        );
    }

    renderTransactionListContaier = () => {
        return (
            <View>
                <Text style={styles.transactionText}>Transactions</Text>
                <FlatList
                style={{marginTop: verticalScale(10), marginBottom: verticalScale(20)}}
                    data={[{ id: 1, image: IMG_CONST.offer1 }, { id: 2, image: IMG_CONST.offer2 }, { id: 3, image: IMG_CONST.offer2 }]}
                    renderItem={({ item }) => this.renderTransactionCell(item)}
                />
            </View>
        );
    }

    renderButtonCOntaier = () => {
        return (
            <TouchableOpacity onPress={() => this.setState({ isPaymentDone: true })} style={styles.confirmButton}>
                <Text style={styles.confirmText}>Confirm Payment</Text>
            </TouchableOpacity>
        );
    }

    renderPaymentConfirmedContainer = () => {
        return (
            <View>
                <Image style={styles.paymentConfirmed} source={IMG_CONST.orangeBell} />
                <Text style={styles.successMessage}>Payment Process is{'\n'}done successfully</Text>
                <TouchableOpacity><Text style={styles.continueText}>Continue Shopping</Text></TouchableOpacity>
            </View>
        );
    }

    render() {
        return (
            // <View style={{flex: 1}}>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <StatusBar barStyle="dark-content" />
                {this.renderHeaderContainer()}
                {!this.state.isPaymentDone && this.renderShowCardContainer()}
                {!this.state.isPaymentDone && this.renderCardHolderDetailsContainer()}
                {!this.state.isPaymentDone && this.renderTransactionListContaier()}
                {!this.state.isPaymentDone && this.renderButtonCOntaier()}
                {this.state.isPaymentDone && this.renderPaymentConfirmedContainer()}
            </ScrollView>
            // </View>
        )
    }
}

export default PaymentScreen
