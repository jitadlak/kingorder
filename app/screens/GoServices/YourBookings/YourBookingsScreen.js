import React, { Component } from 'react';
import styles from './YourBookingsStyle'
import { Image, ImageBackground, StatusBar, Text, View, ScrollView, TouchableOpacity, TextInput, FlatList, SafeAreaView } from 'react-native';
import COLOR_CONST from '../../../../app/theme/ColorConstants';
import * as IMG_CONST from '../../../../app/theme/ImageConstants';
import * as STRING_CONST from '../../../../app/theme/StringConstants';
import scale, { verticalScale } from '../../../utils/Scale';
import moment from 'moment';

export class YourBookingsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUpcomingSelected: true,
            isPastSelected: false
        }
    }

    componentDidMount = () => {
    }

    checkWeekend = (date1) => {
        let dt = new Date(date1);
        if (dt.getDay() == 6 || dt.getDay() == 0) {
            return "weekend";
        }
    }

    renderHeadingContainer = () => {
        return (
            <View>
                <Text style={styles.headingText}>Your Booking</Text>
                <View style={styles.tabView}>
                    <TouchableOpacity onPress={() => this.setState({ isUpcomingSelected: true, isPastSelected: false })}
                        style={this.state.isUpcomingSelected ? styles.selectedTabView : styles.deselectedTabView}>
                        <Text style={[styles.selectedText, { color: this.state.isUpcomingSelected ? COLOR_CONST.btnBgColor : "#00000060" }]}>Upcoming</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setState({ isUpcomingSelected: false, isPastSelected: true })}
                        style={this.state.isPastSelected ? styles.selectedTabView : styles.deselectedTabView}>
                        <Text style={[styles.selectedText, { color: this.state.isPastSelected ? COLOR_CONST.btnBgColor : "#00000060" }]}>Past</Text></TouchableOpacity>
                </View>
            </View>
        );
    }

    renderUpcomingContainer = () => {
        return (
            <View style={styles.optionsCard}>
                <Text style={styles.daysText}>In 3 days</Text>
                <Text style={styles.serviceText}>Service check up</Text>
                <View style={{ marginTop: verticalScale(30), flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={styles.icon} source={IMG_CONST.date} resizeMode="contain" />
                    <Text style={styles.text}>November 20</Text>
                </View>
                <View style={{ marginTop: verticalScale(30), flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={styles.icon} source={IMG_CONST.time} resizeMode="contain" />
                    <Text style={styles.text}>12:30 PM</Text>
                </View>
                <View style={{ marginTop: verticalScale(30), flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={styles.icon} source={IMG_CONST.location} resizeMode="contain" />
                    <Text style={styles.text}>Main Street, 18</Text>
                </View>
                <View style={{ marginTop: verticalScale(30), flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={styles.icon} source={IMG_CONST.whiteCallIcon} resizeMode="contain" />
                    <Text style={styles.text}>+91 999 999 9999</Text>
                </View>
                <TouchableOpacity style={styles.btnView}><Text style={styles.btnText}>RESCHEDULE</Text></TouchableOpacity>
            </View>
        );
    }

    renderPastContainer = () => {
        return (
            <View>
                {/* <Text style={styles.headingText}>Your Booking</Text> */}
            </View>
        );
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor={COLOR_CONST.btnBgColor} />
                {/* <SafeAreaView backgroundColor={this.props.route.params.topColor} style={{height: 10}}  /> */}
                {this.renderHeadingContainer()}
                {this.state.isUpcomingSelected && this.renderUpcomingContainer()}
                {this.state.isPastSelected && this.renderPastContainer()}
            </ScrollView>
        )
    }
}

export default YourBookingsScreen
