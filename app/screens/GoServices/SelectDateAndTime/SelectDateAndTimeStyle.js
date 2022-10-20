import { StyleSheet, Dimensions, Platform } from 'react-native';
import COLOR_CONST from '../../../theme/ColorConstants';
import scale, { verticalScale } from '../../../utils/Scale';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fcfcfe',
        // height: scale(800),
        // width: scale(375)
    },

    headerContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: verticalScale(30),
        paddingHorizontal: scale(10),
        height: scale(130),
        width: scale(375),
        backgroundColor: COLOR_CONST.btnBgColor
    },
    
    backIcon: {
        height: scale(15),
        width: scale(10),
        margin: scale(5)
    },

    paramIcon: {
        height: scale(30),
        width: scale(30),
        marginRight: scale(10)
    },

    mainText: {
        fontSize: scale(20),
        fontWeight: '600',
        // opacity: 0.9,
        color: '#fff'
    },

    bellIcon: {
        height: scale(25),
        width: scale(20)
    },

    monthTitleStyle: {
        fontSize: scale(18),
        fontWeight: '500',
        color: COLOR_CONST.btnBgColor
    },

    yearTitleStyle: {
        fontSize: scale(18),
        fontWeight: '500',
        color: COLOR_CONST.btnBgColor
    },

    previousTitleStyle: {
        fontSize: scale(14),
        fontWeight: '600',
        color: "#00000050"
    },

    nextTitleStyle: {
        fontSize: scale(14),
        fontWeight: '600',
        color: "#00000050"
    },

    selectedDayStyle: {
        height: scale(40),
        width: scale(40),
        backgroundColor: COLOR_CONST.btnBgColor
    },

    selectedDayTextStyle: {
        fontSize: scale(18),
        fontWeight: '700',
        color: COLOR_CONST.white
    },

    disabledDatesTextStyle: {
        fontSize: scale(16),
        fontWeight: '600',
        color: "#00000040"
    },

    todayTextStyle: {
        fontSize: scale(16),
        fontWeight: '600',
        color: "#000000"
    },

    textStyle: {
        fontSize: scale(14),
        fontWeight: '500',
        color: "#000000"
    },

    dayOfWeekStyles: {
        fontSize: scale(16),
        fontWeight: '600',
        color: "#00000050"
    },

    timeSlotView: {
        marginLeft: scale(10),
        flexDirection: 'row',
        marginTop: verticalScale(20),
        alignItems: 'center',
        justifyContent: 'space-between',
        width: scale(150)
    },

    selectedSlotView: {
        height: scale(40),
        width: scale(90),
        marginLeft: scale(10),
        borderRadius: scale(5),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scale(3),
        backgroundColor: COLOR_CONST.btnBgColor,
        // borderWidth: scale(0.7)
    },

    amSlot: {
        fontSize: scale(16),
        fontWeight: '600',
    },

    deselectedSlotView: {
        height: scale(40),
        width: scale(90),
        marginLeft: scale(10),
        borderRadius: scale(5),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scale(3),
        borderColor: COLOR_CONST.btnBgColor,
        borderWidth: scale(0.9)
    },

    pmSlot: {
        fontSize: scale(16),
        fontWeight: '600',
    },

    amSlotsCell: {
        marginTop: verticalScale(10),
        height: scale(30),
        width: scale(60),
        marginLeft: scale(10),
        borderRadius: scale(5),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scale(3),
        marginHorizontal: scale(5)
    },

    buttonView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: verticalScale(40),
        marginBottom: verticalScale(40),
        // position: 'absolute',
        // bottom: 10,
    },

    backButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: scale(50),
        width: scale(160),
        borderWidth: scale(1),
        borderRadius: scale(3),
        borderColor: COLOR_CONST.btnBgColor,
        marginLeft: scale(15)
    },

    backText: {
        fontSize: scale(18),
        fontWeight: '400',
        color: COLOR_CONST.btnBgColor
    },
    
    nextButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: scale(50),
        width: scale(160),
        borderRadius: scale(3),
        backgroundColor: COLOR_CONST.btnBgColor,
        marginRight: scale(15)
    },

    nextText: {
        fontSize: scale(18),
        fontWeight: '800',
        color: COLOR_CONST.white
    },
})