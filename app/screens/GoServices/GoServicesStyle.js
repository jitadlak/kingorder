import { StyleSheet, Dimensions, Platform } from 'react-native';
import ColorConstants from '../../theme/ColorConstants';
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
        paddingTop: verticalScale(30),
        paddingHorizontal: scale(10),
        // borderBottomWidth: 5,
        // borderStyle: 'dotted',
        // zIndex: 0,
        // borderColor: '#000',
        height: scale(130),
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
        fontWeight: '800',
        // opacity: 0.8,
        color: '#fff'
    },

    bellIcon: {
        height: scale(25),
        width: scale(20)
    },

    categoriesCell: {
        marginHorizontal: scale(16),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: verticalScale(30)
    },

    categoryImage: {
        height: scale(100),
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

    dash: {
        opacity: 0.4,
        marginTop: verticalScale(15),
        marginLeft: scale(20)
    }

})