import React, {useRef, useState} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import WebView from 'react-native-webview';
import * as W from '../styles/WebViewStyle';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const WebViewQNAScreen = () => {
  const webViewRef = useRef(null); // useRef 훅으로 ref 생성
  const [navState, setNavState] = useState(null);

  return (
    <W.SafeAreaView>
      <WebView
        ref={webViewRef}
        style={styles.webview}
        source={{
          uri: 'https://mogg22.notion.site/5df82b6a5e364555af02fa329c8fb9b6?pvs=4',
        }}
        onNavigationStateChange={e => setNavState(e)}
      />
    </W.SafeAreaView>
  );
};

export default WebViewQNAScreen;

const styles = StyleSheet.create({
  webview: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
  },
});
