import { StyleSheet, Dimensions, Platform } from 'react-native';
import COLOR_CONST from '../../../app/theme/ColorConstants';
import scale , {verticalScale} from '../../utils/Scale';

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
        marginTop: verticalScale(60),
        paddingHorizontal: scale(20)
    },

    goodMorningText: {
        fontSize: scale(20),
        fontWeight: '800',
        opacity: 0.7
    },

    headerCartIcon: {
        height: scale(20),
        width: scale(20)
    },

    searchAndCurrent: {
        justifyContent: 'center',
        marginTop: verticalScale(30),
        paddingHorizontal: scale(20)
    },

    deleveringText: {
        fontSize: scale(11),
        fontWeight: '500',
        opacity: 0.3
    },

    currentLocationView: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: verticalScale(5),
        opacity: 0.5
    },

    currentLocation: {
        fontSize: scale(14),
        fontWeight: '700',
    },

    currentLocationDownArrow: {
        height: scale(25),
        width: scale(25),
        marginLeft: scale(40)
    },

    searchView: {
        height: scale(50),
        width: scale(350),
        borderRadius: scale(20),
        backgroundColor: COLOR_CONST.searchBtnBg,
        paddingHorizontal: scale(20),
        marginTop: verticalScale(30),
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
        // opacity: 0.3
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
        shadowOffset: {width: 1, height: 7}
    },

    categoryImage: {
        height: scale(35),
        width: scale(35),
    },

    categoriesName: {
        fontSize: scale(14),
        fontWeight: '600',
        opacity: 0.8,
        marginTop: verticalScale(5),
    },

});