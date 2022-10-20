import { StyleSheet, Dimensions, Platform } from 'react-native';
import COLOR_CONST from '../../../app/theme/ColorConstants';
import scale , {verticalScale} from '../../utils/Scale';

export default StyleSheet.create({
    container: {
        flex: 1, 
        // backgroundColor: '#ffffff',
        height: scale(800),
        width: scale(375)
    },

    headerView: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: verticalScale(40),
        paddingHorizontal: scale(20)
    },

    menuIcon: {
        height: scale(20),
        width: scale(20)
    },

    goodMorningText: {
        fontSize: scale(20),
        fontWeight: '700',
        opacity: 0.9
    },

    headerCartIcon: {
        height: scale(25),
        width: scale(25)
    },
    
    userIconView: {
        height: scale(40),
        width: scale(40),
        borderRadius: scale(25),
        backgroundColor: COLOR_CONST.btnBgColor,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: scale(10),
        alignSelf: 'center',
        marginTop: verticalScale(30),
    },

    profile: {
        height: scale(20),
        width: scale(20),
        // backgroundColor: '#00000090',
        // borderRadius: scale(50),
        // justifyContent: 'center',
        // alignItems: 'center',
        // alignSelf: 'center'
    },
    
    searchView: {
        height: scale(50),
        width: scale(340),
        borderRadius: scale(30),
        backgroundColor: COLOR_CONST.searchBtnBg,
        paddingHorizontal: scale(20),
        marginTop: verticalScale(30),
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center'
    },

    searchIcon: {
        height: scale(20),
        width: scale(20),
    },

    addressView: {
        paddingHorizontal: scale(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: verticalScale(20)
    },

    adressView: {
        height: scale(60),
        width: scale(160),
        borderRadius: scale(15),
        borderWidth: scale(0.3),
        borderColor: '#00000020',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: scale(5)
    },

    mapImage: {
        height: scale(50),
        width: scale(50),
        backgroundColor: '#00000020',
        borderRadius: scale(10),
    },

    adressName: {
        fontSize: scale(12),
        fontWeight: '600',
        marginLeft: scale(10),
        lineHeight: scale(15)
    },

    adress: {
        fontSize: scale(10),
        fontWeight: '600',
        marginLeft: scale(10),
        width: scale(100),
        opacity: 0.8,
        lineHeight: scale(13)
    },

    searchTextInput: {
        fontSize: scale(13),
        fontWeight: '400',
        marginLeft: scale(10)
        // opacity: 0.3
    },
    
    pagination: {
        position: 'absolute',
        bottom: verticalScale(10),
        left: 0,
        right: 0,
        flexDirection: 'row',
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },

    activeDot: {
        backgroundColor: "#f2f2f2", 
        width: scale(9), 
        height: scale(9),
		borderRadius: scale(5),
		marginHorizontal: scale(3),
    },

    inActiveDot: {
        backgroundColor: "#ffffff90", 
        width: scale(9), 
        height: scale(9),
        borderRadius: scale(5), 
		marginHorizontal: scale(3),
		// opacity: 0.3,
    },

    wt1: {
        height: scale(160),
        width: scale(370),
        alignSelf: 'center'
    },

    wt2: {
        height: scale(160),
        width: scale(370),
        alignSelf: 'center'
    },

    wt3: {
        height: scale(160),
        width: scale(370),
        alignSelf: 'center',
    },

    wt4: {
        height: scale(160),
        width: scale(370),
        alignSelf: 'center',
    },

    wt5: {
        height: scale(160),
        width: scale(370),
        alignSelf: 'center',
    },

    wt6: {
        height: scale(160),
        width: scale(370),
        alignSelf: 'center',
    },
    
    categoriesView: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: verticalScale(20),
        paddingHorizontal: scale(20)
    },

    categoryText: {
        fontSize: scale(14),
        fontWeight: '700',
        opacity: 0.8
    },

    viewAllText: {
        fontSize: scale(10),
        fontWeight: '600',
        marginTop: verticalScale(10),
        color: "#00000090"
    },

    categoriesCell: {
        marginHorizontal: scale(15),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: verticalScale(20)
    },

    cellView: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scale(15),
        // shadowColor: '#000000',
        // shadowOpacity: 0.1,
        // shadowRadius: 3,
        // shadowOffset: {width: 1, height: 7}
    },

    categoryImage: {
        height: scale(60),
        width: scale(60),
        borderRadius: scale(10)
    },

    categoriesName: {
        fontSize: scale(12),
        fontWeight: '500',
        opacity: 0.9,
        marginTop: verticalScale(10),
        color: "#000000"
    },

    dealsView: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: verticalScale(30),
        paddingHorizontal: scale(20)
    },

    dealsText: {
        fontSize: scale(14),
        fontWeight: '700',
        opacity: 0.8
    },

    dealsCell: {
        marginHorizontal: scale(10),
        justifyContent: 'center',
        alignItems: 'center',
        height: scale(100),
        width: scale(250),
        marginTop: verticalScale(20),
        flexDirection: 'row',
        marginLeft: scale(25)
    },

    dealsCellView: {
        justifyContent: 'center',
        marginLeft: scale(0),
        marginTop: verticalScale(5),
        height: scale(20),
        width: scale(20),
        borderRadius: scale(10),
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        // alignItems: 'center',
        // shadowColor: '#000000',
        // shadowOpacity: 0.1,
        // shadowRadius: 3,
        // shadowOffset: {width: 1, height: 7}
    },

    dealsImage: {
        height: scale(100),
        width: scale(90),
        borderRadius: scale(10),
        marginRight: scale(10)
    },

    dealsName: {
        fontSize: scale(12),
        fontWeight: '600',
        // opacity: 0.9,
        // marginTop: verticalScale(5),
        color: "#000000"
    },

    heart: {
        height: scale(10),
        width: scale(10),
    },

    loca: {
        height: scale(10),
        width: scale(10),
    },

    piece: {
        fontSize: scale(10),
        fontWeight: '700',
        opacity: 0.7,
        marginTop: verticalScale(5),
        color: '#000000'
    },

    min: {
        fontSize: scale(10),
        fontWeight: '600',
        opacity: 0.7,
        color: '#000000'
    },

    price: {
        fontSize: scale(14),
        fontWeight: '700',
        // opacity: 0.9,
        marginTop: verticalScale(5),
        color: 'red'
    },

    currPrice: {
        fontSize: scale(14),
        fontWeight: '300',
        opacity: 0.5,
        marginTop: verticalScale(5),
        color: "#000000",
        textDecorationLine: "line-through"
    },

    offeCell: {
        height: scale(120),
        width: scale(350),
        backgroundColor: '#ffc8bf',
        borderRadius: scale(15),
        // marginTop: verticalScale(30),
        marginBottom: verticalScale(40),
        alignSelf: 'center',
        // justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },

    offeImage: {
        marginTop: verticalScale(10),
        height: scale(165),
        width: scale(130),
    },

    offeMega: {
        fontSize: scale(12),
        fontWeight: '700',
        color: 'red'
    },

    offeShopName: {
        fontSize: scale(30),
        fontWeight: '700',
        color: '#191249'
    },

    offePrice: {
        fontSize: scale(18),
        fontWeight: '700',
        marginTop: verticalScale(10),
        color: 'red'
    },

    offeCurrPrice: {
        fontSize: scale(18),
        fontWeight: '500',
        marginTop: verticalScale(10),
        color: "#ffffff",
        textDecorationLine: "line-through"
    },

    offeAvailable: {
        fontSize: scale(10),
        fontWeight: '800',
        marginTop: verticalScale(15),
        color: "#ffffff",
    },
});