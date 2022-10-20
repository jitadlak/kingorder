import React, { Component } from 'react';
import styles from './GoServicesCellStyle'
import { Image, ImageBackground, StatusBar, Text, View, ScrollView, TouchableOpacity, TextInput, FlatList, SafeAreaView } from 'react-native';
import COLOR_CONST from '../../../theme/ColorConstants';
import * as IMG_CONST from '../../../theme/ImageConstants';
import * as STRING_CONST from '../../../theme/StringConstants';
import scale, { verticalScale } from '../../../utils/Scale';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import * as commonActions from '../../../redux/actions/commonActions';
import * as userActions from '../../../redux/actions/userActions';
import * as homeActions from '../../../redux/actions/homeActions';

export class GoServicesCellScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false,
            serviceList: [{
                id: 2,
                image: IMG_CONST.water,
                categoryName: "Water Purifier (RO)"
            }, {
                id: 3,
                image: IMG_CONST.refrigerator,
                categoryName: "Refrigerator"
            }, {
                id: 4,
                image: IMG_CONST.geyser,
                categoryName: "Geyser"
            }, {
                id: 5,
                image: IMG_CONST.ac,
                categoryName: "Ac services"
            },
            {
                id: 6,
                image: IMG_CONST.appliance,
                isSelected: false,
                categoryName: "All Option"
            }, {
                id: 7,
                image: IMG_CONST.water,
                isSelected: false,
                categoryName: "Service check up"
            }, {
                id: 8,
                image: IMG_CONST.refrigerator,
                isSelected: false,
                categoryName: "Ro repair"
            }, {
                id: 9,
                image: IMG_CONST.geyser,
                isSelected: false,
                categoryName: "Ro install"
            }, {
                id: 10,
                image: IMG_CONST.ac,
                isSelected: false,
                categoryName: "Ro uninstall",
            }
            ]
        }
    }

    componentDidMount = () => {
        this.getAllServiceSubCategoryListByName();
    }

    getAllServiceSubCategoryListByName = async () => {
        let data = {};
        data['serviceName'] = this.props.route.params.item.categoryName;
        this.props.getAllServiceSubCategoryListByName(data, (res) => this.getAllServiceSubCategoryListByNameistSuccessCallBack(res), (err) => this.getAllServiceSubCategoryListByNametFailureCallBack(err))
    }

    getAllServiceSubCategoryListByNameistSuccessCallBack = async (res) => {
        console.log('@@@ Get All Service Sub Category List Success CallBack ===================', res);
        let localPlayerList = res.data;
        let modifiedPlayerList = [];
        localPlayerList.map((item) => {
            item['isSelected'] = false;
            modifiedPlayerList.push(item);
        });
        console.log('@@@ Get All Service Sub Category data CallBack ===================', localPlayerList);
        this.setState({ serviceList: modifiedPlayerList, showSearchAFriendsList: true });
    }

    getAllServiceSubCategoryListByNametFailureCallBack = (error) => {
        console.log('@@@ Get All Service Sub Category List Failure CallBack ===================', error);
        if (error) {
            setTimeout(() => {
                alert(error);
            }, 0);
        } else {
            setTimeout(() => {
                alert('Network Error!');
            }, 0);
        }
    }

    onPressCategory = (item) => {
        var tempList = this.state.serviceList;
        for (var i = 0; i < tempList.length; i++) {
            if (tempList[i].id == item.id) {
                tempList[i]["isSelected"] = !tempList[i]["isSelected"];
            }
        }
        this.setState({ serviceList: tempList }, () => this.props.navigation.navigate("SelectDateAndTime", { servicePrice : 100, categoryName: this.props.route.params.item.categoryName}))
    }

    renderHeaderContainer = () => {
        return (
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}><Image style={styles.backIcon} source={IMG_CONST.backIcon} /></TouchableOpacity>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={styles.paramIcon} source={this.props.route.params.item.image} />
                    <Text style={styles.mainText}>{this.props.route.params.item.categoryName}</Text>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Notification")}><Image style={styles.bellIcon} source={IMG_CONST.whiteNotification} /></TouchableOpacity>
            </View>
        );
    }

    renderServicesCell = (item) => {
        return (
            <TouchableOpacity onPress={() => this.onPressCategory(item)}>
                <View style={styles.servicesCell}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {/* {item.isSelected ?
                        <View style={styles.bluecheckbox} />
                        :
                        <Image style={styles.serviceIcon} source={IMG_CONST.inactiveCheckBox} />
                        } */}
                        {/* <Image style={styles.serviceIcon} source={item.isSelected ? IMG_CONST.checkBox : IMG_CONST.inactiveCheckBox} /> */}
                        <Text style={styles.serviceNameText}>{item.subCategoryName}</Text>
                    </View>
                    <Image style={styles.rightIcon} source={IMG_CONST.greyRightIcon} />
                </View>
                {item.id !== 10 ?
                    <Text style={styles.dash} ellipsizeMode="clip" numberOfLines={1}>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </Text>
                    :
                    null
                }
            </TouchableOpacity>
        );
    }

    renderServicesListContainer = () => {
        return (
            <View style={{ marginTop: verticalScale(20), marginBottom: verticalScale(50) }}>
                <FlatList
                    data={this.state.serviceList}
                    renderItem={({ item }) => this.renderServicesCell(item)}
                />
            </View>
        );
    }

    renderButtonsContainer = () => {
        return (
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.backButton}><Text style={styles.backText}>BACK</Text></TouchableOpacity>
                <TouchableOpacity style={styles.nextButton} onPress={() => this.props.navigation.navigate("SelectDateAndTime")}><Text style={styles.nextText}>NEXT</Text></TouchableOpacity>
            </View>
        );
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor={COLOR_CONST.btnBgColor} />
                {/* <SafeAreaView backgroundColor={this.props.route.params.topColor} style={{height: 10}}  /> */}
                {this.renderHeaderContainer()}
                {this.renderServicesListContainer()}
                {/* {this.renderButtonsContainer()} */}
            </ScrollView>
        )
    }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
        showErrorModal: (message, isShowError) => dispatch(commonActions.showErrorModal(message, isShowError)),
        hideErrorModal: () => dispatch(commonActions.hideErrorModal()),
        getAllServiceSubCategoryListByName: (data, successCallBack, failureCallBack) => dispatch(homeActions.getAllServiceSubCategoryListByName(data, successCallBack, failureCallBack)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GoServicesCellScreen)
