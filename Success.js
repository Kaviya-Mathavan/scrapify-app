
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Success = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.successContainer}>
        <Image
          source={require('./assets/svgs/Right.png')}
          style={styles.image}
        />
        <Text style={styles.successText}>OTP Validation Successful!</Text>
        <Text style={styles.infoText}>
          Market page with sellers/buyers is            getting ready...
        </Text>
      
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    justifyContent: 'center',
    alignItems: 'center',
  },
  successContainer: {
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginTop:170
  },
  successText: {
    color: '#005A7B',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 16,
    textAlign: 'center',
  },
  infoText: {
    color: '#3B4357',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 8,
    textAlign: 'center',
    marginLeft:70,
    marginRight:40
  },
});

export default Success;
