import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import StartScreen from '../screens/StartScreen';
import LoginScreen from '../screens/LoginScreen';
import FindPWScreen from '../screens/FindPWScreen';
import SignupScreen from '../screens/SignupScreen';
// import MainScreen from '../screens/MainScreen';
// import ListScreen from '../screens/ListScreen';
// import DetailScreen from '../screens/DetailScreen';
// import PostScreen from '../screens/PostScreen';
// import UpdateScreen from '../screens/UpdateScreen';
// import UserScreen from '../screens/UserScreen';
// import ProfileScreen from '../screens/ProfileScreen';
// import ChangePWScreen from '../screens/ChangePWScreen';
// import SettingScreen from '../screens/SettingScreen';
// import ARScreen from '../screens/ARScreen';
import TabScreen from '../screens/TabScreen';

import palette from '../lib/styles/colorPalette';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
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
        <Stack.Screen name="Start" component={StartScreen} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={LoginScreen} options={{title: '로그인'}} />
        <Stack.Screen name="FindPW" component={FindPWScreen} options={{title: '비밀번호 찾기'}} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{title: '회원가입'}} />
        <Stack.Screen name="Tab" component={TabScreen} options={{ headerShown: false }} />
        {/* <Stack.Screen name="Main" component={MainScreen} options={{headerShown: false}} />
        <Stack.Screen name="List" component={ListScreen} options={route => ({title: `닉네임의 정원`})} />
        <Stack.Screen name="Detail" component={DetailScreen} options={route => ({title: `다육이`})} />
        <Stack.Screen name="Post" component={PostScreen} options={{title: '식물 등록'}} />
        <Stack.Screen name="Update" component={UpdateScreen} options={{title: '정보 수정'}} />
        <Stack.Screen name="User" component={UserScreen} options={{title: '마이페이지'}} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{title: '회원 정보 수정'}} />
        <Stack.Screen name="ChangePW" component={ChangePWScreen} options={{title: '비밀번호 변경'}}  />
        <Stack.Screen name="Setting" component={SettingScreen} options={{title: '푸시 알림 설정'}} />
        <Stack.Screen  name="AR" component={ARScreen} options={{headerShown: false}} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
