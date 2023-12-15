import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Modal, TouchableOpacity } from 'react-native';

const Location = ({ navigation }) => {
  const [outerModalVisible, setOuterModalVisible] = useState(true);
  const [innerModalVisible, setInnerModalVisible] = useState(false);

  const handleNext = () => {
    setOuterModalVisible(true);
    navigation.navigate('Register4');
  };

  const handlePrev = () => {
    console.log('Setting innerModalVisible to true');
    setInnerModalVisible(true);
  };

const handleInnerModalClose = () => {
    console.log('Setting innerModalVisible to false');
    setInnerModalVisible(true);
  };
  

  return (
    <View style={styles.container}>
      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={outerModalVisible}
        onRequestClose={() => setOuterModalVisible(false)}
      > */}
        <View style={styles.outerModalContainer}>
          <View style={styles.outerModalContent}>
            <Image source={require('./assets/svgs/locationinven.png')} style={styles.image} />
            <Text style={styles.text}>Your current pickup location is</Text>
          
          </View>
        
      {/* </Modal> */}
 <Modal
        animationType="slide"
        transparent={true}
        visible={outerModalVisible}
        onRequestClose={() => setOuterModalVisible(false)}
      >
        <View style={styles.innerModalContainer}>
          <View style={styles.innerModalContent}>
            <Text>This is the inner modal</Text>
            <TouchableOpacity onPress={handleInnerModalClose}>
              <Text>Close Inner Modal</Text>
            </TouchableOpacity>
          </View>
          
        </View>
        {/* <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={handlePrev}>
                <Text style={styles.buttonText}>Yes, Modify</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button1} onPress={handleNext}>
                <Text style={styles.buttonText1}>No, Continue</Text>
              </TouchableOpacity>
            </View> */}
        </Modal>
        <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={handlePrev}>
                <Text style={styles.buttonText}>Yes, Modify</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button1} onPress={handleNext}>
                <Text style={styles.buttonText1}>No, Continue</Text>
              </TouchableOpacity>
            </View>
        </View>
  {/* </Modal> */}
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  outerModalContainer: {

    justifyContent: 'center',
    alignItems: 'center',
    marginTop:190,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  outerModalContent: {
    backgroundColor: '#fff',
    padding: 140,
    borderRadius: 20,
    width: '100%',
    alignItems: 'center',
  },
  image: {
    marginTop: 20,
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  text: {
    color: '#005A7B',
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#005A7B',
    padding: 12,
    borderRadius: 25,
    alignItems: 'center',
    width: '48%',
    marginTop:-100,
    marginBottom:50
  },
  button1: {
    backgroundColor: '#005A7B',
    padding: 12,
    borderRadius: 25,
    alignItems: 'center',
    width: '48%',
    marginTop:-100,
    marginBottom:50
  },
  buttonText: {
    color: '#fff',
  },
  buttonText1: {
    color: '#fff',
  },
  innerModalContainer: {
    ...StyleSheet.absoluteFillObject,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerModalContent: {
    backgroundColor: '#F2F6F8',
    padding: 20,
    borderRadius: 20,
    width: '80%',
    alignItems: 'center',
  },
});

export default Location;
