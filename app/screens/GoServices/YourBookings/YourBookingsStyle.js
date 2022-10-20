import { StyleSheet, Dimensions, Platform } from 'react-native';
import COLOR_CONST from '../../../theme/ColorConstants';
import scale, { verticalScale } from '../../../utils/Scale';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fcfcfe',
        // height: scale(800),
        // width: scale(375),
    },

    headingText: {
        fontSize: scale(28),
        fontWeight: '700',
        color: COLOR_CONST.black,
        marginTop: verticalScale(50),
        marginLeft: scale(20)
    },

    tabView: {
        marginLeft: scale(20),
        flexDirection: 'row',
        marginTop: verticalScale(20),
        alignItems: 'center',
        justifyContent: 'space-between',
        width: scale(150)
    },

    selectedTabView: {
        height: scale(40),
        width: scale(170),
        borderRadius: scale(5),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scale(3),
        backgroundColor: COLOR_CONST.white,
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        shadowRadius: 3,
        shadowOffset: { width: 1, height: 3 }
    },

    selectedText: {
        fontSize: scale(14),
        fontWeight: '500',
    },

    deselectedTabView: {
        height: scale(40),
        width: scale(170),
        borderRadius: scale(5),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scale(3),
        backgroundColor: "#eeeef5",
    },

    pmSlot: {
        fontSize: scale(14),
        fontWeight: '500',
    },

    optionsCard: {
        marginTop: verticalScale(40),
        height: scale(450),
        width: scale(330),
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: { width: 1, height: 6 },
        backgroundColor: COLOR_CONST.btnBgColor,
        alignSelf: 'center',
        borderRadius: scale(5),
        paddingTop: verticalScale(40),
        paddingLeft: scale(30),
        marginBottom: verticalScale(50),
    },

    daysText: {
        fontSize: scale(16),
        fontWeight: '800',
        color: "#ffffff90"
    },

    serviceText: {
        fontSize: scale(22),
        fontWeight: '700',
        color: COLOR_CONST.white,
        marginTop: verticalScale(20),
        marginBottom: verticalScale(20)
    },

    icon: {
        height: scale(15),
        width: scale(15)
    },

    text: {
        fontSize: scale(16),
        fontWeight: '500',
        color: COLOR_CONST.white,
        marginLeft: scale(20)
    },

    btnView: {
        borderColor: COLOR_CONST.white,
        borderWidth: scale(1.5),
        borderRadius: scale(5),
        justifyContent: 'center',
        alignItems: 'center',
        height: scale(40),
        width: scale(150),
        marginTop: verticalScale(50)
    },

    btnText: {
        fontSize: scale(14),
        fontWeight: '800',
        color: COLOR_CONST.white
    },

    // serviceText : {

    // },

})