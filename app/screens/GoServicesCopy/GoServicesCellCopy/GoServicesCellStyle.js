import { StyleSheet, Dimensions, Platform } from 'react-native';
import COLOR_CONST from '../../../theme/ColorConstants';
import scale, { verticalScale } from '../../../utils/Scale';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fcfcfe',
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
        borderColor: '#000'
    },

    backIcon: {
        height: scale(20),
        width: scale(20),
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
        opacity: 0.8
    },

    bellIcon: {
        height: scale(25),
        width: scale(20)
    },

    allOptionText: {
        fontSize: scale(14),
        fontWeight: '600',
        opacity: 0.5,
        marginLeft: scale(20),
        marginTop: verticalScale(30),
        marginBottom: verticalScale(20)
    },

    optionsCard: {
        marginTop: verticalScale(20),
        height: scale(450),
        width: scale(350),
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: { width: 1, height: 6 },
        backgroundColor: COLOR_CONST.white,
        alignSelf: 'center',
        borderRadius: scale(5),
    },

    serviceCell: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: verticalScale(20),
        alignSelf: 'center',
        height: scale(50),
        width: scale(300),
        borderWidth: scale(0.5),
        borderRadius: scale(5),
        borderColor: '#00000020'
    },

    serviceNameText: {
        fontSize: scale(16),
        fontWeight: '400',
        opacity: 0.6,
        marginLeft: scale(10)
    },

    selectedServiceNameText: {
        fontSize: scale(18),
        fontWeight: '600',
        // opacity: 0.6,
        marginLeft: scale(10),
        color: COLOR_CONST.white
    },

    buttonView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: verticalScale(40),
        marginBottom: verticalScale(50),
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