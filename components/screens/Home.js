import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginButton from '../utils/LoginButton';
import { TextInput } from 'react-native-gesture-handler';

const Home = ({ navigation, route }) => {

    // const {name, age} = route.params;

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

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
                    }
                })
        } catch (e) {
            console.log(e);
        }
    }

    const updateData = async () => {
        var user = {
            Name: name,
            Age: age
        }
        if (name.length == 0 || age.length == 0) {
            Alert.alert("Warning!", "Name or age fields can't be empty");
        } else {
            try {
                await AsyncStorage.setItem('Data', JSON.stringify(user));
                Alert.alert("Success!", "Values updated");
            } catch (e) {
                console.log(e);
            }
        }
    }

    const removeData = async () => {
        try {
            await AsyncStorage.removeItem('Data');
            navigation.navigate('Login');
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <TouchableWithoutFeedback
            onPress={() => Keyboard.dismiss()}
        >
            <View style={styles.container}>
                <Text style={styles.text}>Home Screen</Text>
                <Text style={styles.text}>My name is {name}</Text>
                <Text style={styles.text}>My age is {age}</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your name"
                    placeholderTextColor='#a2ee10'
                    onChangeText={(value) => setName(value)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter your age"
                    placeholderTextColor='#a2ee10'
                    onChangeText={(value) => setAge(value)}
                />
                <LoginButton
                    style={styles.button}
                    title="Update"
                    onPress={updateData}
                />
                <LoginButton
                    style={{
                        backgroundColor: 'red'
                    }}
                    title="Remove"
                    onPress={removeData}
                />
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#123',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        marginTop: 10
    },
    input: {
        borderWidth: 1,
        borderColor: 'white',
        width: 200,
        marginTop: 10,
        textAlign: 'center',
        color: 'white',
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

export default Home;