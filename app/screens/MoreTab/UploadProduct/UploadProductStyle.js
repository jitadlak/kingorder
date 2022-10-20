import { StyleSheet, Dimensions, Platform } from 'react-native';
import COLOR_CONST from '../../../theme/ColorConstants';
import scale, { verticalScale } from '../../../utils/Scale';

export default StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#ffffff',
    height: scale(800),
    width: scale(375)
},

headerContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: scale(10),
    height: scale(80),
    width: scale(375),
    backgroundColor: COLOR_CONST.btnBgColor,
    borderBottomLeftRadius: scale(10),
    borderBottomRightRadius: scale(10),
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 1, height: 7 },
},

backIcon: {
    height: scale(15),
    width: scale(10),
    margin: scale(10)
},

mainText: {
    fontSize: scale(20),
    fontWeight: '700',
    // opacity: 0.8,
    color: '#fff',
    marginLeft: scale(30)
},

moreIcon: {
    height: scale(20),
    width: scale(20),
    marginRight: scale(10)
},

bellIcon: {
    height: scale(25),
    width: scale(25)
},

searchView: {
    height: scale(50),
    width: scale(340),
    borderRadius: scale(30),
    backgroundColor: COLOR_CONST.searchBtnBg,
    paddingHorizontal: scale(20),
    marginTop: verticalScale(20),
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center'
},

searchIcon: {
    height: scale(20),
    width: scale(20),
},

searchTextInput: {
    fontSize: scale(13),
    fontWeight: '400',
    marginLeft: scale(10)
    // opacity: 0.3
},

listedItem: {
    height: scale(60),
    width: scale(350),
    padding: scale(15),
    justifyContent: 'space-between',
    flexDirection: 'row'
},

listedItems: {
    fontSize: scale(18),
    fontWeight: '500',
    marginLeft: scale(10),
    color: COLOR_CONST.btnBgColor,
    // opacity: 0.3
},

totalPrice: {
    fontSize: scale(18),
    fontWeight: '500',
    color: COLOR_CONST.btnBgColor,
    // opacity: 0.3
},

canceledProductView: {
    width: scale(350),
    backgroundColor: '#00000010',
    padding: scale(10),
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: {width: 1, height: 7},
    marginTop: verticalScale(10),
    alignSelf: 'center',
},

deletedProductText: {
    fontSize: scale(14),
    fontWeight: '500',
    color: '#000000',
    opacity: 0.6
},

canceledProductText: {
    fontSize: scale(14),
    fontWeight: '500',
    color: '#000000',
    opacity: 0.8
},

productCell: {
    // height: scale(100),
    width: scale(350),
    backgroundColor: '#fff',
    padding: scale(10),
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: {width: 1, height: 7},
    marginTop: verticalScale(10),
    borderRadius: scale(10),
    alignSelf: 'center',
    // justifyContent: 'space-between',
    // alignItems: 'center'
},

weightView: {
    height: scale(20),
    width: scale(50),
    backgroundColor: '#00000020',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(2),
    marginTop: verticalScale(10),
},

productWeight: {
    fontSize: scale(10),
    fontWeight: '500',
},

discription: {
    fontSize: scale(12),
    fontWeight: '500',
    marginTop: verticalScale(5),
    width: scale(170),
    color: '#000000',
    opacity: 0.8
},

productFav: {
    height: scale(12),
    width: scale(13),
},

productImage: {
    height: scale(90),
    width: scale(150),
    alignSelf: 'center',
    borderRadius: scale(10),
},

productName: {
    fontSize: scale(14),
    fontWeight: '500',
    color: '#000000',
    opacity: 0.9
},

productPice: {
    fontSize: scale(14),
    fontWeight: '400',
    marginTop: verticalScale(5),
},

productCart: {
    height: scale(15),
    width: scale(15),
},

emptyListText: {
    fontSize: scale(15),
    fontWeight: '500',
    color: COLOR_CONST.black,
    opacity: 0.4,
    textAlign: 'center',
    marginTop: verticalScale(20)
},

divider: {
    height: scale(1),
    width: scale(330),
    backgroundColor: '#00000020',
    marginTop: verticalScale(10),
    // marginBottom: verticalScale(10)
},

buyNow: {
    // backgroundColor: COLOR_CONST.btnBgColor,
    // height: scale(40),
    // width: scale(130),
    borderRadius: scale(7),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: verticalScale(10)
},

addToCart: {
    // height: scale(40),
    // width: scale(130),
    fontWeight: '600',
    // color: COLOR_CONST.btnBgColor,
    marginTop: verticalScale(10),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: verticalScale(50)
},

cancelProductIcon: {
    height: scale(15),
    width: scale(15),
    // backgroundColor: '#00000020',
    marginTop: verticalScale(5),
},

addTOText: {
    fontSize: scale(28),
    fontWeight: '300',
    color: COLOR_CONST.black,
    alignSelf: 'center',
    marginLeft: scale(40),
},
})