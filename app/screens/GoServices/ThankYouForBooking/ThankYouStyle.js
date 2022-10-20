import { StyleSheet, Dimensions, Platform } from 'react-native';
import COLOR_CONST from '../../../theme/ColorConstants';
import scale, { verticalScale } from '../../../utils/Scale';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fcfcfe',
        // height: scale(800),
        // width: scale(375),
    },

    thankYouCard: {
        marginTop: verticalScale(100),
        height: scale(450),
        width: scale(350),
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: { width: 1, height: 10 },
        backgroundColor: COLOR_CONST.white,
        alignSelf: 'center',
        borderRadius: scale(5),
    },

    image: {
        height: scale(140),
        width: scale(140),
        alignSelf: 'center',
        marginTop: verticalScale(30)
    },

    headingText: {
        fontSize: scale(26),
        fontWeight: '700',
        color: COLOR_CONST.black,
        textAlign: 'center',
        marginTop: verticalScale(30)
    },

    subHeadingtext: {
        fontSize: scale(18),
        fontWeight: '400',
        color: "#00000080",
        textAlign: 'center',
        marginTop: verticalScale(20)
    },

    bookingButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: scale(50),
        width: scale(350),
        backgroundColor: COLOR_CONST.btnBgColor,
        marginRight: scale(15),
        alignSelf: 'center',
        marginTop: verticalScale(20),
        position: 'absolute',
        bottom: 0,
        borderBottomLeftRadius: scale(10),
        borderBottomRightRadius: scale(10),
    },

    bookingText: {
        fontSize: scale(15),
        fontWeight: '800',
        color: COLOR_CONST.white
    },

})