import { StyleSheet, Dimensions, Platform } from 'react-native';
import COLOR_CONST from '../../theme/ColorConstants';
import scale, { verticalScale } from '../../utils/Scale';

export default StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#464646',
        height: scale(800),
        width: scale(375)
    },

    headerContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: scale(10),
        height: scale(80),
        width: scale(375),
        backgroundColor: COLOR_CONST.btnBgColor,
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        shadowRadius: 3,
        shadowOffset: {width: 1, height: 7},
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
        color: '#fff'
    },

    bellIcon: {
        height: scale(15),
        width: scale(15)
    },

    productImage: {
        height: scale(170),
        width: scale(250),
        alignSelf: 'center',
        marginTop: verticalScale(30),
    },

    weightView: {
        height: scale(20),
        width: scale(40),
        backgroundColor: '#00000010',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scale(2),
        alignSelf: 'center',
        marginTop: verticalScale(20),
    },

    productWeight: {
        fontSize: scale(12),
        fontWeight: '500',
    },

    productName: {
        fontSize: scale(20),
        fontWeight: '400',
        alignSelf: 'center',
        marginTop: verticalScale(30),
    },

    productPice: {
        fontSize: scale(16),
        fontWeight: '300',
        alignSelf: 'center',
        // color: '#00000090',
        opacity: 0.9,
        marginTop: verticalScale(10),
    },

    star: {
        height: scale(20),
        width: scale(20),
        marginLeft: scale(10)
    },

    touchable: {
        backgroundColor: '#99a0af',
        height: scale(50),
        width: scale(50),
        borderRadius: scale(50),
        justifyContent: 'center',
        alignItems: 'center'
    },

    plus: {
        fontSize: scale(30),
        color: '#fff'
    },

    buyNow: {
        backgroundColor: COLOR_CONST.btnBgColor,
        height: scale(40),
        width: scale(130),
        borderRadius: scale(7),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: verticalScale(40)
    },

    buyNowText: {
        fontSize: scale(14),
        fontWeight: '800',
        color: '#fff'
    },

    addToCart: {
        fontSize: scale(14),
        fontWeight: '600',
        color: COLOR_CONST.btnBgColor,
        marginTop: verticalScale(20),
        alignSelf: 'center',
        marginBottom: verticalScale(50)
    },
})