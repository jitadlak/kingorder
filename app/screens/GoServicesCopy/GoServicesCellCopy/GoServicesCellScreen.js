import React, { Component } from 'react';
import styles from './GoServicesCellStyle'
import { Image, ImageBackground, StatusBar, Text, View, ScrollView, TouchableOpacity, TextInput, FlatList, SafeAreaView } from 'react-native';
import COLOR_CONST from '../../../theme/ColorConstants';
import * as IMG_CONST from '../../../theme/ImageConstants';
import * as STRING_CONST from '../../../theme/StringConstants';
import scale, { verticalScale } from '../../../utils/Scale';

export class GoServicesCellScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false,
            serviceList: [
                {
                    id: 1,
                    isSelected: false,
                    serviceName: "Service check up"
                }, {
                    id: 2,
                    isSelected: false,
                    serviceName: "Ro repair"
                }, {
                    id: 3,
                    isSelected: false,
                    serviceName: "Ro install"
                }, {
                    id: 4,
                    isSelected: false,
                    serviceName: "Ro uninstall",
                }, {
                    id: 5,
                    isSelected: false,
                    serviceName: "Other",
                }
            ]
        }
    }

    onPressCategory = (item) => {
        var tempList = this.state.serviceList;
        for (var i = 0; i < tempList.length; i++) {
            if (tempList[i].id == item.id) {
                tempList[i]["isSelected"] = !tempList[i]["isSelected"];
            }
        }
        this.setState({ serviceList: tempList })
    }

    renderHeaderContainer = () => {
        return (
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}><Image style={styles.backIcon} source={IMG_CONST.blackBackIcon} /></TouchableOpacity>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={styles.paramIcon} source={this.props.route.params.item.image} />
                    <Text style={styles.mainText}>{this.props.route.params.item.serviceName}</Text>
                </View>
                <TouchableOpacity><Image style={styles.bellIcon} source={IMG_CONST.orangeBell} /></TouchableOpacity>
            </View>
        );
    }

    renderServicesCell = (item) => {
        return (
            <TouchableOpacity onPress={() => this.onPressCategory(item)} style={[styles.serviceCell, { backgroundColor: !item.isSelected ? COLOR_CONST.white : COLOR_CONST.btnBgColor }]}>
                <Text style={item.isSelected ? styles.selectedServiceNameText : styles.serviceNameText}>{item.serviceName}</Text>
            </TouchableOpacity>
        );
    }

    renderServicesListContainer = () => {
        return (
            <View style={styles.optionsCard}>
                <Text style={styles.allOptionText}>All Option</Text>
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
                {this.renderButtonsContainer()}
            </ScrollView>
        )
    }
}

export default GoServicesCellScreen
