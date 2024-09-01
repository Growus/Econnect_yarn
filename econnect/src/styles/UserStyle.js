import styled from 'styled-components/native';
import palette from '../lib/styles/colorPalette';
import {SemiBoldText, RegularText, MediumText} from '../components/CustomText';

import pencil from '../assets/img/pencil.svg';

export const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: ${palette.backGreen};
`;

export const ProfileImg = styled.Image`
  width: 118px;
  height: 118px;
  border-radius: 59px;
  overflow: hidden;
  margin-top: 35px;
  margin-bottom: 28px;
`;

export const Inform = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin-bottom: 15px;
`;

export const Level = styled(SemiBoldText)`
  color: ${palette.brown};
  font-size: 15px;
`;

export const Nickname = styled(SemiBoldText)`
  color: ${palette.black};
  font-size: 20px;
`;

export const Message = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3px;
  margin-bottom: 18px;
`;

export const Pencil = styled(pencil)`
  width: auto;
  height: 14px;
`;

export const MContent = styled.View`
  justify-content: center;
  gap: 3px;
`;

export const MText = styled(RegularText)`
  color: ${palette.black};
  font-size: 12px;
  padding: 0 6px;
`;

export const MLine = styled.View`
  width: fit-content;
  height: 1px;
  background-color: ${palette.brown};
`;

export const GreenLine = styled.View`
  width: 318px;
  height: 1px;
  background-color: rgba(90, 175, 118, 0.43);
  margin: 12px 0;
`;

export const Btns = styled.View`
  width: 318px;
  padding: 0 13px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 22px;

  position: absolute;
  bottom: 30px;
`;

export const Btn = styled.Pressable``;

export const LogoutText = styled(MediumText)`
  color: ${palette.black};
  font-size: 14px;
`;

export const WithdrawText = styled(MediumText)`
  color: ${palette.red};
  font-size: 14px;
`;
