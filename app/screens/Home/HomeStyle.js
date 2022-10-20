import { StyleSheet, Dimensions, Platform } from 'react-native';
import COLOR_CONST from '../../../app/theme/ColorConstants';
import scale, { verticalScale } from '../../utils/Scale';

export default StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#464646',
        height: scale(800),
        width: scale(375)
    },

    headerView: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: verticalScale(20),
        paddingHorizontal: scale(20)
    },

    menuIcon: {
        height: scale(20),
        width: scale(20)
    },

    goodMorningText: {
        fontSize: scale(20),
        fontWeight: '700',
        opacity: 0.8
    },

    headerCartIcon: {
        height: scale(25),
        width: scale(25)
    },

    searchAndCurrent: {
        justifyContent: 'center',
        marginTop: verticalScale(30),
    },

    deleveringText: {
        fontSize: scale(11),
        fontWeight: '500',
        opacity: 0.3,
        marginLeft: scale(20)
    },

    currentLocationView: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: verticalScale(5),
        // opacity: 0.5,
        marginLeft: scale(20)
    },

    currentLocation: {
        fontSize: scale(14),
        fontWeight: '700',
    },

    currentLocationDownArrow: {
        height: scale(25),
        width: scale(200),
    },

    map: {
        height: scale(25),
        width: scale(350),
        alignSelf: 'center',
        marginTop: verticalScale(5),
    },

    searchView: {
        height: scale(45),
        width: scale(300),
        borderRadius: scale(25),
        backgroundColor: COLOR_CONST.searchBtnBg,
        paddingHorizontal: scale(20),
        marginTop: verticalScale(25),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    searchIcon: {
        height: scale(20),
        width: scale(20),
    },

    searchTextInput: {
        width: scale(280),
        fontSize: scale(12),
        fontWeight: '400',
        marginLeft: scale(10),
        // opacity: 0.3
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

    userIcon: {
        height: scale(25),
        width: scale(25),
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
        marginTop: verticalScale(30),
        paddingHorizontal: scale(20)
    },

    categoryText: {
        fontSize: scale(20),
        fontWeight: '700',
        opacity: 0.6
    },

    viewAllText: {
        fontSize: scale(12),
        fontWeight: '700',
        marginTop: verticalScale(10),
        color: COLOR_CONST.btnBgColor
    },

    categoriesCell: {
        marginHorizontal: scale(16),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: verticalScale(30)
    },

    cellView: {
        justifyContent: 'center',
        alignItems: 'center',
        height: scale(90),
        width: scale(90),
        borderRadius: scale(50),
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        shadowRadius: 3,
        shadowOffset: { width: 1, height: 7 }
    },

    categoryImage: {
        height: scale(90),
        width: scale(90),
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        shadowRadius: 3,
        shadowOffset: { width: 1, height: 3 }
    },

    categoriesName: {
        fontSize: scale(14),
        fontWeight: '700',
        opacity: 0.8,
        marginTop: verticalScale(5),
    },

    orderView: {
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: verticalScale(80),
        paddingHorizontal: scale(10),
        height: scale(50),
        width: scale(350),
        borderWidth: scale(1),
        borderRadius: scale(25),
        borderColor: '#00000040'
    },

    orderText: {
        fontSize: scale(14),
        fontWeight: '700',
        opacity: 0.6,
        marginLeft: scale(20),
    },

    nextImage: {
        height: scale(25),
        width: scale(25),
    },

    offerCellView: {
        alignSelf: 'center',
        // alignItems: 'center',
        // justifyContent: 'center',
        marginTop: verticalScale(30),
        height: scale(280),
        width: scale(350),
        borderWidth: scale(0.1),
        borderRadius: scale(25),
        borderColor: '#00000040',
        backgroundColor: "#ffffff90",
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        shadowRadius: 3,
        shadowOffset: { width: 1, height: 3 },
        paddingBottom: verticalScale(50)
    },

    offerHeading: {
        fontSize: scale(14),
        fontWeight: '700',
        opacity: 0.6,
    },

    offerSubheading: {
        fontSize: scale(14),
        opacity: 0.4,
        marginTop: verticalScale(10),
    },

    offerImage: {
        height: scale(200),
        width: scale(350),
        borderTopRightRadius: scale(25),
        borderTopLeftRadius: scale(25),
        // borderRadius: scale(25),
    },

});