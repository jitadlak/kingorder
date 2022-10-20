import { StyleSheet, Dimensions, Platform } from 'react-native';
import COLOR_CONST from '../../../app/theme/ColorConstants';
import scale, { verticalScale } from '../../utils/Scale';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        // height: scale(1000),
        width: scale(375)
    },

    headerContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: verticalScale(50),
        paddingHorizontal: scale(10),
        borderBottomWidth: 5,
        borderStyle: 'dotted',
        // zIndex: 0,
        borderColor: '#000'
    },

    backIcon: {
        height: scale(20),
        width: scale(20),
        margin: scale(5)
    },

    paramIcon: {
        height: scale(30),
        width: scale(30),
        marginRight: scale(10)
    },

    mainText: {
        fontSize: scale(20),
        fontWeight: '500',
        opacity: 0.9,
    },

    showCardView: {
        marginTop: verticalScale(30),
        alignSelf: 'center',
        width: scale(340),
        paddingHorizontal: scale(20),
        paddingVertical: scale(25),
        backgroundColor: COLOR_CONST.btnBgColor,
        borderRadius: scale(15),
    },

    showCardImage: {
        height: scale(20),
        width: scale(40),
        // marginTop: verticalScale(20)
    },

    showCardNoText: {
        fontSize: scale(16),
        fontWeight: '800',
        color: '#ffffff',
        marginTop: verticalScale(25),
        marginBottom: verticalScale(15)
    },

    cardHeading: {
        fontSize: scale(14),
        fontWeight: '600',
        marginTop: verticalScale(20),
        // marginLeft: scale(15),
        color: '#00000060'
    },

    showCardText: {
        fontSize: scale(16),
        fontWeight: '600',
        color: '#ffffff',
        marginTop: verticalScale(5)
    },

    showCardCvv: {
        height: scale(6),
        width: scale(6),
        backgroundColor: '#ffffff',
        marginHorizontal: scale(0.9),
        borderRadius: scale(5)
    },

    showCardRupees: {
        marginTop: verticalScale(15),
        alignSelf: 'center',
        width: scale(340),
        paddingHorizontal: scale(15),
        paddingBottom: scale(30),
        backgroundColor: '#f5f6fb',
        borderRadius: scale(5),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    rupeesText: {
        fontSize: scale(16),
        fontWeight: '600',
        color: '#000000',
        marginTop: verticalScale(5),
        alignSelf: 'center'
    },

    boldRupeesText: {
        fontSize: scale(20),
        fontWeight: '600',
        color: '#000000',
        // marginTop: verticalScale(5),
        alignSelf: 'center'
    },

    cardHolderView: {
        marginTop: verticalScale(15),
        alignSelf: 'center',
        width: scale(340),
        paddingHorizontal: scale(20),
        paddingBottom: scale(30),
        backgroundColor: '#f5f6fb',
        borderRadius: scale(5),
    },

    cardHolderImage: {
        height: scale(15),
        width: scale(15),
        marginTop: verticalScale(5),
        marginRight: scale(5)
    },

    cardNoText: {
        fontSize: scale(16),
        marginTop: verticalScale(5),
        color: '#000000', 
        fontWeight: '600',
    },

    cardHolderText: {
        fontSize: scale(16),
        fontWeight: '600',
        color: '#000000',
        marginTop: verticalScale(5)
    },

    transactionText: {
        fontSize: scale(18),
        fontWeight: '700',
        color: COLOR_CONST.black,
        marginTop: verticalScale(30),
        marginLeft: scale(15)
    },

    transactionView: {
        height: scale(80),
        width: scale(330),
        borderRadius: scale(15),
        backgroundColor: '#fefefe',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: scale(10),
        marginTop: verticalScale(10),
        alignSelf: 'center',
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        shadowRadius: 3,
        shadowOffset: { width: 1, height: 7 }
    },

    transactionNameBg: {
        height: scale(70),
        width: scale(70),
        backgroundColor: '#e4e9fa',
        borderRadius: scale(10),
        justifyContent: 'center',
        alignItems: 'center'
    },

    firstLetter: {
        fontSize: scale(40),
        fontWeight: '700',
        color: '#000000',
        opacity: 0.6
    },

    transactTo: {
        fontSize: scale(16),
        fontWeight: '700',
        marginLeft: scale(10),
        // lineHeight: scale(15)
    },

    transactFor: {
        fontSize: scale(14),
        fontWeight: '600',
        marginLeft: scale(10),
        width: scale(100),
        opacity: 0.8,
        marginTop: verticalScale(15),
    },

    paymentConfirmed: {
        height: scale(100),
        width: scale(100),
        marginTop: verticalScale(150),
        alignSelf: 'center'
    },

    successMessage: {
        fontSize: scale(18),
        fontWeight: '600',
        textAlign: 'center',
        marginTop: verticalScale(30),
        lineHeight: scale(25)
    },

    continueText: {
        fontSize: scale(20),
        fontWeight: '700',
        color: '#4d8fe4',
        textDecorationColor: '#4d8fe4',
        textDecorationLine: 'underline',
        alignSelf: 'center',
        marginTop: verticalScale(50)
    },

    confirmButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: scale(50),
        width: scale(350),
        backgroundColor: COLOR_CONST.btnBgColor,
        alignSelf: 'center',
        marginTop: verticalScale(30),
        marginBottom: verticalScale(20),
        borderRadius: scale(5),
        // position: 'absolute',
        // bottom: 5
    },

    confirmText: {
        fontSize: scale(16),
        fontWeight: '800',
        color: COLOR_CONST.white
    },
})