// shortcut rfne

import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react'
import { 
    View, Text, 
    StyleSheet, TouchableOpacity 
} from 'react-native'
import ChangeBackgroundColor from '../components/ChangeBackgroundColor';
import { RootStackParamList } from '../navigation/RootStackParamList';

// State and Props
// State -> value yang ada di satu component
// Props -> state yang dilempar ke component lain, 
//          value nya gabisa diubah (immutable)
const CounterScreen = () => {
    const [counter, setCounter] = useState(10);
    const [backgroundColor, setBackgroundColor] = useState('green');

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'CounterScreen'>>();

    useEffect(() => {
        // jalanin function di dalem ini
        if (counter === 5) {
            setBackgroundColor('gray');
        }
    }, [counter]);

    useEffect(() => {
        // waktu pertama kali halaman di load, mau ngejalanin sesuatu
        // example: panggil API, dll
    }, [])

    // function
    const increaseCounter = () => {
        setCounter(prevCounter => prevCounter + 1);
    }

    const decreaseCounter = () => {
        setCounter(prevCounter => prevCounter - 1);
    }

    const toggleBackgroundColor = (backgroundColor: string) => {
        setBackgroundColor(backgroundColor);
    }

    const navigateToTodoList = () => {
        navigation.navigate("TodoListScreen");
    }

    return (
        <View style={[style.container, { backgroundColor: backgroundColor }]}>
            <Text style={[style.textCounter, style.textRed]}>
                Counter: {counter}
            </Text>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
                <TouchableOpacity 
                    style={style.button}
                    onPress={increaseCounter}
                >
                    <Text style={style.buttonText}>Increase Counter</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={style.button}
                    onPress={decreaseCounter}
                >
                    <Text style={style.buttonText}>Decrease Counter</Text>
                </TouchableOpacity>
            </View>
            <ChangeBackgroundColor 
                counter={counter}
                toggleBackgroundColor={toggleBackgroundColor}
            />
            <TouchableOpacity 
                    style={style.button}
                    onPress={navigateToTodoList}
                >
                <Text style={style.buttonText}>
                    Navigate to Todolist Screen
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default CounterScreen

const style = StyleSheet.create({
    container: {
        padding: 16,
        display: 'flex',
        flex: 1
    },
    textCounter: {
        fontSize: 20,
        color: 'black'
    },
    textRed: {
        color: 'red'
    },
    button: {
        backgroundColor: 'red',
        padding: 12,
        display: 'flex',
        alignItems: 'center',
        marginTop: 8,
        marginEnd: 8
    },
    buttonText: {
        color: 'white'
    }
})
