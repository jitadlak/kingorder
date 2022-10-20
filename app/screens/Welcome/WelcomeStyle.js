import { StyleSheet, Dimensions, Platform } from 'react-native';
import scale, { verticalScale } from '../../utils/Scale';
import COLOR_CONST from '../../theme/ColorConstants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1e2493",
        height: scale(800),
        width: scale(375)
    },

    imageBg: {
        flex: 1,
        alignSelf: 'center',
        height: '100%',
        width: scale(375)
    },

    ROW: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: scale(20),
        marginTop: verticalScale(45)
    },

    backIcon: {
        height: scale(15),
        width: scale(10),
        margin: scale(5)
    },

    skipView: {
        height: scale(40),
        width: scale(80),
        borderColor: COLOR_CONST.white,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scale(10),
        borderWidth: scale(0.5)
    },

    skipText: {
        fontSize: scale(16),
        fontWeight: '700',
        color: COLOR_CONST.white,
        opacity: 0.8,
    },

    phoneNumberText: {
        fontSize: scale(50),
        color: COLOR_CONST.white,
        fontWeight: '400',
    },

    kingsOrderText: {
        fontSize: scale(45),
        color: '#f16529',
        fontWeight: '700',
        marginTop: verticalScale(10)
    },

    subText: {
        fontSize: scale(23),
        color: COLOR_CONST.white,
        opacity: 0.8,
        fontWeight: '500',
        marginTop: verticalScale(50),
    },

    sendCodeBtn: {
        height: scale(50),
        width: scale(330),
        marginTop: verticalScale(10),
        bottom: 50,
        position: 'absolute',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scale(10),
        backgroundColor: "#5a66f6",
        borderColor: COLOR_CONST.loginBtnOuterColor
    },

    sendCodeText: {
        fontSize: scale(16),
        color: COLOR_CONST.white,
        fontWeight: '500'
    },
});