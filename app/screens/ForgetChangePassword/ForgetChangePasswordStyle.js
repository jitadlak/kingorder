import { StyleSheet, Dimensions, Platform } from 'react-native';
import scale , {verticalScale} from '../../utils/Scale';
import COLOR_CONST from '../../theme/ColorConstants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e2493',
    },

    imageBackground: {
        flex: 1,
        alignSelf: 'center',
        height: '100%',
        width: scale(375),
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

    changePassView: {
        // flex: 2,
        height: scale(800),
        width: scale(375),
        backgroundColor: COLOR_CONST.white,
        borderTopEndRadius: scale(10),
        borderTopStartRadius: scale(10),
        marginTop: verticalScale(30),
        alignSelf: 'center'
    },

    createPassText: {
        fontSize: scale(17),
        fontWeight: '500',
        opacity: 0.89,
        color: COLOR_CONST.black,
        marginLeft: scale(20),
        marginTop: verticalScale(20),
        marginBottom: verticalScale(10),
    },

    passView: {
        height: scale(60),
        width: scale(330),
        borderRadius: scale(5),
        borderWidth: scale(1.5),
        borderColor: "#00000040",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: verticalScale(10),
        alignSelf: 'center',
        flexDirection: 'row',
        paddingHorizontal: scale(20),
    },

    conPassView: {
        height: scale(60),
        width: scale(330),
        borderRadius: scale(5),
        borderColor: "#00000040",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: verticalScale(10),
        alignSelf: 'center',
        flexDirection: 'row',
        paddingHorizontal: scale(20),
    },

    eyeIcon: {
        height: scale(20),
        width: scale(20),
    },

    errorView: {
        height: scale(15),
        width: scale(15),
        borderRadius: scale(15),
        backgroundColor: 'red',
        alignSelf: 'center',
        marginLeft: scale(10)
    },

    textInput: {
        fontSize: scale(16),
        color: COLOR_CONST.black,
        opacity: 0.8,
        fontWeight: '400',
        width: scale(250),
    },

    textInput1: {
        fontSize: scale(16),
        color: COLOR_CONST.black,
        opacity: 0.8,
        fontWeight: '400',
        width: scale(250),
    },

    savePassBtn: {
        height: scale(60),
        width: scale(330),
        // marginTop: verticalScale(40),
        position: 'absolute',
        top: 450,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scale(5),
        borderColor: COLOR_CONST.loginBtnOuterColor
    },

    savePassText: {
        fontSize: scale(16),
        color: COLOR_CONST.white,
        fontWeight: '500'
    },


});