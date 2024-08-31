import React from 'react';
import * as M from '../styles/components/MainButtonStyle';

const MainButton = ({label, onPress}) => {
    return (
        <M.Button onPress={onPress}>
            <M.Left>
                <M.Icon label={label}/>
                <M.Label>{label}</M.Label>
            </M.Left>
            <M.ArrowIcon/>
        </M.Button>
    );
};

export default MainButton;
