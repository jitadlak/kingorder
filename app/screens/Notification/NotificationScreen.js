import React, { Component } from 'react';
import styles from './NotificationStyle'
import { Image, ImageBackground, StatusBar, Text, View, ScrollView, TouchableOpacity, TextInput, FlatList, SafeAreaView } from 'react-native';
import COLOR_CONST from '../../theme/ColorConstants';
import * as IMG_CONST from '../../theme/ImageConstants';
import * as STRING_CONST from '../../theme/StringConstants';
import scale, { verticalScale } from '../../utils/Scale';
// import { Icon } from 'react-native-elements';

export class NotificationScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList: [{
                id: 1,
                heading: "Fresh Food Fiesta",
                subHeading: "23rd - 30th November on selected Vegitables, Fruits, Fish & Meats.",
                time: "4 min ago",
            }, {
                id: 2,
                heading: "Nexus Promotion",
                subHeading: "Kraft Cheese Tin 200G was Rs.825.00 Nexus Member Deat: Rs.618.00",
                time: "10:14 AM",
            }]
        }
    }

    renderHeaderContainer = () => {
        return (
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}><Image style={styles.backIcon} source={IMG_CONST.backIcon} /></TouchableOpacity>
                <Text style={styles.mainText}>Notifications</Text>
                <TouchableOpacity></TouchableOpacity>
            </View>
        );
    }

    renderItemCellContainer = (item) => {
        return (
            <TouchableOpacity style={styles.notificationCell} onPress={() => { }}>
                <Image source={IMG_CONST.ac} style={styles.notificationListIcon} resizeMode="cover" />
                <View style={{width: scale(275), marginLeft: scale(20)}}>
                    <View style={{ justifyContent: 'space-between', alignItems: 'baseline', flexDirection: 'row' }}>
                        <Text style={styles.headingText}>{item.heading}</Text>
                        <Text style={styles.minText}>{item.time}</Text>
                    </View>
                    <Text style={styles.subHeadingText}>{item.subHeading}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    renderItemListContainer = () => {
        return (
            <View>
                <View style={styles.dayViewHeight}>
                    <Text style={styles.dayText}>Today</Text>
                    <TouchableOpacity><Text style={styles.clearText}>Clear all</Text></TouchableOpacity>
                </View>
                <FlatList
                    data={this.state.itemList}
                    style={{ paddingBottom: verticalScale(5) }}
                    renderItem={({ item }) => this.renderItemCellContainer(item)}
                    ListEmptyComponent={() => <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        {/* <Image style={styles.image} source={IMG_CONST.thamks} /> */}
                        <Text style={styles.emptyListText}>No result found!</Text>
                    </View>}
                />
                <View style={styles.dayViewHeight}>
                    <Text style={styles.dayText}>Yesterday</Text>
                    <TouchableOpacity><Text style={styles.clearText}>Clear</Text></TouchableOpacity>
                </View>
                <FlatList
                    data={this.state.itemList}
                    style={{ paddingBottom: verticalScale(5) }}
                    renderItem={({ item }) => this.renderItemCellContainer(item)}
                    ListEmptyComponent={() => <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        {/* <Image style={styles.image} source={IMG_CONST.thamks} /> */}
                        <Text style={styles.emptyListText}>No result found!</Text>
                    </View>}
                />
                <View style={styles.dayViewHeight}>
                    <Text style={styles.dayText}>Last week</Text>
                    <TouchableOpacity><Text style={styles.clearText}>Clear</Text></TouchableOpacity>
                </View>
                <FlatList
                    data={this.state.itemList}
                    style={{ paddingBottom: verticalScale(5) }}
                    renderItem={({ item }) => this.renderItemCellContainer(item)}
                    ListEmptyComponent={() => <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        {/* <Image style={styles.image} source={IMG_CONST.thamks} /> */}
                        <Text style={styles.emptyListText}>No result found!</Text>
                    </View>}
                />
            </View>
        );
    }

    render() {
        return (
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <StatusBar barStyle="light-content" backgroundColor={COLOR_CONST.btnBgColor} height={10} hidden={true} />
                {/* <SafeAreaView backgroundColor={COLOR_CONST.loginBtnOuterColor} style={{height: 10}} height={10}  /> */}
                {this.renderHeaderContainer()}
                {this.renderItemListContainer()}
            </ScrollView>
        )
    }
}

export default NotificationScreen
