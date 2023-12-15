import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

const Navbarr= ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.menuIcon}>
        <Text style={styles.symbol}>☰</Text>
      </TouchableOpacity>
      <Image style={styles.image} source={require('./assets/svgs/FISH.png')}/>
      <Text style={styles.heading}>Scrapify</Text>
        <Text style={styles.loginText}>Login</Text>
     
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    // backgroundColor: '#f0f0f0',
    backgroundColor: '#02C784', 
},
menuIcon: {
  padding: 10,
  color: '#fff'
},
Image: {
  padding: 10,
},
heading: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#fff',
},
symbol: {
// fontSize: 18,
// fontWeight: 'bold',
color: '#fff'
},

  loginText: {
    padding: 10,
    color: '#fff',
},
});

export default Navbarr;





