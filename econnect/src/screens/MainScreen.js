import React, { useEffect, useState } from 'react';
import RNFetchBlob from 'rn-fetch-blob';
import { useNavigation } from '@react-navigation/native';
import * as M from '../styles/MainStyle';

import MainHeader from '../components/MainHeader';
import MainButton from '../components/MainButton';
import SlickBox from '../components/SlickBox';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

const MainScreen = () => {
  const API_URL = process.env.REACT_APP_API;
  const navigation = useNavigation();
  const [nickname, setNickname] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RNFetchBlob.config({
          trusty: true,
        })
          .fetch('GET', `${API_URL}/main-page`, {
            'Content-Type': 'application/json',
          });

        const data = await response.json();

        setNickname(data.nickname);
        setProfileImage(data.profileImage);
        setPlants(data.plants);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const calculateDDay = (targetDate) => {
    const koreaTime = dayjs.tz(targetDate, 'Asia/Seoul');
    const today = dayjs.tz(new Date(), 'Asia/Seoul');
  
    const diffDays = koreaTime.startOf('day').diff(today.startOf('day'), 'day');
  
    if (diffDays === 0) return 'D+1';
    return `D${diffDays > 0 ? '+' : ''}${diffDays+1}`;
  };

  return (
      <M.Screen>
        <MainHeader nickname={nickname} profileImage={profileImage} />
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
                {plants.map((plant) => (
                  <SlickBox key={plant.id} name={plant.name} date={calculateDDay(plant.dday)} />
                ))}
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
