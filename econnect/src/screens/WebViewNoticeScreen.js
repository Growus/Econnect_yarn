import React, {useRef, useState} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import WebView from 'react-native-webview';
import * as W from '../styles/WebViewStyle';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const WebViewNoticeScreen = () => {
  const webViewRef = useRef(null); // useRef 훅으로 ref 생성
  const [navState, setNavState] = useState(null);

  return (
    <W.SafeAreaView>
      <WebView
        ref={webViewRef}
        style={styles.webview}
        source={{
          uri: 'https://mogg22.notion.site/9f9927d83f8542dd904dd3e3cbbbf18d?pvs=4',
        }}
        onNavigationStateChange={e => setNavState(e)}
      />
    </W.SafeAreaView>
  );
};

export default WebViewNoticeScreen;

const styles = StyleSheet.create({
  webview: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
  },
});
