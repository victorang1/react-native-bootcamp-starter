import React from 'react';
import { 
    View, Text, Button, TouchableOpacity, 
    Image, StyleSheet 
} from 'react-native';

// Ada 2 jenis component -> Class Component & Functional Component


// Functional Component
const BasicComponent = () => {

    const buttonOnPress = () => {
        console.log("contoh function")
    }
    
    const imageSource = {
        uri:"https://reactnative.dev/img/tiny_logo.png"
    }
    
    const localImageSource = require('../../images/ASD.png')

    return (
        <View style={styles.backgroundView}>
            <Text style={styles.sampleText}>Hello world!</Text>
            <Button title='Tombol' onPress={buttonOnPress}></Button>
            <TouchableOpacity onPress={buttonOnPress}>
            <View style={styles.button}>
                <Text>Touchable</Text>
            </View>
            </TouchableOpacity>
            <Image 
                style={styles.image}
                source={imageSource}
            ></Image>
            <Image 
                style={styles.image}
                source={localImageSource}
            ></Image>
        </View>
    )
}

export default BasicComponent;

const styles = StyleSheet.create({
    backgroundView: {
      backgroundColor: "grey",
      height: "50%"
    },
  
    sampleText: {
      color: "white",
      fontSize: 24
    },
  
    button: {
      backgroundColor: "red",
      height: 50,
      width: 50
    },
  
    image: {
      height: 100,
      width: 100
    }
  });