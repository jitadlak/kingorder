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

    productImageHeader: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: scale(10),
        height: scale(80),
        width: scale(375),
        backgroundColor: COLOR_CONST.btnBgColor,
        borderBottomLeftRadius: scale(10),
        borderBottomRightRadius: scale(10),
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
        height: scale(25),
        width: scale(25)
    },

    searchView: {
        height: scale(50),
        width: scale(340),
        borderRadius: scale(30),
        backgroundColor: '#00000010',
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

    restaurantCell: {
        marginHorizontal: scale(10),
        justifyContent: 'center',
        // height: scale(200),
        width: scale(330),
        // marginLeft: scale(25),
        backgroundColor: COLOR_CONST.white,
        borderRadius: scale(5),
        borderTopLeftRadius: scale(10),
        borderTopRightRadius: scale(10),
        paddingBottom: verticalScale(15),
        marginTop: verticalScale(15),
        alignSelf: 'center'
    },

    statusView: {
        justifyContent: 'center',
        height: scale(25),
        width: scale(55),
        borderRadius: scale(5),
        backgroundColor: '#fff',
        alignItems: 'center',
        marginLeft: scale(15)
    },

    statusText: {
        fontSize: scale(10),
        fontWeight: '500',
        // opacity: 0.3,
        textTransform: 'uppercase'
    },

    ratingsView: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginRight: scale(15),
        height: scale(20),
        width: scale(45),
        borderRadius: scale(15),
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingHorizontal: scale(7)
    },

    restaurantImage: {
        height: scale(170),
        width: '100%',
        borderTopLeftRadius: scale(10),
        borderTopRightRadius: scale(10),
        alignSelf: 'center'
    },

    dealsName: {
        fontSize: scale(16),
        fontWeight: '500',
        color: "#000000",
        width: scale(110)
    },

    cuisineView: {
        height: scale(17),
        width: scale(50),
        backgroundColor: '#00000090',
        borderRadius: scale(20),
        justifyContent: 'center',
        alignItems: 'center'
    },

    cuisineText: {
        fontSize: scale(10),
        fontWeight: '800',
        color: "#fff",
        alignSelf: 'center'
    },

    distanceView: {
        height: scale(17),
        width: scale(45),
        backgroundColor: COLOR_CONST.btnBgColor,
        borderRadius: scale(20),
        justifyContent: 'center',
        alignItems: 'center'
    },

    distanceText: {
        fontSize: scale(10),
        fontWeight: '700',
        color: "#fff",
        alignSelf: 'center'
    },

    profile: {
        height: scale(20),
        width: scale(20),
    },

    starIcon: {
        height: scale(12),
        width: scale(12),
    },

    ratingsText: {
        fontSize: scale(10),
        fontWeight: '400',
        opacity: 0.7,
        color: "#000000"
    },

    piece: {
        fontSize: scale(10),
        fontWeight: '700',
        opacity: 0.7,
        marginTop: verticalScale(5),
        color: '#000000'
    },

    min: {
        fontSize: scale(11),
        fontWeight: '600',
        opacity: 0.5,
        color: '#000000'
    },

    emptyListText: {
        fontSize: scale(15),
        fontWeight: '500',
        color: COLOR_CONST.black,
        opacity: 0.4,
        textAlign: 'center',
        marginTop: verticalScale(20)
    },
})