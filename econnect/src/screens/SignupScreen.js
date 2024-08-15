import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles/SignupStyle';

const SignupScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Signup Screen</Text>
        <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
        </View>
    );
};

export default SignupScreen;
