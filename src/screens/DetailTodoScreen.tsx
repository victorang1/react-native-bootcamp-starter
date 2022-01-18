import { RouteProp, useRoute } from '@react-navigation/core'
import React from 'react'
import { View, Text } from 'react-native'
import { RootStackParamList } from '../navigation/RootStackParamList'

const DetailTodoScreen = () => {

    const route = useRoute<RouteProp<RootStackParamList, 'DetailTodoScreen'>>();
    
    const { id, title, description } = route.params.item;

    return (
        <View>
            <Text>ID: {id}</Text>
            <Text>Title: {title}</Text>
            <Text>Description: {description}</Text>
        </View>
    )
}

export default DetailTodoScreen
