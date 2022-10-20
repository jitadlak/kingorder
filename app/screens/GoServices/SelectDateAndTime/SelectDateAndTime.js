import React, { Component } from 'react';
import styles from './SelectDateAndTimeStyle'
import { Image, ImageBackground, StatusBar, Text, View, ScrollView, TouchableOpacity, TextInput, FlatList, SafeAreaView } from 'react-native';
import COLOR_CONST from '../../../../app/theme/ColorConstants';
import * as IMG_CONST from '../../../../app/theme/ImageConstants';
import * as STRING_CONST from '../../../../app/theme/StringConstants';
import scale, { verticalScale } from '../../../utils/Scale';
import { Calendar } from 'react-native-calendars'
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import * as commonActions from '../../../redux/actions/commonActions';
import * as userActions from '../../../redux/actions/userActions';
import * as homeActions from '../../../redux/actions/homeActions';

const DISABLED_DAYS = ['Saturday', 'Sunday']

export class SelectDateAndTime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedStartDate: null,
            weekdays: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            markedDates: this.getDaysInMonth(moment().month(), moment().year(), DISABLED_DAYS),
            isAmSelected: true,
            isPmSelected: false,
            amTimeSlots: [{
                id: 1, isSelected: false, time: "10:00"
            }, {
                id: 2, isSelected: false, time: "11:00"
            }, {
                id: 3, isSelected: false, time: "12:00"
            }],
            pmTimeSlots: [{ id: 1, isSelected: false, time: "01:00" }, {
                id: 2, isSelected: false, time: "02:00"
            }, {
                id: 3, isSelected: false, time: "03:00"
            }, {
                id: 4, isSelected: false, time: "04:00"
            }, {
                id: 5, isSelected: false, time: "05:00"
            }, {
                id: 6, isSelected: false, time: "06:00"
            }, {
                id: 7, isSelected: false, time: "07:00"
            }, {
                id: 8, isSelected: false, time: "08:00"
            }, {
                id: 9, isSelected: false, time: "09:00"
            }, {
                id: 10, isSelected: false, time: "10:00"
            }],
            selectedTime: "",
            selectedDate: ""
        }
        this.onDateChange = this.onDateChange.bind(this);
    }

    componentDidMount = () => {
    }

    saveServiceOrder = async () => {
        let data = {};
        data['address'] = this.state,address;
        data['mobileNo'] = this.state.mobileNo;
        data['serviceCategory'] = this.props.route.params.categoryName;
        data['serviceCompletionDay'] = this.state.selectedDate;
        data['serviceDate'] = this.state.selectedDate;
        data['serviceName'] = this.props.route.params.item.serviceName;
        data['serviceOrderId'] = this.state.serviceOrderId;
        data['serviceTime'] = this.state.selectedTime;
        this.props.saveServiceOrder(data, (res) => this.saveServiceOrderSuccessCallBack(res), (err) => this.saveServiceOrderFailureCallBack(err))
    }

    saveServiceOrderSuccessCallBack = async (res) => {
        console.log('@@@ Save Service Order Success CallBack ===================', res);
        alert('Service Order Completed')
        this.props.navigation.navigate("ThankYouScreen", {appointTime: this.state.selectedTime, appointDate: this.state.selectedDate})
    }

    saveServiceOrderFailureCallBack = (error) => {
        if (error) {
            console.log('@@@ Save Service Order Failure CallBack ===================', error);
            alert(error.data);
        } else {
            console.log('@@@ Login Failure CallBack Network Error ===================');
            alert('Network Error!');
        }
    }

    checkWeekend = (date1) => {
        let dt = new Date(date1);
        if (dt.getDay() == 6 || dt.getDay() == 0) {
            return "weekend";
        }
    }

    onDateChange(date) {
        let maxDate = moment(this.state.selectedStartDate).format('DD/MM/YYYY'); 
        this.setState({ selectedStartDate: date, selectedDate: maxDate });
    }

    getDaysInMonth(month, year, days) {
        let pivot = moment().month(month).year(year).startOf('month')
        const end = moment().month(month).year(year).endOf('month')

        let dates = {}
        const disabled = { disabled: true }
        while (pivot.isBefore(end)) {
            days.forEach((day) => {
                dates[pivot.day(day).format("YYYY-MM-DD")] = disabled
            })
            pivot.add(7, 'days')
        }
        return dates
    }

    onPressAmTimeSlots = (item) => {
        var tempList = this.state.amTimeSlots;
        for (var i = 0; i < tempList.length; i++) {
            if (tempList[i].id == item.id) {
                tempList[i]["isSelected"] = true;
                this.setState({selectedTime: tempList[i]["time"] })
            } else {
                tempList[i]["isSelected"] = false;
            }
        }
        this.setState({ timeSlots: tempList })
    }

    onPressPmTimeSlots = (item) => {
        var tempList = this.state.pmTimeSlots;
        for (var i = 0; i < tempList.length; i++) {
            if (tempList[i].id == item.id) {
                tempList[i]["isSelected"] = true;
                this.setState({selectedTime: tempList[i]["time"] })
            } else {
                tempList[i]["isSelected"] = false;
            }
        }
        this.setState({ pmTimeSlots: tempList })
    }

    renderHeaderContainer = () => {
        return (
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}><Image style={styles.backIcon} source={IMG_CONST.backIcon} /></TouchableOpacity>
                <Text style={styles.mainText}>Select date and Time</Text>
                <TouchableOpacity>
                    {/* <Image style={styles.bellIcon} source={IMG_CONST.orangeBell} /> */}
                </TouchableOpacity>
            </View>
        );
    }

    renderCalendar = () => {
        const { selectedStartDate } = this.state;
        const startDate = selectedStartDate ? selectedStartDate.toString() : '';
        return (
            <View style={{ marginTop: verticalScale(30) }}>
                <CalendarPicker
                    onDateChange={(date) => this.onDateChange(date)}
                    monthTitleStyle={styles.monthTitleStyle}
                    yearTitleStyle={styles.yearTitleStyle}
                    weekdays={this.state.weekdays}
                    startFromMonday={true}
                    // previousTitle={this.state.month}
                    // nextTitle={}
                    previousTitleStyle={styles.previousTitleStyle}
                    nextTitleStyle={styles.nextTitleStyle}
                    selectedDayStyle={styles.selectedDayStyle}
                    selectedDayTextStyle={styles.selectedDayTextStyle}
                    disabledDatesTextStyle={styles.disabledDatesTextStyle}
                    todayTextStyle={styles.todayTextStyle}
                    textStyle={styles.textStyle}
                    dayOfWeekStyles={styles.dayOfWeekStyles}
                    selectedDayColor={COLOR_CONST.btnBgColor}
                    selectedDayTextColor={COLOR_CONST.white}
                    horizontal={true}
                    scrollable={true}
                    height={scale(450)}
                // disabledDates={}
                // showDayStragglers={true}
                />
            </View>
        );
    }

    renderTimeSlotContainer = () => {
        return (
            <View>
            <Text style={[styles.previousTitleStyle, { marginLeft: scale(20), marginTop: verticalScale(30)}]}>SLOTS AVAILABLE</Text>
                <View style={styles.timeSlotView}>
                <TouchableOpacity onPress={() => this.setState({ isAmSelected: true, isPmSelected: false })}
                    style={this.state.isAmSelected ? styles.selectedSlotView : styles.deselectedSlotView}>
                    <Text style={[styles.amSlot, { color: this.state.isAmSelected ? COLOR_CONST.white : COLOR_CONST.btnBgColor }]}>AM Slots</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => this.setState({ isAmSelected: false, isPmSelected: true })}
                    style={this.state.isPmSelected ? styles.selectedSlotView : styles.deselectedSlotView}>
                    <Text style={[styles.pmSlot, { color: this.state.isPmSelected ? COLOR_CONST.white : COLOR_CONST.btnBgColor }]}>PM Slots</Text></TouchableOpacity>
            </View>
            </View>
        );
    }

    renderlAmSlotCell = (item) => {
        return (
            <TouchableOpacity onPress={() => this.onPressAmTimeSlots(item)}
                style={[styles.amSlotsCell, { backgroundColor: item.isSelected ? COLOR_CONST.btnBgColor : 'transparent' }]}>
                <Text style={[styles.textStyle, { color: item.isSelected ? "#ffffff" : "#000000" }]}>{item.time}</Text>
            </TouchableOpacity>
        );
    }

    renderAmSlotsContainer = () => {
        return (
            <View style={{ marginTop: verticalScale(10) }}>
                <FlatList
                    data={this.state.amTimeSlots}
                    numColumns={5}
                    renderItem={({ item }) => this.renderlAmSlotCell(item)}
                />
            </View>
        );
    }

    renderlPmSlotCell = (item) => {
        return (
            <TouchableOpacity onPress={() => this.onPressPmTimeSlots(item)}
                style={[styles.amSlotsCell, { backgroundColor: item.isSelected ? COLOR_CONST.btnBgColor : 'transparent' }]}>
                <Text style={[styles.textStyle, { color: item.isSelected ? "#ffffff" : "#000000" }]}>{item.time}</Text>
            </TouchableOpacity>
        );
    }

    renderPmSlotsContainer = () => {
        return (
            <View style={{ marginTop: verticalScale(10) }}>
                <FlatList
                    data={this.state.pmTimeSlots}
                    numColumns={5}
                    renderItem={({ item }) => this.renderlPmSlotCell(item)}
                />
            </View>
        );
    }

    renderButtonsContainer = () => {
        return (
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.backButton}><Text style={styles.backText}>BACK</Text></TouchableOpacity>
                <TouchableOpacity style={styles.nextButton} onPress={() => this.props.navigation.navigate("ThankYouScreen", {appointTime: this.state.selectedTime, appointDate: this.state.selectedDate})}><Text style={styles.nextText}>NEXT</Text></TouchableOpacity>
            </View>
        );
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor={COLOR_CONST.btnBgColor} />
                {/* <SafeAreaView backgroundColor={this.props.route.params.topColor} style={{height: 10}}  /> */}
                {this.renderHeaderContainer()}
                <Text style={{fontSize: scale(14), color: '#00000080', marginTop: verticalScale(30), alignSelf: 'flex-end', marginRight: scale(20)}}>Charges: {this.props.route.params.servicePrice}</Text>
                {this.renderCalendar()}
                {this.renderTimeSlotContainer()}
                {this.state.isAmSelected && this.renderAmSlotsContainer()}
                {this.state.isPmSelected && this.renderPmSlotsContainer()}
                {this.renderButtonsContainer()}
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
        saveServiceOrder: (data, successCallBack, failureCallBack) => dispatch(homeActions.saveServiceOrder(data, successCallBack, failureCallBack)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectDateAndTime)
