import { StyleSheet, Dimensions, Platform } from 'react-native';
import scale, { verticalScale } from '../../utils/Scale';
import COLOR_CONST from '../../theme/ColorConstants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff90',
    },

    imageBackground: {
        flex: 1,
        alignSelf: 'center',
        height: scale(100),
        width: scale(375),
        marginBottom: verticalScale(500)
    },

    headerContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: scale(10),
        height: scale(80),
        width: scale(375),
        backgroundColor: COLOR_CONST.btnBgColor
    },
    
    backIcon: {
        height: scale(15),
        width: scale(10),
        margin: scale(10)
    },

    mainText: {
        fontSize: scale(20),
        fontWeight: '700',
        // opacity: 0.8,
        color: '#fff',
        marginLeft: scale(10)
    },

    bellIcon: {
        height: scale(25),
        width: scale(25)
    },

    inputStyle: {
        height: scale(55),
        width: scale(324),
        alignSelf: "center",
        borderColor: COLOR_CONST.btnBgColor,
        borderWidth: 0,
        borderRadius: 10,
        paddingHorizontal: 20,
        backgroundColor: "#fff",
        marginTop: 10,
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        shadowRadius: 3,
        shadowOffset: { width: 1, height: 7 },
    },

    submiFeedbackBtn: {
        height: scale(55),
        width: scale(324),
        marginTop: verticalScale(50),
        // bottom: 60,
        // position: 'absolute',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scale(4),
        backgroundColor: COLOR_CONST.btnBgColor,
        borderColor: COLOR_CONST.loginBtnOuterColor
    },

    submiFeedbackBtnText: {
        fontSize: scale(14),
        color: COLOR_CONST.white,
        fontWeight: '500'
    },
})