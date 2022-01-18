import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image
} from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import BasicComponent from './src/components/BasicComponent';
import AppNavigation from './src/navigation';
import CounterScreen from './src/screens/CounterScreen';
import TodoListScreen from './src/screens/TodoListScreen';
import { store, persistor } from './src/store';

const App = () => {

  return (
    <SafeAreaView style={styles.base}>
      {/* <BasicComponent /> */}
      {/* <CounterScreen /> */}
      {/* <TodoListScreen /> */}
      <Provider store={store}>
        <PersistGate persistor={persistor} >
          <AppNavigation />
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  base:{
    display: "flex",
    flex: 1
  },

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

export default App;
