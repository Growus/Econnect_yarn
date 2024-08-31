import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MediumText from '../components/CustomText';

import MainScreen from '../screens/MainScreen';
import ListScreen from '../screens/ListScreen';
import ARScreen from '../screens/ARScreen';
import UserScreen from '../screens/UserScreen';
import TabIcon from '../components/TabIcon';

const Tab = createBottomTabNavigator();

const getTabBarLabelStyle = (focused) => ({
    color: focused ? '#5AAF76' : '#1C5A41',
    marginTop: 0,
    marginBottom: 15,
});

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
                component={ListScreen}
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
                component={UserScreen}
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
