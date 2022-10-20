import React, { Component } from 'react';
import styles from './GoServicesStyle'
import { Image, ImageBackground, StatusBar, Text, View, ScrollView, TouchableOpacity, TextInput, FlatList, SafeAreaView } from 'react-native';
import COLOR_CONST from '../../theme/ColorConstants';
import * as IMG_CONST from '../../theme/ImageConstants';
import * as STRING_CONST from '../../theme/StringConstants';
import scale, { verticalScale } from '../../utils/Scale';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import * as commonActions from '../../redux/actions/commonActions';
import * as userActions from '../../redux/actions/userActions';
import * as homeActions from '../../redux/actions/homeActions';

export class GoServicesScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false,
            serviceList: [
                {
                    id: 1,
                    image: IMG_CONST.applience,
                    categoryName: "Appliances"
                }, {
                    id: 2,
                    image: IMG_CONST.elect,
                    categoryName: "Electrician"
                }, {
                    id: 3,
                    image: IMG_CONST.plumber,
                    categoryName: "Plumber"
                }, {
                    id: 5,
                    image: IMG_CONST.pastControl,
                    categoryName: "Pest Control"
                }, {
                    id: 6,
                    image: IMG_CONST.painter,
                    categoryName: "Painter"
                }, {
                    id: 7,
                    image: IMG_CONST.ro,
                    categoryName: "RO"
                }, {
                    id: 8,
                    image: IMG_CONST.salon_man,
                    categoryName: "Salon"
                }
            ]
        }
    }

    componentDidMount = () => {
        // this.getAllServiceCategoryList();
    }

    getAllServiceCategoryList = async () => {
        this.props.getAllServiceCategoryList( (res) => this.getAllServiceCategoryListSuccessCallBack(res), (err) => this.getAllServiceCategoryListFailureCallBack(err))
    }

    getAllServiceCategoryListSuccessCallBack = async (res) => {
        console.log('@@@ Get All Service Category List Success CallBack ===================', res);
        let localPlayerList = res.data.data;
        let modifiedPlayerList = [];
        localPlayerList.map((item) => {
            item['isSelected'] = false;
            modifiedPlayerList.push(item);
        });
        console.log('@@@ Get All Service Category data CallBack ===================', localPlayerList);
        this.setState({ serviceList: modifiedPlayerList, showSearchAFriendsList: true });
    }

    getAllServiceCategoryListFailureCallBack = (error) => {
        console.log('@@@ Get All Service Category List Failure CallBack ===================', error);
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

    renderHeaderContainer = () => {
        return (
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}><Image style={styles.backIcon} source={IMG_CONST.backIcon} /></TouchableOpacity>
                <Text style={styles.mainText}>Go Services</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Notification")}><Image style={styles.bellIcon} source={IMG_CONST.whiteNotification} /></TouchableOpacity>
            </View>
        );
    }

    renderServicesCell = (item) => {
        return (
            <TouchableOpacity style={styles.categoriesCell} onPress={() => this.props.navigation.navigate("GoServicesCell", {item: item})}>
                <Image style={styles.categoryImage} source={item.image} resizeMode="contain" />
                {/* <Image style={styles.categoryImage} source={{uri: `data:image/png[jpg];base64, ${item.categoryImage}`}} resizeMode="contain" /> */}
                <Text style={[styles.categoriesName, { color: item.isSelected ? COLOR_CONST.btnBgColor : "#00000090" }]}>{item.categoryName}</Text>
            </TouchableOpacity>
        );
    }

    renderServicesListContainer = () => {
        return (
            <View style={{marginTop: verticalScale(20), marginBottom: verticalScale(50)}}>
                <FlatList
                    data={this.state.serviceList}
                    numColumns={3}
                    renderItem={({ item }) => this.renderServicesCell(item)}
                />
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
        getAllServiceCategoryList: (successCallBack, failureCallBack) => dispatch(homeActions.getAllServiceCategoryList(successCallBack, failureCallBack)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GoServicesScreen)
