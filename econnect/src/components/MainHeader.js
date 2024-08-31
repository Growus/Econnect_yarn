import React from 'react';
import styled from 'styled-components/native';

import palette from '../lib/styles/colorPalette';
import { RegularText, SemiBoldText } from '../components/CustomText';

import NotificationImg from '../assets/img/notification.svg';
import NotificationDotImg from '../assets/img/notification_dot.svg';

const ARScreen = () => {
    const nickname = "ECONNECT";

    return (
        <Header>
            <LeftBox>
                <ProfileBox>
                    <Profile/>
                </ProfileBox>
                <Greet>Hello, <Name>{nickname}</Name></Greet>
            </LeftBox>
            <Notification/>
        </Header>
    );
};

export default ARScreen;

const Header = styled.View`
    width: 100%;
    height: 79px;
    flex-direction: row;
    align-items: center;
    padding: 12px 26px;
    justify-content: space-between;
`;

const LeftBox = styled.View`
    flex-direction: row;
    align-items: center;
`;

const ProfileBox = styled.View`
    width: 55px;
    height: 55px;
    border-radius: 50px;
    background-color: #FFFBFB;
    border: 1px #A08864 solid;
    margin-right: 15px;
`;

const Profile = styled.Image``;

const Greet = styled(RegularText)`
    color: ${palette.black};
    font-size: 24px;
    margin-right: 10px;
`;

const Name = styled(SemiBoldText)`
    color: ${palette.black};
    font-size: 24px;
`;

const Notification = styled(NotificationImg)`
    width: 26px;
    height: 27px;
`;
