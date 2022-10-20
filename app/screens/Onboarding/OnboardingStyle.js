import { StyleSheet, Dimensions, Platform } from 'react-native';
import COLOR_CONST from '../../theme/ColorConstants';
import scale , {verticalScale} from '../../utils/Scale';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR_CONST.white
    },

    pagination: {
        position: 'absolute',
        top: verticalScale(180),
        left: 0,
        right: 0,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },

    activeDot: {
        backgroundColor: COLOR_CONST.btnBgColor, 
        width: scale(9), 
        height: scale(9),
		borderRadius: scale(5),
		marginHorizontal: scale(3),
    },

    inActiveDot: {
        backgroundColor: COLOR_CONST.swiperInactive, 
        width: scale(9), 
        height: scale(9),
        borderRadius: scale(5), 
		marginHorizontal: scale(3),
		// opacity: 0.3,
    },

    wt1: {
        height: scale(450),
        width: scale(350),
        alignSelf: 'center'
    },

    wt2: {
        height: scale(450),
        width: scale(375),
        alignSelf: 'center'
    },

    wt3: {
        height: scale(400),
        // width: scale(375),
        alignSelf: 'center',
        marginTop: verticalScale(40)
    },

    wt4: {
        height: scale(400),
        // width: scale(375),
        alignSelf: 'center',
        marginTop: verticalScale(50)
    },

    heading: {
        fontSize: scale(27),
        color: COLOR_CONST.black,
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlign: 'center',
        position: 'absolute'
    },

    subHeading: {
        fontSize: scale(16),
        color: '#00000090',
        fontWeight: '500',
        alignSelf: 'center',
        textAlign: 'center',
        position: 'absolute',
        width: scale(300)
    },

    nextBtn: {
        height: scale(50),
        width: scale(300),
        // marginVertical: verticalScale(30),
        bottom: 30,
        position: 'absolute',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scale(10),
        backgroundColor: COLOR_CONST.btnBgColor,
        borderColor: COLOR_CONST.loginBtnOuterColor
    },

    nextBtnText: {
        fontSize: scale(14),
        color: COLOR_CONST.white,
        fontWeight: 'bold'
    },

    logintBtn: {
        height: scale(50),
        width: scale(300),
        // marginTop: verticalScale(30),
        bottom: 100,
        position: 'absolute',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scale(10),
        backgroundColor: COLOR_CONST.btnBgColor,
        borderColor: COLOR_CONST.loginBtnOuterColor
    },

    loginBtnText: {
        fontSize: scale(14),
        color: COLOR_CONST.white,
        fontWeight: 'bold'
    },

    creatBtn: {
        height: scale(50),
        width: scale(300),
        marginTop: verticalScale(15),
        // marginBottom: verticalScale(30),
        bottom: 30,
        position: 'absolute',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scale(10),
        borderWidth: scale(2),
        // backgroundColor: COLOR_CONST.createBtnOuterColor,
        borderColor: COLOR_CONST.createBtnOuterColor
    },

    creatBtnText: {
        fontSize: scale(14),
        color: COLOR_CONST.btnBgColor,
        fontWeight: 'bold'
    },
});