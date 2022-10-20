import React, { Component } from 'react';
import styles from './MoreTabStyle'
import { Image, Modal, StatusBar, Text, View, ScrollView, TouchableOpacity, TextInput, FlatList, SafeAreaView } from 'react-native';
import COLOR_CONST from '../../theme/ColorConstants';
import * as IMG_CONST from '../../theme/ImageConstants';
import * as STRING_CONST from '../../theme/StringConstants';
import scale, { verticalScale } from '../../utils/Scale';
import AsyncStorage from '@react-native-community/async-storage';
// import { Icon } from 'react-native-elements';

export class MoreTabScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: true,
            showRegisterModal: false,
            shoMoreTabModal: true,
            moreItems: [{
                id: 1,
                title: 'Profile',
                icon: IMG_CONST.blueUser,
                navigateTo: 'Profile',
            }, {
                id: 2,
                title: 'About Us',
                icon: IMG_CONST.userTie,
                navigateTo: 'AboutUs',
            }, {
                id: 3,
                title: 'Privacy Policy',
                icon: IMG_CONST.police,
                navigateTo: 'Policy',
            }, {
                id: 4,
                title: 'Register',
                icon: IMG_CONST.registered,
                navigateTo: 'VendorRegistration',
            }, {
                id: 5,
                title: 'Feedback',
                icon: IMG_CONST.feedback,
                navigateTo: 'FeedBack',
            }, {
                id: 6,
                title: 'Ratings',
                icon: IMG_CONST.blueStarIcon
            }, {
                id: 7,
                title: 'Share Application',
                icon: IMG_CONST.localService
            }]
        }
    }

    componentDidMount = async () => {
        let token = await AsyncStorage.getItem('USER_TOKEN');
        this.setState({})
    }

    renderHeaderContainer = () => {
        return (
            <View style={styles.headerContainer}>
                {/* <TouchableOpacity onPress={() => this.props.navigation.goBack()}><Image style={styles.backIcon} source={IMG_CONST.backIcon} /></TouchableOpacity> */}
                <Text style={styles.mainText}>More</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Notification")}><Image style={styles.bellIcon} source={IMG_CONST.whiteNotification} /></TouchableOpacity>
            </View>
        );
    }

    onPressServiceCell = (item) => {
        var tempList = this.state.moreItems;
        for (var i = 0; i < tempList.length; i++) {
            if (tempList[i].id == item.id) {
                tempList[i]["isSelected"] = true;
            } else {
                tempList[i]["isSelected"] = false;
            }
        }
        this.setState({ moreItems: tempList, shoMoreTabModal: false }, () => item.id === 6 || item.id === 7 ? null : this.props.navigation.navigate(item.navigateTo))
    }

    renderCellContainer = (item) => {
        return (
            <View style={{ alignSelf: 'flex-start' }}>
                <TouchableOpacity style={styles.moreLisCell} onPress={() => this.onPressServiceCell(item)}>
                    <Image style={styles.moreIcons} source={item.icon} resizeMode="contain" />
                    <Text style={[styles.moreListName, { color: "#00000090" }]}>{item.title}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    renderModalContainer = () => {
        return (
            <View style={styles.registerModal}>
                <View style={styles.registerTransparentBg} />
                <View style={styles.modalContaine}>
                    <View style={styles.modalView}>
                        <FlatList
                            style={{ marginTop: verticalScale(10) }}
                            data={this.state.moreItems}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => this.renderCellContainer(item)}
                        />
                    </View>
                </View>
            </View>
        );
    }

    renderRegisterPickerModal = () => {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.showRegisterModal}
                onRequestClose={() => {
                    this.setState({ showRegisterModal: false })
                }}
            >
                <View style={styles.registerModal}>
                    <View style={styles.registerTransparentBg} />
                    <View style={styles.registerView}>
                        <TouchableOpacity onPress={() => this.setState({ showRegisterModal: false })}>
                            <Image
                                source={IMG_CONST.crossIcon}
                                style={styles.registerCrossIcon1}
                            />
                        </TouchableOpacity>
                        <View style={styles.registerButton}>
                            <TouchableOpacity onPress={() => this.setState({ showRegisterModal: false }, () => this.props.navigation.navigate("VendorRegistration"))} style={styles.registerLeftButton}>
                                <Image
                                    source={IMG_CONST.blueUser}
                                    style={styles.registerAsIcon}
                                />
                                <Text style={styles.registerAsText}>As Vendor</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.setState({ showRegisterModal: false }, () => this.props.navigation.navigate("EmployeeRegistration"))} style={styles.registerRightButton}>
                                <Image
                                    source={IMG_CONST.blueUser}
                                    style={styles.registerAsIcon}
                                />
                                <Text style={styles.registerAsText}>As Employee</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                {/* <ScrollView style={styles.container} showsVerticalScrollIndicator={false}> */}
                <StatusBar barStyle="dark-content" height={10} hidden={false} />
                {/* <SafeAreaView backgroundColor={COLOR_CONST.loginBtnOuterColor} style={{height: 10}} height={10}  /> */}
                {/* {this.renderHeaderContainer()} */}
                {this.renderModalContainer()}
                {/* {this.renderRegisterPickerModal()} */}
                {/* </ScrollView> */}
            </View>
        )
    }
}

export default MoreTabScreen
