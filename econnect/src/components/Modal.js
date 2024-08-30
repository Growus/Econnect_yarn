import React from 'react';
import {Alert, Modal as RNModal} from 'react-native'; // React Native의 기본 Modal 사용
import * as M from '../styles/components/ModalStyle';

const Modal = ({modalVisible, setModalVisible, label}) => {
  return (
    <RNModal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(false);
      }}>
      <M.CenteredView>
        <M.ModalContent>
          <M.Text>
            인증 {label} 보내드렸습니다.{'\n'}메일함에서 확인해주세요!
          </M.Text>
          <M.Pressable onPress={() => setModalVisible(false)}>
            <M.PText>CLOSE</M.PText>
          </M.Pressable>
        </M.ModalContent>
      </M.CenteredView>
    </RNModal>
  );
};

export default Modal;
