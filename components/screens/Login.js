import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { View, TouchableWithoutFeedback, StyleSheet, Keyboard, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import LoginButton from '../utils/LoginButton';

const Login = ({ navigation }) => {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    const sendData = async () => {
        if (name.length === 0 || age.length === 0) {
            Alert.alert("Warning!", "Name or age fields can't be empty");
        } else {
            try {
                var user = {
                    Name: name,
                    Age: age
                }
                await AsyncStorage.setItem('Data', JSON.stringify(user));
                navigation.navigate('Home');
            } catch (e) {
                console.log(e);
            }
        }
    }

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        try {
            AsyncStorage.getItem("Data")
                .then((value) => {
                    if (value != null) {
                        let user = JSON.parse(value);
                        setName(user.Name)
                        setAge(user.Age)
                        navigation.navigate('Home');
                    }
                })
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder='Enter your name'
                    textAlign='center'
                    onChangeText={(value) => setName(value)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Enter your age'
                    textAlign='center'
                    onChangeText={(value) => setAge(value)}
                />
                <LoginButton
                    style={styles.button}
                    title="Login"
                    onPress={sendData}
                />
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3cf',
        padding: 20,
        borderRadius: 15,
    },
    input: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 20,
    },
    button: {
        width: 200,
        borderWidth: 2,
        borderBottomColor: 'white',
        borderRightColor: 'white',
        borderRadius: 5,
        backgroundColor: '#6a5acd',
        marginTop: 10,
    },
})

export default Login;