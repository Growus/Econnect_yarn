import React, {useEffect, useState} from 'react';
import AppNavigator from './src/routes/AppNavigator';
import SplashScreen from 'react-native-splash-screen';
import SplashScreenE from './src/screens/SplashScreen';

const App = () => {
  const [appLoaded, setAppLoaded] = useState(false); //앱 로딩된 상태인가요?

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setAppLoaded(true);
    }, 3000); // 3초간 appLoaded 상태가 false이기 때문에
  }, []);

  return appLoaded ? <AppNavigator /> : <SplashScreenE />;
};

export default App;
