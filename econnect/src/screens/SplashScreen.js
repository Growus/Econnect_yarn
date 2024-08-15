import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/SplashStyle';


const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
        navigation.replace('Main');
        }, 2000); // 2초 후 메인 화면으로 이동
    }, [navigation]);

    return (
        <View style={styles.container}>
        <Text style={styles.text}>Splash Screen</Text>
        </View>
    );
};

export default SplashScreen;
