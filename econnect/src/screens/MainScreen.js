import React from 'react';
import { useNavigation } from '@react-navigation/native';
import * as M from '../styles/MainStyle';

import MainHeader from '../components/MainHeader';
import MainButton from '../components/MainButton';
import SlickBox from '../components/SlickBox';

const MainScreen = () => {
  const navigation = useNavigation();

  return (
      <M.Screen>
        <MainHeader/>
        <M.ScrollView>
          <M.ContentContainer>
            <M.Top>
              <M.Image/>
              <M.Text>
                <M.Title>How to Raise our plant</M.Title>
                <M.Contents>how to maintain a happy and</M.Contents>
                <M.Contents>healthy plant</M.Contents>
              </M.Text>
            </M.Top>
            <M.Plants>
              <M.PTitle>My Plants</M.PTitle>
              <M.Slick>
                <SlickBox name='growers' date='134' />
              </M.Slick>
            </M.Plants>
            <M.Menu>
              <M.MTitle>Menu</M.MTitle>
              <MainButton label="My Garden" onPress={() => navigation.navigate('Garden', { screen: 'List' })} />
              <MainButton label="Registarate Plant" onPress={() => navigation.navigate('Garden', { screen: 'Post' })} />
              <MainButton label="Plant Care" onPress={() => navigation.navigate('Garden', { screen: 'Detail' })} />
              <MainButton label="With My Plant" onPress={() => navigation.navigate('AR')} />
            </M.Menu>
          </M.ContentContainer>
        </M.ScrollView>
      </M.Screen>
  );
};

export default MainScreen;
