import { StyleSheet, Dimensions, Platform } from 'react-native';
import COLOR_CONST from '../../theme/ColorConstants';
import scale, { verticalScale } from '../../utils/Scale';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00000030',
        // height: scale(200),
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
        shadowOffset: { width: 1, height: 7 },
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
        marginLeft: scale(30)
    },

    bellIcon: {
        height: scale(25),
        width: scale(20)
    },

    modalContaine: {
		// flex: 1,
		// backgroundColor: '#ffffff19',
		justifyContent: 'center',
		alignItems: 'center',
        // marginTop: verticalScale(150) ,
        backgroundColor: '#00000065',
        // opacity: 0.55,
	},

	modalView:{
		backgroundColor: '#f2f2f2',
		width: scale(375),
		height: scale(350),
        borderTopLeftRadius: scale(50),
        borderTopRightRadius: scale(50),
		alignSelf: 'center',
		alignItems: 'center',
        // bottom: 100
	},

    divider: {
        height: scale(1),
        width: scale(350),
        backgroundColor: '#00000015',
        marginTop: verticalScale(5),
        // marginBottom: verticalScale(10)
    },

    profileIcon: {
        height: scale(50),
        width: scale(50),
        borderRadius: scale(50),
        marginLeft: scale(20)
    },

    userText: {
        fontSize: scale(20),
        color: '#000000',
        marginLeft: scale(25),
        // marginTop: verticalScale(10)
    },

    userSubText: {
        fontSize: scale(18),
        color: '#00000040',
        marginLeft: scale(25),
        marginTop: verticalScale(5)
    },

    moreLisCell: {
        // marginHorizontal: sca le(10),
        marginTop: verticalScale(20),
        width: scale(375),
        flexDirection: 'row',
    },

    moreIcons: {
        height: scale(20),
        width: scale(40),
        marginLeft: scale(20),
    },

    moreListName: {
        fontSize: scale(16),
        fontWeight: '500',
        marginLeft: scale(20),
        textAlign: 'center',
        color: '#00000090'
    },

    registerModal: {
        flex: 1,
    },

    registerTransparentBg: {
        flex: 1,
        backgroundColor: '#3e3e3e',
        opacity: 0.55,
    },

    registerView: {
        width: scale(375),
        height: scale(150),
        backgroundColor: '#fff'
    },

    registerCrossIcon: {
        width: scale(24),
        height: scale(24),
        alignSelf: 'flex-end',
        marginTop: verticalScale(10),
        marginRight: scale(50),
    },

    registerCrossIcon1: {
        width: scale(24),
        height: scale(24),
        alignSelf: 'flex-end',
        marginTop: verticalScale(10),
        marginRight: scale(10),
    },

    registerButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    registerLeftButton: {
        alignItems: 'center',
        marginRight: scale(36),
        width: scale(100),
        height: scale(100),
        backgroundColor: '#00000010',
        borderRadius: scale(50)
    },

    registerRightButton: {
        alignItems: 'center',
        marginLeft: scale(36),
        width: scale(100),
        height: scale(100),
        backgroundColor: '#00000010',
        borderRadius: scale(50)
    },

    registerAsText: {
        fontSize: scale(14),
        lineHeight: scale(20),
        marginTop: verticalScale(16),
        textAlign: 'center',
        color: '#00000090',
        fontWeight: '700'
    },


    registerAsIcon: {
        width: scale(24),
        height: scale(24),
        marginTop: verticalScale(16),
        resizeMode: 'contain'
    },
})