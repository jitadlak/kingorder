import { StyleSheet, Dimensions, Platform } from 'react-native';
import scale , {verticalScale} from '../../utils/Scale';
import COLOR_CONST from '../../../app/theme/ColorConstants';
import { FONTS } from '../../../app/theme/ColorConstants';
import * as CONST from '../../theme/StringConstants';

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: COLOR_CONST.subscriptionPlanBg
    },

    menuIcon: {
        marginTop: verticalScale(33),
        marginLeft: scale(32),
        width: scale(20),
        height: scale(14),
    },

    backButton: {
        paddingVertical: verticalScale(20),
        paddingRight: scale(20),
    },

    menuTitle: {
        fontSize: scale(18),
        lineHeight: scale(26),
        fontFamily: FONTS.MetropolisSemiBold,
        color: COLOR_CONST.white,
    },

    renderSceneWithoutModal: {
      flex: 1,
      backgroundColor: COLOR_CONST.subscriptionPlanBg  
    },

    renderSceneWithModal: {
        flex: 1,
        backgroundColor: COLOR_CONST.redAlertColor  
      },

    titleIcon: {
        width: scale(24),
        height: scale(24),
    }

});
