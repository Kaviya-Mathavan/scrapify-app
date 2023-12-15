import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginScreen from './LoginScreen';
import Navbarr from './Navbarr'; 
import Menubar from './Menubar'; 
import { useNavigation } from '@react-navigation/native';
const App = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Navbarr  />
      {/* <LoginScreen/> */}
      <Menubar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',

  },
});

export default App;