//rnfe
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native'
import { useDispatch } from 'react-redux';
import { IPostItem } from '../interfaces';
import { RootStackParamList } from '../navigation/RootStackParamList';
import { addPost } from '../store/PostReducer/PostReducer';

const AddPostScreen = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const dispatch = useDispatch();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'AddPostScreen'>>();

    const handleOnAdd = () => {
        const addedPost: IPostItem = {
            id: 0,
            title: title,
            body: body
        }
        dispatch(addPost(addedPost));
        Alert.alert('Info', 'Add post success', [
            { text: 'Ok', onPress: () => navigation.goBack() }
        ])
    }

    return (
        <View style={styles.container}>
            <Text>Title:</Text>
            <TextInput
                onChangeText={setTitle}
                value={title}
                style={styles.input}
                placeholder={'Input post title'}
            />
            <Text>Body:</Text>
            <TextInput
                onChangeText={setBody}
                value={body}
                style={[styles.input, styles.textArea]}
                placeholder={'Input post body'}
                multiline={true}
            />
            <Button title='Add Post' onPress={handleOnAdd} />
        </View>
    )
}

export default AddPostScreen

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
    },
    textArea: {
        height: 120,
        textAlignVertical: 'top'
    }
})