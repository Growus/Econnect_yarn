import React from 'react';
import * as S from '../styles/components/SlickBoxStyle';

const SlickBox = ({name, date, onPress}) => {
    return (
        <S.Box onPress={onPress}>
            <S.Img/>
            <S.Label>
                <S.Name>{name}</S.Name>
                <S.Date>D+{date}</S.Date>
            </S.Label>
        </S.Box>
    );
};

export default SlickBox;
