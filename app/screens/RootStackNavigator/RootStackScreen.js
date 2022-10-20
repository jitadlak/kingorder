/**
 * Root Stack Screen
 */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../Splash/SplashScreen';
import HomeScreen from '../Home/HomeScreen';
import OnboardingScreen from '../Onboarding/OnboardingScreen';
import LoginScreen from '../Login/LoginScreen';
import CreateAccountScreen from '../CreateAccount/CreateAccountScreen';
import ForgetPasswordScreen from '../ForgetPassword/ForgetPasswordScreen';
import PhoneVerificationScreen from '../PhoneVerification/PhoneVerificationScreen';
import WelcomeScreen from '../Welcome/WelcomeScreen';
import ForgetChangePassword from '../ForgetChangePassword/ForgetChangePasswordScreen';
import BottomTabScreen from './BottomTabNavigator';
import GoServicesScreen from '../GoServices/GoServicesScreen';
import GoServicesCellScreen from '../GoServices/GoServicesCell/GoServicesCellScreen';
import GoServicesCopy from '../GoServicesCopy/GoServicesScreen';
import GoServicesCellCopyScreen from '../GoServicesCopy/GoServicesCellCopy/GoServicesCellScreen';
import SelectDateAndTime from '../GoServices/SelectDateAndTime/SelectDateAndTime';
import ThankYouScreen from '../GoServices/ThankYouForBooking/ThankYouScreen';
import YourBookingsScreen from '../GoServices/YourBookings/YourBookingsScreen';
import CheckoutScreen from '../Checkout/CheckoutScreen';
import PaymentScreen from '../Checkout/PaymentScreen';
import CartScreen from '../Cart/CartScreen';
import NotificationScreen from '../Notification/NotificationScreen';
import ProfileScreen from '../Profile/ProfileScreen';
import UploadProductScreen from '../MoreTab/UploadProduct/UploadProductScreen';
import AboutUs from '../MoreTab/AboutUs';
import ContactUs from '../MoreTab/ContactUs';
import { PrivacyPolicy } from '../MoreTab/PrivacyPolicy';
import FeedBack from '../MoreTab/FeedBack';
import FoodMenuList from '../GoFood/FoodMenuList';
import GadgetsMenuList from '../GoGadgets/GadgetsMenuList';
import ShopMenuList from '../GoShop/ShopMenuList';

const RootStack = createStackNavigator();

const RootStackScreen = (props) => {
    return (
        <RootStack.Navigator>
            <RootStack.Screen options={{ gestureEnabled: false, headerShown: false }} name="SplashScreen" component={SplashScreen} />
            <RootStack.Screen options={{ headerShown: false }} name="Onboarding" component={OnboardingScreen} />
            <RootStack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
            <RootStack.Screen options={{ headerShown: false }} name="SignUp" component={CreateAccountScreen} />
            <RootStack.Screen options={{ headerShown: false }} name="Forget" component={ForgetPasswordScreen} />
            <RootStack.Screen options={{ headerShown: false }} name="ForgetChange" component={ForgetChangePassword} />
            <RootStack.Screen options={{ headerShown: false }} name="PhoneVerification" component={PhoneVerificationScreen} />
            <RootStack.Screen options={{ headerShown: false }} name="Welcome" component={WelcomeScreen} />
            <RootStack.Screen options={{ headerShown: false }} name="HomeScreen" component={HomeScreen} />
            <RootStack.Screen options={{ headerShown: false }} name="ThankYouScreen" component={ThankYouScreen} />
            <RootStack.Screen options={{ headerShown: false }} name="Checkout" component={CheckoutScreen} />
            <RootStack.Screen options={{ headerShown: false }} name="Cart" component={CartScreen} />
            <RootStack.Screen options={{ headerShown: false }} name="Notification" component={NotificationScreen} />
            <RootStack.Screen options={{ headerShown: false }} name="UploadProduct" component={UploadProductScreen} />
            <RootStack.Screen name="MainStackScreen" component={MainStackScreen} options={{ gestureEnabled: false, headerShown: false }} />
        </RootStack.Navigator>
    );
};

const MainStackScreen = (props) => {
    return (
        <RootStack.Navigator>
            <RootStack.Screen options={{ headerShown: false }} name="BottomTabNavigator" component={BottomTabScreen} />
            <RootStack.Screen options={{ headerShown: false }} name="Welcome" component={WelcomeScreen} />
            <RootStack.Screen options={{ headerShown: false }} name="HomeScreen" component={HomeScreen} />
            <RootStack.Screen options={{ headerShown: false }} name="GoServices" component={GoServicesScreen} />
            <RootStack.Screen options={{ headerShown: false }} name="GoServicesCell" component={GoServicesCellScreen} />
            <RootStack.Screen options={{ headerShown: false }} name="GoServicesCopy" component={GoServicesCopy} />
            <RootStack.Screen options={{ headerShown: false }} name="GoServicesCellCopy" component={GoServicesCellCopyScreen} />
            <RootStack.Screen options={{ headerShown: false }} name="SelectDateAndTime" component={SelectDateAndTime} />
            <RootStack.Screen options={{ headerShown: false }} name="ThankYouScreen" component={ThankYouScreen} />
            <RootStack.Screen options={{ headerShown: false }} name="Profile" component={ProfileScreen} />
            <RootStack.Screen options={{ headerShown: false }} name="AboutUs" component={AboutUs} />
            <RootStack.Screen options={{ headerShown: false }} name="ContactUs" component={ContactUs} />
            <RootStack.Screen options={{ headerShown: false }} name="Policy" component={PrivacyPolicy} />
            <RootStack.Screen options={{ headerShown: false }} name="FeedBack" component={FeedBack} />
            <RootStack.Screen options={{ headerShown: false }} name="FoodMenuList" component={FoodMenuList} />
            <RootStack.Screen options={{ headerShown: false }} name="GadgetsMenuList" component={GadgetsMenuList} />
            <RootStack.Screen options={{ headerShown: false }} name="ShopMenuList" component={ShopMenuList} />
        </RootStack.Navigator>
    );
}
export default RootStackScreen;