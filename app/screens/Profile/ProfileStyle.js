import { StyleSheet, Dimensions, Platform } from 'react-native';
import ColorConstants from '../../theme/ColorConstants';
import COLOR_CONST from '../../theme/ColorConstants';
import scale, { verticalScale } from '../../utils/Scale';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
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

    moreIcon: {
        height: scale(20),
        width: scale(20),
        marginRight: scale(10)
    },

    profileIcon: {
        height: scale(110),
        width: scale(110),
        borderRadius: scale(50),
    },

    userText: {
        fontSize: scale(20),
        color: '#000000',
        marginTop: verticalScale(5)
    },

    userSubText: {
        fontSize: scale(18),
        color: ColorConstants.btnBgColor,
        opacity: 0.7
    },

    modalPickerContainer: {
        flex: 1,
    },

    imagePickerTransparentBg: {
        flex: 1,
        backgroundColor: '#3e3e3e',
        opacity: 0.55,
    },

    pickerBottomView: {
        width: scale(360),
        height: scale(150),
        backgroundColor: '#fff'
    },

    pickerCrossIcon: {
        width: scale(24),
        height: scale(24),
        alignSelf: 'flex-end',
        marginTop: verticalScale(10),
        marginRight: scale(10),
    },

    pickerButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    pickerLeftButton: {
        alignItems: 'center',
        marginRight: scale(36),
    },

    pickerRightButton: {
        alignItems: 'center',
        marginLeft: scale(36),
    },

    pickerPictureText: {
        fontSize: scale(14),
        lineHeight: scale(20),
        marginTop: verticalScale(16),
        textAlign: 'center',
        color: '#000'
    },

    pickerCameraIcon: {
        width: scale(24),
        height: scale(24),
        marginTop: verticalScale(16),
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
		backgroundColor: '#ffffff',
		width: scale(375),
		height: scale(420),
        borderTopLeftRadius: scale(50),
        borderTopRightRadius: scale(50),
		alignSelf: 'center',
		alignItems: 'center',
        // bottom: 100
	},

    divider: {
        height: scale(4),
        width: scale(30),
        backgroundColor: '#00000030',
        // marginTop: verticalScale(5),
        // marginBottom: verticalScale(10)
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