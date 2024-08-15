import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles/StartStyle';

const StartScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Main Screen</Text>
        <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
        <Button title="Go to Signup" onPress={() => navigation.navigate('Signup')} />
        </View>
    );
};

export default StartScreen;
