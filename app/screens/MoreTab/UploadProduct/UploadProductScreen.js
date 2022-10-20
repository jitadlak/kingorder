import React, { Component } from 'react';
import styles from './UploadProductStyle'
import { Image, Modal, StatusBar, Text, View, ScrollView, TouchableOpacity, TextInput, FlatList, SafeAreaView } from 'react-native';
import COLOR_CONST from '../../../theme/ColorConstants';
import * as IMG_CONST from '../../../theme/ImageConstants';
import scale, { verticalScale } from '../../../utils/Scale';
// import { Icon } from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';

export class UploadProductScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: null,
            show: true,
            showImagePickerModal: false,
            isInvalidUploadImage: false,
            profileImageData: '',
            isImageSelected: false,
            showModal: true,
            totalPrice: 1000,
            item: [],
            itemList: [
                {
                    id: 1,
                    isCanceled: false,
                    isDeleted: false,
                    productName: 'Red Bell Pepper',
                    productWeight: '1KG',
                    productRate: 'Rs.500.00',
                    rate: 500,
                    discription: 'Lorem ipsum dolor sit amet consectetur',
                    productImage: IMG_CONST.fishIcon
                }, {
                    id: 2,
                    isCanceled: false,
                    isDeleted: false,
                    productName: 'Yellow Bell Pepper',
                    productWeight: '1KG',
                    productRate: 'Rs.500.00',
                    rate: 500,
                    discription: 'Lorem ipsum dolor sit amet consectetur',
                    productImage: IMG_CONST.fishIcon
                }, {
                    id: 3,
                    isCanceled: true,
                    isDeleted: false,
                    productName: 'Ginger',
                    productWeight: '100G',
                    productRate: 'Rs.100.00',
                    rate: 100,
                    discription: 'Lorem ipsum dolor sit amet consectetur',
                    productImage: IMG_CONST.wineIcon
                }, {
                    id: 4,
                    isCanceled: false,
                    isDeleted: true,
                    productName: 'Garlic',
                    productWeight: '100G',
                    productRate: 'Rs.100.00',
                    rate: 100,
                    discription: 'Lorem ipsum dolor sit amet consectetur',
                    productImage: IMG_CONST.fishIcon
                }, {
                    id: 5,
                    isCanceled: false,
                    isDeleted: false,
                    productName: 'Red Onions',
                    productWeight: '!KG',
                    productRate: 'Rs.260.00',
                    rate: 260,
                    discription: 'Lorem ipsum dolor sit amet consectetur',
                    productImage: IMG_CONST.fishIcon
                }, {
                    id: 6,
                    isCanceled: false,
                    isDeleted: false,
                    productName: 'Carrot',
                    productWeight: '1KG',
                    productRate: 'Rs.490.00',
                    rate: 490,
                    discription: 'Lorem ipsum dolor sit amet consectetur',
                    productImage: IMG_CONST.fishIcon
                }, {
                    id: 7,
                    isCanceled: false,
                    isDeleted: false,
                    productName: 'Mango',
                    productWeight: '1KG',
                    productRate: 'Rs.500.00',
                    rate: 500,
                    discription: 'Lorem ipsum dolor sit amet consectetur',
                    productImage: IMG_CONST.fishIcon
                }, {
                    id: 8,
                    isCanceled: false,
                    isDeleted: false,
                    productName: 'Grapes',
                    productWeight: '100G',
                    productRate: 'Rs.140.00',
                    rate: 140,
                    discription: 'Lorem ipsum dolor sit amet consectetur',
                    productImage: IMG_CONST.fishIcon
                }
            ],
        }
    }

    componentDidMount = () => {
    }

    onPressCancel = (item) => {
        var tempList = this.state.itemList;
        for (var i = 0; i < tempList.length; i++) {
            if (tempList[i].id == item.id)
                tempList[i]["isCanceled"] = true;
        } this.setState({ itemList: tempList })
    }

    onPressDelete = (item) => {
        var tempList = this.state.itemList;
        for (var i = 0; i < tempList.length; i++) {
            if (tempList[i].id == item.id)
                tempList[i]["isDeleted"] = true;
        } this.setState({ itemList: tempList })
    }

    onPressCamera = () => {
        try {
            ImagePicker.openCamera({
                mediaType: 'photo',
                compressImageQuality: 0.3,
                includeBase64: true,
                cropping: true,
            }).then(async image => {
                console.log('@@@ Selected Image Item =============', image);
                const source = { uri: (Platform.OS === 'android') ? image.path : image.path };
                this.setState({ photo: image.path, showImagePickerModal: false, isImageSelected: true, profileImageData: image }, () => {
                    // this.updateProfileImage();
                });
            });
        } catch (e) {
            console.log('@@@ Error opening camera ==========', e);
        }
    }

    onPressPickImage = () => {
        try {
            ImagePicker.openPicker({
                mediaType: 'photo',
                compressImageQuality: 0.3,
                includeBase64: true,
                cropping: true,
            }).then(async image => {
                console.log('@@@ Selected Image Item =============', image);
                const source = { uri: (Platform.OS === 'android') ? image.path : image.path };
                this.setState({ photo: image.path, showImagePickerModal: false, isImageSelected: true, profileImageData: image }, () => {
                    // this.updateProfileImage();
                });
            });
        } catch (e) {
            console.log('@@@ Error opening image picker ==========', e);
        }
    }

    renderHeaderContainer = () => {
        return (
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}><Image style={styles.backIcon} source={IMG_CONST.backIcon} /></TouchableOpacity>
                <Text style={styles.mainText}>Upload Product</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Notification")}><Image style={styles.bellIcon} source={IMG_CONST.whiteNotification} /></TouchableOpacity>
            </View>
        );
    }

    renderSearchContainer = () => {
        return (
            <View style={styles.searchView}>
                <TouchableOpacity><Image style={styles.searchIcon} source={IMG_CONST.search} resizeMode="contain" /></TouchableOpacity>
                <TextInput
                    style={styles.searchTextInput}
                    placeholderTextColor='#00000040'
                    placeholder="Search"
                    onChangeText={(text) => this.setState({ searchedText: text })}
                />
            </View>
        );
    }

    renderItemCellContainer = (item) => {
        return (
            item.isCanceled || item.isDeleted ?
                (item.isCanceled ?
                    <View style={styles.productCell}>
                        <Text style={styles.canceledProductText}>You cancelled {item.productName} Priced {item.productRate}</Text>
                    </View>
                    :
                    <View style={styles.productCell}>
                        <Text style={styles.deletedProductText}>Product {item.productName} Priced {item.productRate} has been deleted</Text>
                    </View>
                )
                :
                <TouchableOpacity style={styles.productCell} onPress={() => { }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={item.productImage} style={styles.productImage} resizeMode="cover" />
                        <View style={{ marginLeft: verticalScale(15) }}>
                            <Text style={styles.productName}>{item.productName}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: scale(150), height: scale(20) }}>
                                <Text style={styles.productPice}>{item.productRate}</Text>
                                <View style={styles.weightView}><Text style={styles.productWeight}>{item.productWeight}</Text></View>
                            </View>
                            <Text style={styles.discription}>{item.discription}</Text>
                        </View>
                        {/* <TouchableOpacity onPress={() => this.onPressHeart(item)}><Image source={item.isFav ? IMG_CONST.heartActive : IMG_CONST.heartDeactive} style={styles.productFav} resizeMode="contain" /></TouchableOpacity> */}
                    </View>
                    <View style={styles.divider} />
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', paddingHorizontal: scale(15), height: scale(30) }}>
                        <TouchableOpacity onPress={() => this.onPressCancel(item)}><Image style={styles.cancelProductIcon} source={IMG_CONST.close} /></TouchableOpacity>
                        <TouchableOpacity onPress={() => this.onPressDelete(item)}><Text style={styles.addTOText}>-</Text></TouchableOpacity>
                    </View>
                </TouchableOpacity>
        );
    }

    renderItemListContainer = () => {
        return (
            <View>
                {/* {this.state.itemList.length > 0 ?
                    <View style={styles.listedItem}>
                        <Text style={styles.listedItems}>Items: {this.state.itemList.length}</Text>
                        <Text style={styles.totalPrice}>Total: Rs.{this.state.totalPrice}</Text>
                    </View>
                    :
                    null} */}
                <FlatList
                    data={this.state.itemList}
                    renderItem={({ item }) => this.renderItemCellContainer(item)}
                    ListEmptyComponent={() => <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={styles.image} source={IMG_CONST.thamks} />
                        <Text style={styles.emptyListText}>Your cart is EMPTY!</Text>
                    </View>}
                />
            </View>
        );
    }

    render() {
        return (
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <StatusBar barStyle="light-content" backgroundColor={COLOR_CONST.btnBgColor} height={10} />
                {/* <SafeAreaView backgroundColor={COLOR_CONST.loginBtnOuterColor} style={{height: 10}} height={10}  /> */}
                {this.renderHeaderContainer()}
                {this.renderSearchContainer()}
                {this.renderItemListContainer()}
            </ScrollView>
        )
    }
}

export default UploadProductScreen
