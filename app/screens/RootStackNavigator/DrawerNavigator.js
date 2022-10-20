import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerContent from '../Drawer/DrawerContent';
import styles from './DrawerNavigatorStyle';
import BottomTabNavigator from '../RootStackNavigator/BottomTabNavigator';
import SignInScreen from '../SignIn/SignInScreen';
import SignUpScreen from '../SignUp/SignUpScreen';
import HomeScreen from '../HomeScreen/HomeScreen';
import MyCircleScreenComments from '../HomeScreen/MyCircleScreenComments';
import ProfileChangePasswordScreen from '../Profile/ProfileChangePasswordScreen';
import EditProfileScreen from '../Profile/EditProfileScreen';

const Drawer = createDrawerNavigator();

const DrawerStackScreen = (drawerProps) => {
    const showDrawer = false;
    return (
        <Drawer.Navigator 
            drawerStyle={{width: !showDrawer ? null : 280}}
            drawerStyle={[styles.drawer, { width: !showDrawer ? null : 300 }]} 
            overlayColor="transparent" 
            drawerContent={props => <DrawerContent {...props} />}
        >
            <RootStack.Screen name="MainStackScreen" component={MainStackScreen} options={{ headerShown: false }} />
        </Drawer.Navigator>
    );
};


const RootStack = createStackNavigator();

const MainStackScreen = (props) => {
    return (
        <RootStack.Navigator>
            <RootStack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={({route, navigation}) => ({
                    headerTitleAlign: 'center',
                    headerTitleStyle: { textAlign: 'center',alignSelf:'center' },
                    route: {route}, 
                    navigation: {navigation}})
                }
            />
        </RootStack.Navigator>
    );
};


export default DrawerStackScreen;