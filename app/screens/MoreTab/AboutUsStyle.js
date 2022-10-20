import { StyleSheet, Dimensions, Platform } from 'react-native';
import scale, { verticalScale } from '../../utils/Scale';
import COLOR_CONST from '../../theme/ColorConstants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff90',
    },

    imageBackground: {
        flex: 1,
        alignSelf: 'center',
        height: scale(100),
        width: scale(375),
        marginBottom: verticalScale(500)
    },

    headerContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: scale(10),
        height: scale(80),
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
        fontWeight: '700',
        // opacity: 0.8,
        color: '#fff',
        marginLeft: scale(10)
    },

    bellIcon: {
        height: scale(25),
        width: scale(25)
    },

    aboutUs: {
        fontSize: scale(18),
        width: scale(325),
        fontWeight: '400',
        color: '#000',
        alignSelf: 'center',
        marginTop: verticalScale(20)
    },
})