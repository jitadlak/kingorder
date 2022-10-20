import { StyleSheet, Dimensions, Platform } from 'react-native';
import COLOR_CONST from '../../theme/ColorConstants';
import scale, { verticalScale } from '../../utils/Scale';

export default StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#464646',
        // height: scale(800),
        // width: scale(375)
    },

    headerContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: verticalScale(50),
        paddingHorizontal: scale(10),
        borderBottomWidth: 5,
        borderStyle: 'dotted',
        // zIndex: 0,
        borderColor: '#000',
                backgroundColor: COLOR_CONST.btnBgColor
    },

    backIcon: {
        height: scale(20),
        width: scale(20),
        margin: scale(10)
    },

    mainText: {
        fontSize: scale(20),
        fontWeight: '700',
        opacity: 0.8
    },

    bellIcon: {
        height: scale(25),
        width: scale(20)
    },

    categoriesCell: {
        marginHorizontal: scale(10),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: verticalScale(20)
    },

    cellView: {
        justifyContent: 'center',
        alignItems: 'center',
        height: scale(90),
        width: scale(90),
        borderRadius: scale(50),
        // shadowColor: '#000000',
        // shadowOpacity: 0.1,
        // shadowRadius: 6,
        // shadowOffset: { width: 1, height: 7 }
    },

    categoryImage: {
        height: scale(45),
        width: scale(45),
        opacity: 0.7,
        // shadowColor: '#000000',
        // shadowOpacity: 0.1,
        // shadowRadius: 3,
        // shadowOffset: { width: 1, height: 3 }
    },

    categoriesName: {
        fontSize: scale(12),
        fontWeight: '500',
        // opacity: 0.9,
        marginTop: verticalScale(15),
        width: scale(108),
        alignSelf: 'center',
        textAlign: 'center'
    },

})