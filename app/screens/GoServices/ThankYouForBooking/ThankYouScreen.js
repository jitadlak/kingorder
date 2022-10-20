import React, { Component } from 'react';
import styles from './ThankYouStyle'
import { Image, ImageBackground, StatusBar, Text, View, ScrollView, TouchableOpacity, TextInput, FlatList, SafeAreaView } from 'react-native';
import COLOR_CONST from '../../../../app/theme/ColorConstants';
import * as IMG_CONST from '../../../../app/theme/ImageConstants';
import * as STRING_CONST from '../../../../app/theme/StringConstants';
import scale, { verticalScale } from '../../../utils/Scale';

export class ThankYouScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    renderThankYouCard = () => {
        return (
            <View style={styles.thankYouCard}>
                <Image style={styles.image} source={IMG_CONST.thamks} />
                <Text style={styles.headingText}>Thanks for booking!</Text>
                <Text style={styles.subHeadingtext}>You booked an appointment{'\n'} {this.props.route.params.appointDate} at {this.props.route.params.appointTime}</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("YourBookings")} style={styles.bookingButton}><Text style={styles.bookingText}>GO TO MY BOOKING</Text></TouchableOpacity>
            </View>
        );
    }

    render() {
        return (
            <ScrollView style={styles.container} contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
                <StatusBar barStyle="dark-content" backgroundColor={COLOR_CONST.btnBgColor} />
                {/* <SafeAreaView backgroundColor={this.props.route.params.topColor} style={{height: 10}}  /> */}
                {this.renderThankYouCard()}
            </ScrollView>
        )
    }
}

export default ThankYouScreen
