// rfne

import React, { useState, useEffect } from 'react'
import { FlatList, View, Text, StyleSheet, ListRenderItemInfo, TextInput } from 'react-native'
import { ITodoListItem } from '../interfaces';

const TodoListScreen = () => {

    const [todos, setTodos] = useState<ITodoListItem[]>([])

    useEffect(() => {
        fetchTodolist()
    }, [])

    const fetchTodolist = () => {
        setTodos(dummyTodos)
    }

    const renderTodoItem = (renderItemInfo: ListRenderItemInfo<ITodoListItem>) => {
        const { item, index } = renderItemInfo;
        return (
            <View style={styles.itemContainer}>
                <Text>{item.id}</Text>
                <Text>{item.title}</Text>
                <Text>{item.description}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={todos}
                renderItem={renderTodoItem}
            />
        </View>
    )
}

export default TodoListScreen

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
    },
    itemContainer: {
        padding: 12
    }
})

const dummyTodos: ITodoListItem[] = [
    {
        id: 1,
        title: 'Title 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quisquam ratione nesciunt tenetur voluptatibus assumenda obcaecati aliquid eaque aut? Id velit libero officia cupiditate magni sequi, facere magnam dolore nihil.' 
    },
    {
        id: 2,
        title: 'Title 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quisquam ratione nesciunt tenetur voluptatibus assumenda obcaecati aliquid eaque aut? Id velit libero officia cupiditate magni sequi, facere magnam dolore nihil.' 
    },
    {
        id: 3,
        title: 'Title 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quisquam ratione nesciunt tenetur voluptatibus assumenda obcaecati aliquid eaque aut? Id velit libero officia cupiditate magni sequi, facere magnam dolore nihil.' 
    },
    {
        id: 4,
        title: 'Title 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quisquam ratione nesciunt tenetur voluptatibus assumenda obcaecati aliquid eaque aut? Id velit libero officia cupiditate magni sequi, facere magnam dolore nihil.' 
    },
    {
        id: 5,
        title: 'Title 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quisquam ratione nesciunt tenetur voluptatibus assumenda obcaecati aliquid eaque aut? Id velit libero officia cupiditate magni sequi, facere magnam dolore nihil.' 
    },
    {
        id: 6,
        title: 'Title 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quisquam ratione nesciunt tenetur voluptatibus assumenda obcaecati aliquid eaque aut? Id velit libero officia cupiditate magni sequi, facere magnam dolore nihil.' 
    },
    {
        id: 7,
        title: 'Title 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quisquam ratione nesciunt tenetur voluptatibus assumenda obcaecati aliquid eaque aut? Id velit libero officia cupiditate magni sequi, facere magnam dolore nihil.' 
    }
]