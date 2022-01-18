import React from 'react';
import { 
    NavigationContainer 
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CounterScreen from '../screens/CounterScreen';
import TodoListScreen from '../screens/TodoListScreen';
import { RootStackParamList } from './RootStackParamList';
import DetailTodoScreen from '../screens/DetailTodoScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = () => {

    const isLoggedIn = false;

    return (
        <NavigationContainer>
            <Stack.Navigator 
                // screenOptions={{ headerShown: false }} 
                initialRouteName={"LoginScreen"}
            >
                {
                    isLoggedIn ? (
                        <>
                            <Stack.Screen name={"HomeScreen"} component={HomeScreen} />
                            <Stack.Screen name={"CounterScreen"} component={CounterScreen} />
                            <Stack.Screen name={"TodoListScreen"} component={TodoListScreen} />
                            <Stack.Screen name={"DetailTodoScreen"} component={DetailTodoScreen} />
                        </>
                    ) : (
                        <Stack.Screen name={"LoginScreen"} component={LoginScreen} />
                    )
                }
                
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;