import { StyleSheet, Dimensions, Platform } from 'react-native';
import COLOR_CONST from '../../../theme/ColorConstants';
import scale, { verticalScale } from '../../../utils/Scale';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // height: scale(800),
        // width: scale(375)
    },

    headerContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: verticalScale(30),
        paddingHorizontal: scale(10),
        height: scale(130),
        width: scale(375),
        backgroundColor: COLOR_CONST.btnBgColor
    },
    
    backIcon: {
        height: scale(15),
        width: scale(10),
        margin: scale(10)
    },

    paramIcon: {
        height: scale(30),
        width: scale(30),
        marginRight: scale(10)
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

    servicesCell: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: verticalScale(20),
        paddingHorizontal: scale(20)
    },

    bluecheckbox: {
        height: scale(20),
        width: scale(20),
        marginLeft: scale(10),
        borderColor: COLOR_CONST.btnBgColor,
        borderWidth: scale(1.5)
    },

    serviceIcon: {
        height: scale(20),
        width: scale(20),
        marginLeft: scale(10)
    },

    serviceNameText: {
        fontSize: scale(16),
        fontWeight: '400',
        opacity: 0.6,
        // marginLeft: scale(30)
    },

    rightIcon: {
        height: scale(10),
        width: scale(10),
        opacity: 0.5,
    },

    dash: {
        opacity: 0.4,
        marginTop: verticalScale(10),
        marginHorizontal: scale(20),
        alignSelf: 'center'
    },

    buttonView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: verticalScale(40),
        marginBottom: verticalScale(40),
        // position: 'absolute',
        // bottom: 10,
    },

    backButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: scale(50),
        width: scale(160),
        borderWidth: scale(1),
        borderRadius: scale(3),
        borderColor: COLOR_CONST.btnBgColor,
        marginLeft: scale(15)
    },

    backText: {
        fontSize: scale(18),
        fontWeight: '400',
        color: COLOR_CONST.btnBgColor
    },
    
    nextButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: scale(50),
        width: scale(160),
        borderRadius: scale(3),
        backgroundColor: COLOR_CONST.btnBgColor,
        marginRight: scale(15)
    },

    nextText: {
        fontSize: scale(18),
        fontWeight: '800',
        color: COLOR_CONST.white
    },

})