import { StyleSheet, Dimensions, Platform } from 'react-native';
import scale, { verticalScale } from '../../utils/Scale';
import COLOR_CONST, { FONTS } from '../../theme/ColorConstants';

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
    },

    logoCOntainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: verticalScale(30)
    },

    venderView: {
        height: scale(220),
        width: scale(155),
        borderWidth: 0.25,
        borderColor: COLOR_CONST.btnBgColor
    },

    venderImage: {
        height: scale(200),
        width: scale(150),
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },

    check_box: {
        height: scale(30),
        width: scale(30),
        position: 'absolute',
        bottom: -10
    },

    vendorTextInputView: {
        width: scale(375),
        backgroundColor: COLOR_CONST.white,
        borderTopEndRadius: scale(10),
        borderTopStartRadius: scale(10),
        marginTop: verticalScale(20),
        alignSelf: 'center',
        marginBottom: verticalScale(50)
    },

    vendorNameView: {
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

    vendorEmailView: {
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

    vendorUserIcon: {
        height: scale(17),
        width: scale(17),
        marginLeft: scale(20),
        // alignSelf: 'center'
    },

    vendorMailIcon: {
        height: scale(17),
        width: scale(17),
        marginLeft: scale(20),
        // alignSelf: 'center'
    },

    vendorErrorView: {
        height: scale(15),
        width: scale(15),
        borderRadius: scale(15),
        marginRight: scale(10),
        backgroundColor: 'red',
        alignSelf: 'center'
    },

    vendorTextInput: {
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

    vendorBlueCheck: {
        height: scale(15),
        width: scale(15),
        marginLeft: scale(15)
    },

    blueUncheck: {
        height: scale(15),
        width: scale(15),
        marginLeft: scale(15),
        borderRadius: scale(3),
        borderWidth: scale(0.5),
        borderColor: COLOR_CONST.subHeadingColor,
    },

    vendorRememberText: {
        fontSize: scale(13),
        lineHeight: scale(16),
        fontFamily: FONTS.MontserratRegular,
        color: 'black'
    },

    vendorLogintBtn: {
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

    vendorLoginBtnText: {
        fontSize: scale(14),
        color: COLOR_CONST.white,
        fontWeight: '500'
    },

    vendorOpenedView: {
        height: scale(100),
        width: scale(350),
        borderRadius: scale(5),
        borderWidth: scale(1),
        borderColor: "#00000040",
        // justifyContent: 'center',
        // alignItems: 'center',
        marginTop: verticalScale(10),
        alignSelf: 'center',
        // paddingTop: verticalScale(19),
        paddingLeft: scale(20)
    },

    divider: {
        height: scale(0.7),
        width: scale(300),
        backgroundColor: '#00000030',
        marginTop: verticalScale(5),
        alignSelf: 'center',
    },

    //Employee Style
    textInputView: {
        width: scale(375),
        backgroundColor: COLOR_CONST.white,
        borderTopEndRadius: scale(10),
        borderTopStartRadius: scale(10),
        marginTop: verticalScale(20),
        marginBottom: verticalScale(50),
        alignSelf: 'center',
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

    uploadImage: {
        borderRadius: scale(50),
        height: scale(35),
        width: scale(35),
        alignSelf: 'center',
    },

    currentTetx: {
        height: scale(50),
        fontSize: scale(14),
        color: '#00000090',
        fontWeight: '500',
        alignSelf: 'center',
        textAlign: 'center'
    },

    uploadView: {
        height: scale(50),
        width: scale(115),
        borderRadius: scale(5),
        borderWidth: scale(1),
        borderColor: "#00000040",
        // justifyContent: 'center',
        alignItems: 'center',
        marginTop: verticalScale(10),
        alignSelf: 'center',
        flexDirection: 'row',
        paddingHorizontal: scale(10),
        // justifyContent: 'space-between',
        justifyContent: 'center',
        overflow: 'hidden'
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

    modalContainer: {
        flex: 1,
    },

    transparentBg: {
        flex: 1,
        backgroundColor: '#3e3e3e',
        opacity: 0.55,
    },

    bottomView: {
        width: scale(360),
        height: scale(150),
        backgroundColor: '#fff'
    },

    crossIcon: {
        width: scale(24),
        height: scale(24),
        alignSelf: 'flex-end',
        marginTop: verticalScale(10),
        marginRight: scale(10),
    },

    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    leftButton: {
        alignItems: 'center',
        marginRight: scale(36),
    },

    rightButton: {
        alignItems: 'center',
        marginLeft: scale(36),
    },

    takePictureText: {
        fontSize: scale(14),
        lineHeight: scale(20),
        marginTop: verticalScale(16),
        textAlign: 'center',
        color: '#000'
    },

    cameraIcon: {
        width: scale(24),
        height: scale(24),
        marginTop: verticalScale(16),
    },

    openedView: {
        height: scale(100),
        width: scale(350),
        borderRadius: scale(5),
        borderWidth: scale(1),
        borderColor: "#00000040",
        // justifyContent: 'center',
        // alignItems: 'center',
        marginTop: verticalScale(10),
        alignSelf: 'center',
        // paddingTop: verticalScale(19),
        paddingLeft: scale(40)
    },
});