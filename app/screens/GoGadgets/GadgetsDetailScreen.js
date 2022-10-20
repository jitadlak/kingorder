import React, { Component } from 'react';
import styles from './GadgetsDetailStyle'
import { Image, ImageBackground, StatusBar, Text, View, ScrollView, TouchableOpacity, TextInput, FlatList, SafeAreaView } from 'react-native';
import COLOR_CONST from '../../theme/ColorConstants';
import * as IMG_CONST from '../../theme/ImageConstants';
import * as STRING_CONST from '../../theme/StringConstants';
import scale, { verticalScale } from '../../utils/Scale';
import { connect } from 'react-redux';
import * as commonActions from '../../redux/actions/commonActions';
import * as userActions from '../../redux/actions/userActions';
import * as homeActions from '../../redux/actions/homeActions';
// import { Icon } from 'react-native-elements';

export class GadgetsDetailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allMenuList: []
        }
    }

    componentDidMount = () => {
        this.getAllGadgetMenuList();
    }

    getAllGadgetMenuList = async () => {
        this.props.getAllGadgetMenuList((res) => this.getAllGadgetMenuListSuccessCallBack(res), (err) => this.getAllGadgetMenuListFailureCallBack(err))
    }

    getAllGadgetMenuListSuccessCallBack = async (res) => {
        console.log('@@@ Get All Gadget Menu Success CallBack ===================', res);
        let localPlayerList = res.data.data;
        let modifiedList = [];
        localPlayerList.map((item) => {
            item['isSelected'] = false;
            modifiedList.push(item);
        });
        console.log('@@@ Get All Gadget Menu Data CallBack ===================', localPlayerList);
        this.setState({ allMenuList: modifiedList });
    }

    getAllGadgetMenuListFailureCallBack = (error) => {
        console.log('@@@ Get All Gadget Menu Failure CallBack ===================', error);
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
        item = this.props.route.params.item
        return (
            // <ImageBackground style={styles.productImageHeader} source={item.image}>
                        <ImageBackground style={styles.productImageHeader} source={{uri: `data:image/png;base64,${item.image}`}}>
                <View style={styles.headerView}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}><Image style={styles.backIcon} source={IMG_CONST.backIcon} /></TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Notification")}><Image style={styles.shareIcon} source={IMG_CONST.share} /></TouchableOpacity>
                </View>
                <View style={styles.contactView}>
                    <Text style={[styles.dealsName, {width: scale(150), color: '#fff'}]}>{item.storeName}</Text>
                    <View style={styles.divider} />
                    <Text style={[styles.statusText, { color: '#fff', opacity: 1, textTransform: 'uppercase' }]}>{item.status} now</Text>
                </View>
            </ImageBackground>
        );
    }

    renderDetailsContainer = () => {
        item = this.props.route.params.item
        return (
            <View>
                <View style={{ marginTop: verticalScale(15), marginLeft: scale(20) }}>
                    <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                    <Text style={styles.dealsName}>{item.storeName}</Text>
                        {/* <View style={{ flexDirection: 'row', alignItems: 'center' }}> */}
                            {/* <View style={styles.cuisineView}><Text style={styles.cuisineText}>{item.cuisine}</Text></View> */}
                            <View style={styles.distanceView}><Text style={styles.distanceText}>{item.distance}</Text></View>
                        {/* </View> */}
                        <View style={styles.ratingsView}>
                            <Image style={styles.starIcon} source={IMG_CONST.orangeStar} resizeMode="contain" />
                            <Text style={styles.ratingsText}>{item.rstrntRating}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: verticalScale(20) }}>
                    <Text style={styles.min}>{item.storeAddress}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: scale(80) }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: scale(20), marginTop: verticalScale(10) }}>
                    <Text style={[styles.statusText, { color: 'red', textTransform: 'uppercase' }]}>{item.status} now</Text>
                        <Text style={styles.statusText}> daily time</Text>
                        <Text style={[styles.statusText, { color: 'red' }]}> {item.openTime} to {item.closeTime}</Text>
                    </View>
                    <Image style={styles.dropdown} source={IMG_CONST.downArrow} />
                </View>
            </View>
        );
    }

    renderMenuCell = (item) => {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate("MenuDetail", {categoryName: "Gadgets", item: item})}>
                <Image source={{uri: `data:image/png[jpg];base64, ${item.menuImg}`}} style={{ height: scale(100), width: scale(130), marginLeft: scale(15), borderRadius: scale(10) }} />
                <Text style={styles.categoryName}>{item.menutName}</Text>
            </TouchableOpacity>
        );
    }

    renderMenuAdPhotoContainer = () => {
        return (
            <View>
                <View style={styles.seeAllView}>
                    <Text style={styles.allRestaurants}>Menu And Photos</Text>
                    <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("GadgetsMenuList", {itemList: this.state.allMenuList})}
                    ><Text style={styles.seeAll}>See all ({this.state.allMenuList.length})</Text></TouchableOpacity>
                </View>
                <FlatList
                    data={this.state.allMenuList}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: verticalScale(20), marginLeft: scale(10) }}
                    renderItem={({ item }) => this.renderMenuCell(item)}
                />
            </View>
        );
    }

    renderRatingsCell = (item) => {
        return (
            <View style={styles.ratingsCellView}>
                <Image source={IMG_CONST.profile} style={styles.ratingImage} />
                <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={styles.reviewerName}>Collin Fields</Text>
                    <View style={styles.ratingsView}>
                        <Image style={styles.starIcon} source={IMG_CONST.orangeStar} resizeMode="contain" />
                        <Text style={styles.ratingsText}>4.5</Text>
                    </View>
                </View>
                <Text style={styles.review}>Lorem ipsum dolor sit amet consectetur</Text>
                </View>
            </View>);
    }

    renderReviewAdRatingsContainer = () => {
        return (
            <View>
                <View style={styles.seeAllView}>
                    <Text style={styles.allRestaurants}>Review And Ratings</Text>
                    <TouchableOpacity
                    // onPress={() => this.props.navigation.navigate("GoFoodAllRestaurant")}
                    ><Text style={styles.seeAll}>See all (32)</Text></TouchableOpacity>
                </View>
                <FlatList
                    data={[{ name: "Itaian" }, { name: "Chinese" }, { name: "Maxican" }, { name: "Korean" }]}
                    // horizontal={true}
                    showsVerticalScrollIndicator={false}
                    style={{ marginTop: verticalScale(20), marginLeft: scale(10), marginBottom: verticalScale(40) }}
                    renderItem={({ item }) => this.renderRatingsCell(item)}
                />
            </View>
        );
    }

    render() {
        return (
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <StatusBar barStyle="light-content" height={10} hidden={false} />
                {this.renderHeaderContainer()}
                {this.renderDetailsContainer()}
                {this.renderMenuAdPhotoContainer()}
                {/* {this.renderReviewAdRatingsContainer()} */}
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
        getAllGadgetMenuList: (successCallBack, failureCallBack) => dispatch(homeActions.getAllGadgetMenuList(successCallBack, failureCallBack)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GadgetsDetailScreen)
