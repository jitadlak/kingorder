/**
 * Main Tab Screen
 */
import React from 'react';
import { View, TouchableOpacity, Text, SafeAreaView, Image, BackHandler } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import * as IMG_CONST from '../../theme/ImageConstants';
import ColorConstants from '../../theme/ColorConstants';
import styles from './BottomTabNavigatorStyle';

//*> Screens
import OnboardingScreen from '../Onboarding/OnboardingScreen';
import HomeScreen from '../Home/HomeScreen';
import LoginScreen from '../Login/LoginScreen';
import WelcomeScreen from '../Welcome/WelcomeScreen';
import CreateAccountScreen from '../CreateAccount/CreateAccountScreen';
import GoServicesScreen from '../GoServices/GoServicesScreen';
import GoServicesCellScreen from '../GoServices/GoServicesCell/GoServicesCellScreen';
import GoServicesCopy from '../GoServicesCopy/GoServicesScreen';
import GoServicesCellCopyScreen from '../GoServicesCopy/GoServicesCellCopy/GoServicesCellScreen';
import SelectDateAndTime from '../GoServices/SelectDateAndTime/SelectDateAndTime';
import ThankYouScreen from '../GoServices/ThankYouForBooking/ThankYouScreen';
import YourBookingsScreen from '../GoServices/YourBookings/YourBookingsScreen';
import GoMartScreen from '../GoMart/GoMartScreen';
import GoMartCategoriesScreen from '../GoMart/GoMartCategoriesScreen';
import ProductDetailScreen from '../GoMart/ProductDetailScreen';
import GoFoodScreen from '../GoFood/GoFoodScreen';
import GoFoodAllRestraunts from '../GoFood/GoFoodAllRestraunts';
import FoodDetailScreen from '../GoFood/FoodDetailScreen';
import MenuDetailScreen from '../GoFood/MenuDetailScreen';
import AllShopsScreen from '../GoShop/AllShopsScreen';
import GoShopScreen from '../GoShop/GoShopScreen';
import ShopDetailScreen from '../GoShop/ShopDetailScreen';
import GoGadgetsScreen from '../GoGadgets/GoGadgetsScreen';
import AllGadgetsScreen from '../GoGadgets/AllGadgetsScreen';
import GadgetsDetailScreen from '../GoGadgets/GadgetsDetailScreen';
import MoreTabScreen from '../MoreTab/MoreTabScreen';
import VendorRegistrationScree from '../MoreTab/VendorRegistrationScree';
import EmployeeRegistrationScreen from '../MoreTab/EmployeeRegistrationScreen';
import ProfileScreen from '../Profile/ProfileScreen';
import UploadProductScreen from '../MoreTab/UploadProduct/UploadProductScreen';
import CartScreen from '../Cart/CartScreen';
import RebateScreen from '../RebateTab/RebateScreen';
import PromosScreen from '../PromosTab/PromosScreen';

//*> Bottom Tab Navigator
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const MoreStack = createStackNavigator();

const BottomTabScreen = (props) => (
  <Tab.Navigator
    initialRouteName=" "
    tabBar={props => <MyTabBar {...props} />}
    tabBarOptions={{
      style: { position: 'absolute' },
      keyboardHidesTabBar: true
    }}
  >
    <Tab.Screen
      name="Rewards"
      component={RebateScreen}
    // listeners={{
    //   focus: () => BackHandler.addEventListener('hardwareBackPress', handleBackButton())
    //   , blur: () => BackHandler.removeEventListener('hardwareBackPress', handleBackButton())
    // }}
    />
    <Tab.Screen
      name="Promos"
      component={PromosScreen}
    />
    <Tab.Screen
      name=" "
      component={HomeStackScreen}
    />
    <Tab.Screen
      name="Cart"
      component={CartScreen}
    />
    <Tab.Screen
      name="More"
      component={MoreStackScreen}
    />
  </Tab.Navigator>
);

const handleBackButton = () => {
  BackHandler.exitApp();
  return true;
}

export default BottomTabScreen;

const renderBottomTabIcons = (iconIndex, isFocused) => {
  switch (iconIndex) {
    case 0:
      return <Image source={isFocused ? IMG_CONST.blueRebate : IMG_CONST.awesomeCoins} style={styles.menuIcons} resizeMode="contain" />
    case 1:
      return <Image source={isFocused ? IMG_CONST.blueProms: IMG_CONST.promo} style={styles.bagIcon} resizeMode="contain" />
    case 2:
      return <View style={styles.homeView1}><View style={styles.homeView2}><Image source={IMG_CONST.homeIcon} style={styles.homelIcon} resizeMode="contain" /></View></View>
    case 3:
      return <Image source={isFocused ? IMG_CONST.cart : IMG_CONST.shopping_Cart} style={[styles.manIcon, {opacity: isFocused ? 1 : 0.4}]} resizeMode="contain" />
    case 4:
      return <Image source={isFocused ? IMG_CONST.blueMore : IMG_CONST.more} style={styles.mreIcon} resizeMode="contain" />
    default:
      break;
  }
}

const MyTabBar = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={() => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              })
              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            }}
            onLongPress={onLongPress()}
            style={styles.outerContainer}
          >
            <View style={styles.tabContainer}>
              {renderBottomTabIcons(index, isFocused)}
              <Text style={[styles.labelStyle, { color: '#00000060' }]}>{route.name}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </SafeAreaView>
  );
}

const HomeStackScreen = (props) => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={({ route, navigation }) => ({
        headerTitleAlign: 'center',
        headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
        route: { route },
        navigation: { navigation },
        headerShown: false
      })
      }
    // initialParams={{ menuOpen: props.menuOpen, handleMenu: () => props.handleMenu() }}
    />
    {/* <HomeStack.Screen
      name="GoServices"
      component={GoServicesScreen}
      options={({ route, navigation }) => ({
        headerTitleAlign: 'center',
        headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
        route: { route },
        navigation: { navigation },
        headerShown: false 
      })
      }
      // initialParams={{ menuOpen: props.menuOpen, handleMenu: () => props.handleMenu() }}
    /> */}
    <HomeStack.Screen options={{ headerShown: false }} name="GoServices" component={GoServicesScreen} />
    <HomeStack.Screen options={{ headerShown: false }} name="GoServicesCell" component={GoServicesCellScreen} />
    <HomeStack.Screen options={{ headerShown: false }} name="GoServicesCopy" component={GoServicesCopy} />
    <HomeStack.Screen options={{ headerShown: false }} name="GoServicesCellCopy" component={GoServicesCellCopyScreen} />
    <HomeStack.Screen options={{ headerShown: false }} name="SelectDateAndTime" component={SelectDateAndTime} />
    <HomeStack.Screen options={{ headerShown: false }} name="ThankYouScreen" component={ThankYouScreen} />
    <HomeStack.Screen options={{ headerShown: false }} name="YourBookings" component={YourBookingsScreen} />
    <HomeStack.Screen options={{ headerShown: false }} name="GoMart" component={GoMartScreen} />
    <HomeStack.Screen options={{ headerShown: false }} name="GoMartCategories" component={GoMartCategoriesScreen} />
    <HomeStack.Screen options={{ headerShown: false }} name="ProductDetail" component={ProductDetailScreen} />
    <HomeStack.Screen options={{ headerShown: false }} name="GoFood" component={GoFoodScreen} />
    <HomeStack.Screen options={{ headerShown: false }} name="GoFoodAllRestaurant" component={GoFoodAllRestraunts} />
    <HomeStack.Screen options={{ headerShown: false }} name="FoodDetail" component={FoodDetailScreen} />
    <HomeStack.Screen options={{ headerShown: false }} name="MenuDetail" component={MenuDetailScreen} />
    <HomeStack.Screen options={{ headerShown: false }} name="AllShops" component={AllShopsScreen} />
    <HomeStack.Screen options={{ headerShown: false }} name="GoShop" component={GoShopScreen} />
    <HomeStack.Screen options={{ headerShown: false }} name="ShopDetail" component={ShopDetailScreen} />
    <HomeStack.Screen options={{ headerShown: false }} name="GoGadgets" component={GoGadgetsScreen} />
    <HomeStack.Screen options={{ headerShown: false }} name="AllGadgets" component={AllGadgetsScreen} />
    <HomeStack.Screen options={{ headerShown: false }} name="GadgetsDetail" component={GadgetsDetailScreen} />
  </HomeStack.Navigator>
);

const MoreStackScreen = (props) => (
  <MoreStack.Navigator>
    <MoreStack.Screen
      name="MoreTabScreen"
      component={MoreTabScreen}
      options={({ route, navigation }) => ({
        headerTitleAlign: 'center',
        headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
        route: { route },
        navigation: { navigation },
        headerShown: false
      })
      }
    // initialParams={{ menuOpen: props.menuOpen, handleMenu: () => props.handleMenu() }}
    />
    <MoreStack.Screen options={{ headerShown: false }} name="VendorRegistration" component={VendorRegistrationScree} />
    <MoreStack.Screen options={{ headerShown: false }} name="EmployeeRegistration" component={EmployeeRegistrationScreen} />
    <MoreStack.Screen options={{ headerShown: false }} name="UploadProduct" component={UploadProductScreen} />
  </MoreStack.Navigator>
)
