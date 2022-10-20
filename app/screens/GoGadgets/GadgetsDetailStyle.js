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
        height: scale(300),
        width: '100%',
    },

    headerView: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: scale(20),
        backgroundColor: '#00000020',
        paddingTop: verticalScale(30)
    },

    backIcon: {
        height: scale(15),
        width: scale(10),
        margin: scale(5)
    },

    shareIcon: {
        height: scale(20),
        width: scale(20),
    },

    contactView: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 50,
        alignSelf: 'center',
        paddingHorizontal: scale(15),
        // paddingVertical: verticalScale(10),
        backgroundColor: '#00000030',
        borderRadius: scale(50)
    },

    divider: { 
        height: scale(50), 
        width: scale(1), 
        backgroundColor: '#fff',
        marginHorizontal: scale(10)
    },

    contactSubView: { 
        justifyContent: 'center', 
        alignItems: 'center', 
        alignSelf: 'center', 
        flexDirection: 'row' 
    },

    userIconView: {
        height: scale(30),
        width: scale(30),
        borderRadius: scale(25),
        backgroundColor: '#ffffff',
        opacity: 0.9,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: scale(10),
        alignSelf: 'center',
    },

    userIcon: {
        height: scale(15),
        width: scale(15),
    },

    number: {
        fontSize: scale(12),
        color: '#ffffff',
        fontWeight: '900',
        textAlign: 'center',
        marginLeft: scale(10)
    },

    address: {
        fontSize: scale(10),
        color: '#ffffff',
        fontWeight: '900',
        textAlign: 'center',
        marginLeft: scale(10)
    },

    dealsName: {
        fontSize: scale(18),
        fontWeight: '500',
        color: "#000000",
        width: scale(220)
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

    distanceView: {
        height: scale(17),
        width: scale(45),
        backgroundColor: COLOR_CONST.btnBgColor,
        borderRadius: scale(20),
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: scale(10)
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

    // starIcon: {
    //     height: scale(10),
    //     width: scale(10),
    // },

    // ratingsText: {
    //     fontSize: scale(8),
    //     fontWeight: '400',
    //     opacity: 0.7,
    //     color: "#000000"
    // },

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

    dropdown: {
        height: scale(15),
        width: scale(15)
    },

    statusText: {
        fontSize: scale(11),
        fontWeight: '600',
        opacity: 0.5,
        color: '#000000'
    },

    seeAllView: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: scale(20),
        marginTop: verticalScale(20)
    },

    allRestaurants: {
        fontSize: scale(18),
        fontWeight: '500',
        // marginLeft: scale(10)
        opacity: 0.6
    },

    seeAll: {
        fontSize: scale(13),
        fontWeight: '600',
        // marginRight: scale(10)
        opacity: 0.3
    },

    ratingsCellView: {
        paddingHorizontal: scale(10),
        marginBottom: verticalScale(20),
        // justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },

    ratingImage: { 
        height: scale(50), 
        width: scale(50), 
        borderRadius: scale(50) 
    },

    reviewerName: {
        fontSize: scale(18),
        fontWeight: '400',
        opacity: 0.5,
        marginLeft: scale(15), 
        width: scale(200)
    },

    review: {
        fontSize: scale(13),
        fontWeight: '600',
        opacity: 0.5,
        marginLeft: scale(15), 
        width: scale(285),
        marginTop: verticalScale(10)
    },

    categoryName: {
        fontSize: scale(13),
        fontWeight: '500',
        // opacity: 0.5,
        color: '#000',
        textAlign: 'center'
    },
})