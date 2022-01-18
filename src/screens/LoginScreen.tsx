import React, { useState } from 'react'
import { 
    Alert, View, Text, StyleSheet, 
    TextInput, Button
} from 'react-native'

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = () => {
        if (email === 'victor@binus.edu' && password === 'a') {
            // Login Success
        }
        else {
            // Login failed
            Alert.alert('Error', 'Username or password is incorrect', [
                { text: 'Ok', onPress: () => {} }
            ])
        }
    }

    const isTextShown = false;

    return (
        <View style={styles.container}>
            {/* {
                isTextShown ? <Text>asdfasdf</Text> : <></>
            }
            {
                isTextShown && <Text>asdfasdf</Text>
            } */}
            <Text>Email:</Text>
            <TextInput
                onChangeText={setEmail}
                value={email}
                style={styles.input}
            />
            <Text>Password:</Text>
            <TextInput
                onChangeText={setPassword}
                value={password}
                style={styles.input}
                secureTextEntry={true}
            />
            <Button title='Login' onPress={onLogin} />
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        padding: 12
    },
    input: {
        height: 40,
        marginVertical: 12,
        borderWidth: 1,
        padding: 12
    }
})