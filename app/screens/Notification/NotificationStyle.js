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
        width: scale(20)
    },
    
    dayViewHeight: {
        marginTop: scale(15),
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    
    dayText: {
        fontSize: scale(15),
        fontWeight: '500',
        marginLeft: scale(15),
        color: COLOR_CONST.black,
        opacity: 0.6
    },

    clearText: {
        fontSize: scale(12),
        fontWeight: '500',
        color: COLOR_CONST.black,
        opacity: 0.5,
        marginRight: scale(12)
    },

    notificationCell: {
        width: scale(350),
        backgroundColor: '#fff',
        paddingVertical: scale(15),
        paddingHorizontal: scale(20),
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        shadowRadius: 3,
        shadowOffset: {width: 1, height: 3},
        marginTop: verticalScale(10),
        borderRadius: scale(5),
        alignSelf: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        // alignItems: 'center'
    },

    notificationListIcon: {
        height: scale(25),
        width: scale(25),
        alignSelf: 'center',
        borderRadius: scale(10),
        // marginLeft: scale(15)
    },

    headingText: {
        fontSize: scale(16),
        fontWeight: '500',
        color: COLOR_CONST.black,
        opacity: 0.8
    },

    minText: {
        fontSize: scale(11),
        fontWeight: '600',
        // marginLeft: scale(15),
        color: COLOR_CONST.btnBgColor,
        // marginRight: scale(15)
    },

    subHeadingText: {
        fontSize: scale(14),
        fontWeight: '500',
        color: '#00000080',
        marginTop: verticalScale(10),
        // width: scale(290),
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