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
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { Button } from 'react-native';
import { logout } from '../store/AuthReducer/AuthReducer';
import AddPostScreen from '../screens/AddPostScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = () => {

    // useSelector untuk akses state di redux

    const auth = useSelector((state: RootState) => state.auth);
    const isLoggedIn = auth.isLoggedIn;

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logout());
    }

    return (
        <NavigationContainer>
            <Stack.Navigator 
                // screenOptions={{ headerShown: false }} 
                initialRouteName={"LoginScreen"}
            >
                {
                    isLoggedIn ? (
                        <>
                            <Stack.Screen 
                                name={"HomeScreen"} 
                                component={HomeScreen} 
                                options={{
                                    headerRight: () => (
                                        <Button
                                            title='Logout'
                                            onPress={onLogout}
                                        />
                                    )
                                }}
                            />
                            <Stack.Screen name={"CounterScreen"} component={CounterScreen} />
                            <Stack.Screen name={"TodoListScreen"} component={TodoListScreen} />
                            <Stack.Screen name={"DetailTodoScreen"} component={DetailTodoScreen} />
                            <Stack.Screen name={"AddPostScreen"} component={AddPostScreen} />
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