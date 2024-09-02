import React from 'react';
import * as M from '../styles/components/DetailButtonStyle';

const DetailButton = ({ label, onPress }) => {
    return (
        <M.Button onPress={onPress} label={label}>
            <M.Icon label={label} />
            {label !== '삭제' && <M.Label>{label}</M.Label>}
        </M.Button>
    );
};

export default DetailButton;
