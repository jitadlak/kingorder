/**
 * Menu Screen
 */
import React , { Component } from 'react';
import { 
    View, 
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import COLOR_CONST from '../../../app/theme/ColorConstants';
import * as IMG_CONST from '../../../app/theme/ImageConstants';
import styles from './OffCanvasSupplierStyle';
import OffCanvas3D from '../../components/OffCanvasMenu/Offcanvas3d';
import SupplierBottomTabScreen from '../TabScreen/SupplierMainTab';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar/FocusAwareStatusBar';

class OffCanvasSupplierScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false,
            isModalOpen: false
        }
    }

    handleMenu = () => {
        const {menuOpen} = this.state
        this.setState({
          menuOpen: !menuOpen
        })
    }

    render() {
        return (
            <Animatable.View animation="fadeIn" duraton="1500" style={styles.container}>
                <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#FFF" isFocused={true} />
                 <OffCanvas3D
                    active={this.state.menuOpen}
                    onMenuPress={() => this.handleMenu()}
                    backgroundColor={COLOR_CONST.menuBgColor}
                    menuTextStyles={styles.menuTitle}
                    handleBackPress={true}
                    menuItems={[
                        {
                        title: 'Contact Us',
                        icon: <Image source={IMG_CONST.CONTACT_US_ICON} style={styles.titleIcon} />,
                        renderScene: <View style={this.state.isModalOpen ? styles.renderSceneWithModal : styles.renderSceneWithoutModal}><SupplierBottomTabScreen menuOpen={this.state.menuOpen} handleMenu={() => this.handleMenu()} isModalOpen={this.state.isModalOpen} handleModal={() => this.handleModal()} {...this.props}/></View>
                        },
                        {
                        title: 'Logout',
                        icon: <Image source={IMG_CONST.LOGOUT_ICON} style={styles.titleIcon} />,
                        renderScene: <View/>
                        }
                    ]}
                    {...this.props}
                    />
            </Animatable.View>
        );
    }
};

export default OffCanvasSupplierScreen;

