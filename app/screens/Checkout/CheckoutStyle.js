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
        margin: scale(10)
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

    shippingView: {
        marginTop: verticalScale(30),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: scale(15),
        marginBottom: verticalScale(10)
    },

    shippingText: {
        fontSize: scale(17),
        fontWeight: '600',
    },

    addLocationText: {
        fontSize: scale(14),
        fontWeight: '600',
        textDecorationLine: 'underline',
        textDecorationColor: '#00000060'
    },

    addressView: {
        // height: scale(100),
        width: scale(340),
        marginTop: verticalScale(15),
        alignSelf: 'center',
        flexDirection: 'row',
        paddingHorizontal: scale(10),
        borderRadius: scale(5),
        backgroundColor: '#f5f6fb',
        paddingVertical: verticalScale(25)
    },

    locatnText: {
        fontSize: scale(16),
        fontWeight: '600',
        marginLeft: scale(15)
    },

    phoneNoText: {
        fontSize: scale(14),
        fontWeight: '600',
        marginTop: verticalScale(15),
        marginLeft: scale(15),
        color: '#00000060'
    },

    addressText: {
        fontSize: scale(14),
        fontWeight: '600',
        marginTop: verticalScale(15),
        marginLeft: scale(15),
        color: '#00000060'
    },

    selectText: {
        fontSize: scale(17),
        fontWeight: '600',
        marginTop: verticalScale(30),
        marginLeft: scale(15)
    },

    viewAllText: {
        fontSize: scale(12),
        fontWeight: '700',
        marginTop: verticalScale(10),
        color: COLOR_CONST.btnBgColor
    },

    cardsCell: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        // alignItems: 'center',
        marginTop: verticalScale(20),
        paddingHorizontal: scale(15)
    },

    cardsImage: {
        height: scale(20),
        width: scale(20),
    },

    cardsName: {
        fontSize: scale(17),
        fontWeight: '400',
        marginLeft: scale(15)
    },

    radiButton: {
        height: scale(20),
        width: scale(20),
    },

    confirmButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: scale(50),
        width: scale(350),
        backgroundColor: COLOR_CONST.btnBgColor,
        alignSelf: 'center',
        marginTop: verticalScale(50),
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