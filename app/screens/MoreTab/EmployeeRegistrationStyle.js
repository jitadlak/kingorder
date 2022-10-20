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
    },

    textInputView: {
        // flex: 2,
        // height: scale(310),
        width: scale(375),
        backgroundColor: COLOR_CONST.white,
        borderTopEndRadius: scale(10),
        borderTopStartRadius: scale(10),
        position: 'absolute',
        top: 100,
        // bottom: 0,
        marginTop: verticalScale(10),
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
        justifyContent: 'center'
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
        textDecorationLine: 'underline'
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