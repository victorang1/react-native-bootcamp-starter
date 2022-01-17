import React from 'react';
import { 
    NavigationContainer 
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CounterScreen from '../screens/CounterScreen';
import TodoListScreen from '../screens/TodoListScreen';
import { RootStackParamList } from './RootStackParamList';
import DetailTodoScreen from '../screens/DetailTodoScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator 
                // screenOptions={{ headerShown: false }} 
                initialRouteName={"CounterScreen"}
            >
                <Stack.Screen name={"CounterScreen"} component={CounterScreen} />
                <Stack.Screen name={"TodoListScreen"} component={TodoListScreen} />
                <Stack.Screen name={"DetailTodoScreen"} component={DetailTodoScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;