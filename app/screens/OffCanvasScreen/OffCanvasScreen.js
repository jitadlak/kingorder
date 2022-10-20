/**
 * Menu Screen
 */
import React , { Component } from 'react';
import { 
    View, 
    Image,
    TouchableOpacity
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import COLOR_CONST from '../../../app/theme/ColorConstants';
import * as IMG_CONST from '../../../app/theme/ImageConstants';
import styles from './OffCanvasScreenStyle';
import OffCanvas3D from '../../components/OffCanvasMenu/Offcanvas3d';
import BottomTabScreen from '../TabScreen/MainTabScreen';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar/FocusAwareStatusBar';

class OffCanvasScreen extends Component {
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

    handleModal = () => {
        const {isModalOpen} = this.state
        this.setState({
            isModalOpen: !isModalOpen
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
                        title: 'My Orders',
                        icon: <TouchableOpacity onPress={() => this.props.navigation.navigate('MyOrdersScreen')}><Image source={IMG_CONST.ORDERS_ICON} style={styles.titleIcon} /></TouchableOpacity>,
                        renderScene: <View style={this.state.isModalOpen ? styles.renderSceneWithModal : styles.renderSceneWithoutModal}><BottomTabScreen menuOpen={this.state.menuOpen} handleMenu={() => this.handleMenu()} isModalOpen={this.state.isModalOpen} handleModal={() => this.handleModal()} {...this.props}/></View>
                        }, 
                        {
                        title: 'Payments',
                        icon:  <TouchableOpacity onPress={() => this.props.navigation.navigate('SupplierPaymentScreen')}><Image source={IMG_CONST.PAYMENTS_ICON} style={styles.titleIcon} /></TouchableOpacity>,
                        renderScene: <View style={this.state.isModalOpen ? styles.renderSceneWithModal : styles.renderSceneWithoutModal}><BottomTabScreen menuOpen={this.state.menuOpen} handleMenu={() => this.handleMenu()} isModalOpen={this.state.isModalOpen} handleModal={() => this.handleModal()} {...this.props}/></View>
                        },
                        {
                        title: 'Contact Us',
                        icon: <Image source={IMG_CONST.CONTACT_US_ICON} style={styles.titleIcon} />,
                        renderScene: <View style={this.state.isModalOpen ? styles.renderSceneWithModal : styles.renderSceneWithoutModal}><BottomTabScreen menuOpen={this.state.menuOpen} handleMenu={() => this.handleMenu()} isModalOpen={this.state.isModalOpen} handleModal={() => this.handleModal()} {...this.props}/></View>
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

export default OffCanvasScreen;

