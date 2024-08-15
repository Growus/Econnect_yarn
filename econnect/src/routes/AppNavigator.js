import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../screens/SplashScreen';
import StartScreen from '../screens/StartScreen';
import LoginScreen from '../screens/LoginScreen';
import FindPWScreen from '../screens/FindPWScreen';
import SignupScreen from '../screens/SignupScreen';
import MainScreen from '../screens/MainScreen';
import ListScreen from '../screens/ListScreen';
import DetailScreen from '../screens/DetailScreen';
import PostScreen from '../screens/PostScreen';
import UpdateScreen from '../screens/UpdateScreen';
import UserScreen from '../screens/UserScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ChangePWScreen from '../screens/ChangePWScreen';
import SettingScreen from '../screens/SettingScreen';
import ARScreen from '../screens/ARScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Start" component={StartScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="FindPW" component={FindPWScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="Main" component={MainScreen} />
            <Stack.Screen name="List" component={ListScreen} />
            <Stack.Screen name="Detail" component={DetailScreen} />
            <Stack.Screen name="Post" component={PostScreen} />
            <Stack.Screen name="Update" component={UpdateScreen} />
            <Stack.Screen name="User" component={UserScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="ChangePW" component={ChangePWScreen} />
            <Stack.Screen name="Setting" component={SettingScreen} />
            <Stack.Screen name="AR" component={ARScreen} />
        </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
