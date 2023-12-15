import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const AddProducts = ({ navigation }) => {
  return (
    <View style={styles.modalContainer}>
      <Image
        source={require('./assets/svgs/scrap.png')}
        style={styles.image}
      />
      <Text style={styles.description}>
        Sell scrap to contribute 
        for a 
      </Text>
      <Text style={styles.description}>
        circular economy
      </Text>
      <TouchableOpacity style={styles.button}>
      <Image
        source={require('./assets/svgs/add.png')}
        style={styles.image}
      />
        <Text style={styles.buttonText}>  Add Scrap Product</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:220,
  },
  image: {
   
  },
  description: {
    marginTop: 10,
    marginLeft:20,
    width: '100%', textAlign: 'center', color: '#005A7B', fontSize: 18, fontFamily: 'Inter Tight', fontWeight: '700'
  },
  button: {
    marginTop: 20,
    backgroundColor: '#005A7B', // Customize the button styles
    padding: 10,
    borderRadius: 5,
    width: 258, height: 54, left: 0, top: 0, borderRadius: 31.94
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
    marginBottom:-10,
    marginTop:-23,
    textAlign: 'center', color: 'white', fontSize: 18, fontFamily: 'Inter Tight', fontWeight: '700', wordWrap: 'break-word'
  },
//   image:{
//     width:10
//   }
});

export default AddProducts;
