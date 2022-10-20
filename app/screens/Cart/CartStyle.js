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
    
    searchView: {
        height: scale(50),
        width: scale(340),
        borderRadius: scale(30),
        backgroundColor: COLOR_CONST.searchBtnBg,
        paddingHorizontal: scale(20),
        marginTop: verticalScale(20),
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center'
    },

    searchIcon: {
        height: scale(20),
        width: scale(20),
    },

    searchTextInput: {
        fontSize: scale(13),
        fontWeight: '400',
        marginLeft: scale(10)
        // opacity: 0.3
    },

    listedItem: {
        height: scale(40),
        width: scale(350),
        paddingTop: scale(20),
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    
    listedItems: {
        fontSize: scale(18),
        fontWeight: '500',
        marginLeft: scale(10),
        color: COLOR_CONST.btnBgColor,
        // opacity: 0.3
    },

    totalPrice: {
        fontSize: scale(18),
        fontWeight: '500',
        color: COLOR_CONST.btnBgColor,
        // opacity: 0.3
    },

    productCell: {
        // height: scale(100),
        width: scale(350),
        backgroundColor: '#fff',
        padding: scale(10),
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        shadowRadius: 3,
        shadowOffset: {width: 1, height: 7},
        marginTop: verticalScale(10),
        borderRadius: scale(10),
        alignSelf: 'center',
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    weightView: {
        height: scale(20),
        width: scale(50),
        backgroundColor: '#00000020',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scale(2),
        marginTop: verticalScale(10),
    },

    productWeight: {
        fontSize: scale(10),
        fontWeight: '500',
    },

    productFav: {
        height: scale(17),
        width: scale(17),
    },

    productImage: {
        height: scale(90),
        width: scale(150),
        alignSelf: 'center',
        borderRadius: scale(10),
    },

    productName: {
        fontSize: scale(14),
        fontWeight: '500',
        color: '#00000090',
    },

    productPice: {
        fontSize: scale(14),
        fontWeight: '400',
        marginTop: verticalScale(5),
    },

    productCart: {
        height: scale(15),
        width: scale(15),
    },

    emptyListText: {
        fontSize: scale(15),
        fontWeight: '500',
        color: COLOR_CONST.black,
        opacity: 0.4,
        textAlign: 'center',
        marginTop: verticalScale(20)
    },

    emailView: {
        height: scale(59),
        width: scale(350),
        borderRadius: scale(30),
        borderWidth: scale(0.5),
        borderColor: COLOR_CONST.btnBgColor,
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: verticalScale(20)
    },

    textInput: {
        fontSize: scale(15),
        color: COLOR_CONST.headingColor,
        marginLeft: scale(27),
        width: scale(280),
    },

    greenChecked: {
        height: scale(20.68),
        width: scale(20.68),
        marginRight: scale(20)
    },

    divider: {
        height: scale(1),
        width: scale(330),
        backgroundColor: '#00000020',
        marginTop: verticalScale(10),
        // marginBottom: verticalScale(10)
    },

    buyNow: {
        backgroundColor: COLOR_CONST.btnBgColor,
        height: scale(40),
        width: scale(130),
        borderRadius: scale(7),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: verticalScale(15)
    },

    buyNowText: {
        fontSize: scale(14),
        fontWeight: '800',
        color: '#fff'
    },

    addTOText: {
        fontSize: scale(13),
        fontWeight: '600',
        color: COLOR_CONST.btnBgColor,
        alignSelf: 'center',
    },
    
    addToCart: {
        height: scale(40),
        width: scale(130),
        fontWeight: '600',
        // color: COLOR_CONST.btnBgColor,
        marginTop: verticalScale(15),
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom: verticalScale(50)
    },

    checkoutBtn: {
        backgroundColor: COLOR_CONST.btnBgColor,
        height: scale(59),
        width: scale(350),
        borderRadius: scale(30),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: verticalScale(50)
    },
})