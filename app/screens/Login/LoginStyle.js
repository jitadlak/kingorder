import { StyleSheet, Dimensions, Platform } from 'react-native';
import scale, { verticalScale } from '../../utils/Scale';
import COLOR_CONST from '../../theme/ColorConstants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
        backgroundColor: '#1e2493',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },

    appLogo: {
        alignSelf: 'center',
        // height: scale(300),
        width: scale(150)
    },

    appText: {
        alignSelf: 'center',
        // height: scale(50),
        width: scale(200)
    },

    textInputView: {
        // flex: 2,
        // height: scale(435),
        width: scale(375),
        backgroundColor: COLOR_CONST.white,
        borderTopEndRadius: scale(10),
        borderTopStartRadius: scale(10),
        position: 'absolute',
        top: 400,
        // bottom: 0,
        marginTop: verticalScale(10),
        alignSelf: 'center'
    },

    nameView: {
        height: scale(50),
        width: scale(350),
        borderRadius: scale(5),
        borderWidth: scale(1),
        borderColor: "#00000040",
        // justifyContent: 'center',
        alignItems: 'center',
        marginTop: verticalScale(10),
        alignSelf: 'center',
        flexDirection: 'row'
    },

    emailView: {
        height: scale(50),
        width: scale(350),
        borderRadius: scale(5),
        borderWidth: scale(1),
        borderColor: "#00000040",
        // justifyContent: 'center',
        alignItems: 'center',
        marginTop: verticalScale(10),
        alignSelf: 'center',
        flexDirection: 'row'
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

    userIcon: {
        height: scale(17),
        width: scale(17),
        marginLeft: scale(20),
        // alignSelf: 'center'
    },

    mailIcon: {
        height: scale(17),
        width: scale(17),
        marginLeft: scale(20),
        // alignSelf: 'center'
    },

    lockIcon: {
        height: scale(20),
        width: scale(20),
        marginLeft: scale(20),
        // alignSelf: 'center'
    },

    eyeIcon: {
        height: scale(20),
        width: scale(20),
        marginRight: scale(10),
        // alignSelf: 'center',
        opacity: 0.6
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
        color: COLOR_CONST.black,
        fontWeight: '500',
        marginLeft: scale(10),
        width: scale(270)
    },

    textInput1: {
        fontSize: scale(14),
        color: COLOR_CONST.black,
        fontWeight: '500',
        marginLeft: scale(10),
        width: scale(200)
    },

    logintBtn: {
        height: scale(50),
        width: scale(350),
        marginTop: verticalScale(10),
        // bottom: 60,
        // position: 'absolute',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scale(4),
        backgroundColor: COLOR_CONST.btnBgColor,
        borderColor: COLOR_CONST.loginBtnOuterColor
    },

    loginBtnText: {
        fontSize: scale(14),
        color: COLOR_CONST.white,
        fontWeight: '500'
    },

    haveAccountLink: {
        fontSize: scale(14),
        marginTop: verticalScale(20),
        // bottom: 30,
        // position: 'absolute',
        color: COLOR_CONST.black,
        alignSelf: 'center',
        fontWeight: '500',
        textDecorationLine: 'underline'
    },
});