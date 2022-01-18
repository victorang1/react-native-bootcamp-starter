import React, { useEffect, useState } from 'react'
import { 
    ActivityIndicator,
    View, Text, StyleSheet, FlatList, 
    ListRenderItemInfo, TouchableOpacity, Button 
} from 'react-native'
import axios from 'axios';
import { IPostItem } from '../interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { savePost } from '../store/PostReducer/PostReducer';
import { RootState } from '../store';
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootStackParamList';

const HomeScreen = () => {

    useEffect(() => {
        if (postState.posts.length === 0) {
            fetchPosts();
        }
    }, [])

    const postState = useSelector((state: RootState) => state.post);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>>();

    // Asynchronous
    const fetchPosts = async () => {
        // setiap pemanggilan api perlu wrap dengan try/catch
        try {
            setLoading(true);
            const url = 'https://jsonplaceholder.typicode.com/posts';
            const response = await axios.get<IPostItem[]>(url);

            // handle responsenya
            dispatch(savePost(response.data));
        } catch (ex) {
            console.log(ex);
        } finally {
            setLoading(false);
        }
    }

    const renderPostItem = (renderItemInfo: ListRenderItemInfo<IPostItem>) => {
        const { item } = renderItemInfo;
        return (
            <TouchableOpacity >
                <View style={styles.itemContainer}>
                    <Text>{item.id}</Text>
                    <Text>{item.title}</Text>
                    <Text>{item.body}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const addPost = () => {
        navigation.navigate('AddPostScreen');
    }

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size='large' />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={postState.posts}
                renderItem={renderPostItem}
                ListHeaderComponent={() => {
                    return <Button title='Add Post' onPress={addPost} />
                }}
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1
    },
    itemContainer: {
        padding: 12
    },
    loadingContainer: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})