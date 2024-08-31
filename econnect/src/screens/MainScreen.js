import React from 'react';
import * as M from '../styles/MainStyle';

import MainHeader from '../components/MainHeader';

const MainScreen = () => {
  return (
      <M.Screen>
        <MainHeader/>
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

          </M.Slick>
        </M.Plants>
        <M.Menu>
          <M.MTitle>Menu</M.MTitle>

        </M.Menu>
        
      </M.Screen>
  );
};

export default MainScreen;
