import React from 'react'
import { View, Text, Button } from 'react-native'

interface IChangeBackgroundColorProps {
    counter: number;
    toggleBackgroundColor: (backgroundColor: string) => void;
}

const ChangeBackgroundColor = (props: IChangeBackgroundColorProps) => {

    const toggleBackground = () => {
        const { counter, toggleBackgroundColor } = props;
        if (counter < 5) {
            toggleBackgroundColor('white')
        }
        else {
            toggleBackgroundColor('green')
        }
    }

    return (
        <View style={{ marginTop: 10 }}>
            <Button 
                title={'Toggle Background Color'} 
                onPress={toggleBackground}
            />
        </View>
    )
}

export default ChangeBackgroundColor
