import { StyleSheet, Dimensions, Platform } from 'react-native';
import scale , {verticalScale} from '../../utils/Scale';
import COLOR_CONST from '../../../app/theme/ColorConstants';
import * as CONST from '../../theme/StringConstants';

export default StyleSheet.create({
    container: { 
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1e2493',
        // height: scale(667),
        // width: scale(375)
    },
    
    appLogo: { 
        alignSelf: 'center',
        // height: scale(300),
        width: scale(150)
    },

    appText: { 
        alignSelf: 'center',
        // height: scale(50),
        width: scale(200)
    },
});
