import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import MediumText from '../components/CustomText';
import TabIcon from '../components/TabIcon';

import MainScreen from '../screens/MainScreen';
import ListScreen from '../screens/ListScreen';
import ARScreen from '../screens/ARScreen';
import UserScreen from '../screens/UserScreen';
import DetailScreen from '../screens/DetailScreen';
import PostScreen from '../screens/PostScreen';
import UpdateScreen from '../screens/UpdateScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ChangePWScreen from '../screens/ChangePWScreen';
import SettingScreen from '../screens/SettingScreen';

const Tab = createBottomTabNavigator();
const GardenStack = createStackNavigator();
const MyStack = createStackNavigator();

const getTabBarLabelStyle = (focused) => ({
    color: focused ? '#5AAF76' : '#1C5A41',
    marginTop: 0,
    marginBottom: 15,
});

const GardenStackScreen = () => (
    <GardenStack.Navigator>
        <GardenStack.Screen 
            name="Garden" 
            component={ListScreen} 
            options={{ headerShown: false }} 
        />
        <GardenStack.Screen 
            name="Detail" 
            component={DetailScreen} 
        />
        <GardenStack.Screen 
            name="Post" 
            component={PostScreen} 
        />
        <GardenStack.Screen 
            name="Update" 
            component={UpdateScreen} 
        />
    </GardenStack.Navigator>
);

const MyStackScreen = () => (
    <MyStack.Navigator>
        <MyStack.Screen 
            name="My" 
            component={UserScreen} 
            options={{ headerShown: false }} 
        />
        <MyStack.Screen 
            name="Profile" 
            component={ProfileScreen} 
        />
        <MyStack.Screen 
            name="ChangePW" 
            component={ChangePWScreen} 
        />
        <MyStack.Screen 
            name="Setting" 
            component={SettingScreen} 
        />
    </MyStack.Navigator>
);

const TabNavigation = () => {
    return (
        <Tab.Navigator 
            initialRouteName='Home'
            screenOptions={{
            tabBarStyle: {
                backgroundColor: '#FFFBFB',
                height: 80,
            },
            tabBarIconStyle: {
                marginTop: 0,
                marginBottom: -20,
            },
            }}
        >
            <Tab.Screen
            name='Home'
            component={MainScreen}
            options={{
                headerShown: false,
                tabBarLabel: ({ focused }) => (
                <MediumText style={getTabBarLabelStyle(focused)}>
                    Home
                </MediumText>
                ),
                tabBarIcon: ({ focused }) => <TabIcon name='Home' focused={focused} />
            }}
            />
            <Tab.Screen
            name='Garden'
            component={GardenStackScreen}  // GardenStackScreen 사용
            options={{
                title: `닉네임의 정원`,
                tabBarLabel: ({ focused }) => (
                <MediumText style={getTabBarLabelStyle(focused)}>
                    Garden
                </MediumText>
                ),
                tabBarIcon: ({ focused }) => <TabIcon name='Garden' focused={focused} />,
            }}
            />
            <Tab.Screen
            name='AR'
            component={ARScreen}
            options={{
                headerShown: false,
                tabBarLabel: ({ focused }) => (
                <MediumText style={getTabBarLabelStyle(focused)}>
                    AR
                </MediumText>
                ),
                tabBarIcon: ({ focused }) => <TabIcon name='AR' focused={focused} />
            }}
            />
            <Tab.Screen
            name='My'
            component={MyStackScreen}  // MyStackScreen 사용
            options={{
                title: '마이페이지',
                tabBarLabel: ({ focused }) => (
                <MediumText style={getTabBarLabelStyle(focused)}>
                    My
                </MediumText>
                ),
                tabBarIcon: ({ focused }) => <TabIcon name='My' focused={focused} />
            }}
            />
        </Tab.Navigator>
        );
};

export default TabNavigation;
