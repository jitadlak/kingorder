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
})