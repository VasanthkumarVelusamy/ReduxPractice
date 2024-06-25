import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './Counter';
import { Provider } from 'react-redux';
import store from './Context/Store';

export default function App() {
  return (
    <Provider store={store}>

        <Counter/>

    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
