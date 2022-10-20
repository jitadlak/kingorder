import { StyleSheet, Dimensions, Platform } from 'react-native';
import scale, { verticalScale } from '../../utils/Scale';
import COLOR_CONST from '../../theme/ColorConstants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR_CONST.white,
    },

    imageBackground: {
        flex: 1,
        alignSelf: 'center',
        height: scale(100),
        width: scale(375),
        marginBottom: verticalScale(500)
    },

    logoCOntainer: {
        // flex: 2,
        height: scale(450),
        width: scale(375),
        // backgroundColor: COLOR_CONST.btnBgColor,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },

    ROW: {
        justifyContent: 'space-between',
        alignItems: 'center',
        // alignSelf: 'center',
        flexDirection: 'row',
        paddingHorizontal: scale(20),
        marginTop: verticalScale(45)
    },

    backIcon: {
        height: scale(15),
        width: scale(10),
        margin: scale(5)
    },

    phoneText: {
        fontSize: scale(16),
        fontWeight: '800',
        color: COLOR_CONST.white,
        alignSelf: 'center',
        width: scale(240)
    },

    downArrow: {
        height: scale(20),
        width: scale(20),
        alignSelf: 'center',
    },

    codeText: {
        marginLeft: scale(15),
    },
    
    otpInputView: {
        // flex: 2,
        height: scale(800),
        width: scale(375),
        backgroundColor: COLOR_CONST.white,
        borderTopEndRadius: scale(5),
        borderTopStartRadius: scale(5),
        position: 'absolute',
        top: 100,
        // bottom: 0,
        // marginTop: verticalScale(10),
        alignSelf: 'center'
    },

    textInputView: {
        // flex: 2,
        height: scale(800),
        width: scale(375),
        backgroundColor: COLOR_CONST.white,
        borderTopEndRadius: scale(5),
        borderTopStartRadius: scale(5),
        position: 'absolute',
        top: 100,
        // bottom: 0,
        // marginTop: verticalScale(10),
        alignSelf: 'center'
    },

    inputView: {
        width: scale(80),
        height: scale(60),
        borderWidth: scale(1),
        borderRadius: scale(5),
        marginHorizontal: scale(4),
        marginTop: verticalScale(24),
        borderColor: '#00000040',
        justifyContent: 'center',
        alignItems: 'center',
    },

    colorBorderView: {
        width: scale(78),
        height: scale(58),
        borderWidth: scale(1),
        borderRadius: scale(5),
        borderColor: '#77a4ba'
    },

    input: {
        width: scale(78),
        height: scale(58),
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: scale(16),
        color: '#00000090',
    },

    resendBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: verticalScale(130)
    },

    resendIcon: {
        width: scale(5),
        height: scale(5),
    },

    resendText: {
        fontWeight: 'bold',
        fontSize: scale(16),
        color: '#00000040',
        marginLeft: scale(15)
    },

    phoneNumberText: {
        fontSize: scale(18),
        color: COLOR_CONST.black,
        fontWeight: '400',
        marginLeft: scale(15),
        marginTop: verticalScale(30)
    },

    resetCodeText: {
        fontSize: scale(14),
        color: "#00000090",
        // opacity: 0.6,
        fontWeight: '600',
        marginLeft: scale(15),
        marginTop: verticalScale(15),
        // width: scale(290)
    },

    highlightNo: {
        fontSize: scale(14),
        color: "#2478bf",
        // fontWeight: '500',
        marginLeft: scale(15),
        marginTop: verticalScale(15),
        // width: scale(290)
    },

    codeView: {
        height: scale(50),
        width: scale(350),
        borderRadius: scale(5),
        borderWidth: scale(1),
        borderColor: "#00000040",
        // justifyContent: 'center',
        alignItems: 'center',
        marginTop: verticalScale(30),
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    phoneView: {
        height: scale(50),
        width: scale(280),
        borderTopStartRadius: scale(0),
        borderBottomStartRadius: scale(0),
        borderTopEndRadius: scale(5),
        borderBottomEndRadius: scale(5),
        borderWidth: scale(1.5),
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: verticalScale(30),
    },

    passView: {
        height: scale(50),
        width: scale(350),
        borderRadius: scale(5),
        borderWidth: scale(1),
        borderColor: "#00000040",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: verticalScale(10),
        alignSelf: 'center',
        flexDirection: 'row'
    },

    errorView: {
        height: scale(15),
        width: scale(15),
        borderRadius: scale(15),
        marginRight: scale(10),
        backgroundColor: 'red',
        alignSelf: 'center'
    },

    textInput: {
        fontSize: scale(14),
        color: "#000000",
        fontWeight: '400',
        marginLeft: scale(10),
        width: scale(270),
        marginLeft: scale(40)
    },

    sendCodeBtn: {
        height: scale(50),
        width: scale(350),
        marginTop: verticalScale(10),
        top: 230,
        position: 'absolute',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scale(4),
        backgroundColor: COLOR_CONST.btnBgColor,
        borderColor: COLOR_CONST.loginBtnOuterColor
    },

    confirmCodeBtn: {
        height: scale(50),
        width: scale(350),
        marginTop: verticalScale(40),
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scale(4),
        backgroundColor: COLOR_CONST.btnBgColor,
        borderColor: COLOR_CONST.loginBtnOuterColor
    },

    sendCodeText: {
        fontSize: scale(16),
        color: COLOR_CONST.white,
        fontWeight: '500'
    },
});