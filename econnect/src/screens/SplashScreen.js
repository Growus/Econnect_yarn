import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/SplashStyle';


const SplashScreen = () => {
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Splash Screen</Text>
        </View>
    );
};

export default SplashScreen;
