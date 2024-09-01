import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

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
import WebViewNoticeScreen from '../screens/WebViewNoticeScreen';
import WebViewQNAScreen from '../screens/WebViewQNAScreen';

import palette from '../lib/styles/colorPalette';

const Tab = createBottomTabNavigator();
const GardenStack = createStackNavigator();
const MyStack = createStackNavigator();

const getTabBarLabelStyle = focused => ({
  color: focused ? '#5AAF76' : '#1C5A41',
  marginTop: 0,
  marginBottom: 15,
});

const GardenStackScreen = () => (
  <GardenStack.Navigator>
    <GardenStack.Screen
      name="Garden"
      component={ListScreen}
      options={{headerShown: false}}
    />
    <GardenStack.Screen name="Detail" component={DetailScreen} />
    <GardenStack.Screen name="Post" component={PostScreen} />
    <GardenStack.Screen name="Update" component={UpdateScreen} />
  </GardenStack.Navigator>
);

const MyStackScreen = () => (
  <MyStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: palette.backGreen,
      },
      headerTitleStyle: {
        fontFamily: 'Pretendard-SemiBold',
        fontSize: 17,
        color: palette.black,
      },
      headerTintColor: palette.mainGreen,
      headerBackTitleVisible: false,
      headerShadowVisible: false,
    }}>
    <MyStack.Screen
      name="My"
      component={UserScreen}
      options={{title: '마이페이지'}}
      // options={{headerShown: false}}
    />
    <MyStack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{title: '회원 정보 수정'}}
    />
    <MyStack.Screen
      name="ChangePW"
      component={ChangePWScreen}
      options={{title: '비밀번호 변경'}}
    />
    <MyStack.Screen
      name="Setting"
      component={SettingScreen}
      options={{title: '푸시 알림 설정'}}
    />
    <MyStack.Screen
      name="WebViewNotice"
      component={WebViewNoticeScreen}
      options={{title: '공지사항'}}
    />
    <MyStack.Screen
      name="WebViewQNA"
      component={WebViewQNAScreen}
      options={{title: '문의'}}
    />
  </MyStack.Navigator>
);

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#FFFBFB',
          height: 80,
        },
        tabBarIconStyle: {
          marginTop: 0,
          marginBottom: -20,
        },
        headerStyle: {
          backgroundColor: palette.backGreen,
        },
        headerTitleStyle: {
          fontFamily: 'Pretendard-SemiBold',
          fontSize: 17,
          color: palette.black,
        },
        headerTintColor: palette.mainGreen,
        headerBackTitleVisible: false,
        headerShadowVisible: false,
      }}>
      <Tab.Screen
        name="Home"
        component={MainScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({focused}) => (
            <MediumText style={getTabBarLabelStyle(focused)}>Home</MediumText>
          ),
          tabBarIcon: ({focused}) => <TabIcon name="Home" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Garden"
        component={GardenStackScreen} // GardenStackScreen 사용
        options={{
          title: `닉네임의 정원`,
          tabBarLabel: ({focused}) => (
            <MediumText style={getTabBarLabelStyle(focused)}>Garden</MediumText>
          ),
          tabBarIcon: ({focused}) => (
            <TabIcon name="Garden" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="AR"
        component={ARScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({focused}) => (
            <MediumText style={getTabBarLabelStyle(focused)}>AR</MediumText>
          ),
          tabBarIcon: ({focused}) => <TabIcon name="AR" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="My"
        component={MyStackScreen} // MyStackScreen 사용
        options={{
          title: '마이페이지',
          headerShown: false,
          tabBarLabel: ({focused}) => (
            <MediumText style={getTabBarLabelStyle(focused)}>My</MediumText>
          ),
          tabBarIcon: ({focused}) => <TabIcon name="My" focused={focused} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
