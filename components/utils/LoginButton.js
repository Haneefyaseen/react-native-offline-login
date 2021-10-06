import React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";

const LoginButton = (props) => {

    const title = '';

    return (
        <View style={styles.container}>
            <Pressable
                style={props.style}
                onPress={props.onPress}
                android_ripple={{
                    color: 'cornsilk'
                }}
            >
                <Text style={styles.text}>
                    {props.title}
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        padding: 5,
    }
})

export default LoginButton;