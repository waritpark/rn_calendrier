import { React } from 'react';
import { Pressable, SafeAreaView, StyleSheet } from 'react-native';
import SignInScreen from './src/screens/SignInScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <SignInScreen />
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#333333',
  },
  // text: {
  //   fontWeight: 'bold',
  //   color: 'white',
  // },
});



export default App;