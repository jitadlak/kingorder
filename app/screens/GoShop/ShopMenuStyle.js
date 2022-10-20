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
        color: '#fff'
    },

    bellIcon: {
        height: scale(25),
        width: scale(20)
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

    productCell: {
        // height: scale(100),
        width: scale(170),
        backgroundColor: '#fff',
        padding: scale(10),
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        shadowRadius: 3,
        shadowOffset: {width: 1, height: 7},
        marginTop: verticalScale(10),
        marginHorizontal: scale(8),
        borderRadius: scale(10)
    },

    weightView: {
        height: scale(15),
        width: scale(30),
        backgroundColor: '#00000020',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scale(2)
    },

    productWeight: {
        fontSize: scale(10),
        fontWeight: '500',
    },

    productFav: {
        height: scale(12),
        width: scale(13),
    },

    productImage: {
        height: scale(70),
        width: scale(150),
        borderRadius: scale(50),
        alignSelf: 'center',
        marginTop: verticalScale(5),
        overflow: 'hidden'
    },

    productName: {
        fontSize: scale(12),
        fontWeight: '500',
        color: '#00000090',
        marginTop: verticalScale(5),
    },

    productPice: {
        fontSize: scale(12),
        fontWeight: '400',
        // marginTop: verticalScale(5),
    },

    productCart: {
        height: scale(15),
        width: scale(15),
    }
})