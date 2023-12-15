import React, { useState } from 'react';
import { View, TextInput, Text, Image, StyleSheet, Modal, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Register4 = ({}) => {
  const [name, setName] = useState('');
  const [modalVisible, setModalVisible] = useState(true);
  const [email,setEmail] = useState('');
  const navigation = useNavigation();
  const isValidEmail = (email) => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleSkip= () => {
    navigation.navigate('Register5');
  };
  const handleNext = () => {
    if (isValidEmail()) {
      navigation.navigate('Register5');
    } else {
      console.log('Invalid email address');

    }
  };

  const handlePrev = () => {
    navigation.navigate('Register3');
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
        <Image
              source={require('./assets/svgs/symbol.png')}
              style={styles.closeIcon}
            />
          <Text style={styles.heading}>Register</Text>

          <Image
            source={require('./assets/svgs/register4.png')}
            style={styles.image}
          />
          <Text style={styles.text}>Your email to communicate</Text>

          <Text style={styles.label}>Email ID</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
          <Text style={styles.label1}  title="Register5" onPress={handleSkip}>Skip & Continue</Text>

          <View style={styles.buttonContainer}>
            <View
              style={styles.button}
            >
              <Text style={styles.buttonText} title="Register3" onPress={handlePrev}>Prev</Text>
            </View>

            <View
              style={styles.button1}             
           
            >
              <Text style={styles.buttonText1} title="Register5" onPress={handleNext}>Next</Text>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop:420
  },
  heading: {
    textAlign: 'center',
    color: '#005A7B',
    fontSize: 18,
    marginBottom: 10,
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
  label: {
    color: '#818694',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
  },
  label1: {
    color: '#005A7B',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 6,
    width: '100%',
  },

  closeIcon: {
    width: 20,
    height: 20,
    marginRight:370
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    width: '48%',
    borderColor: '#005A7B',
    borderWidth: 1,
  },
  button1: {
    backgroundColor: '#005A7B',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    width: '48%',
    borderColor: '#005A7B',
    borderWidth: 1,
  },
  buttonText: {
    color: '#005A7B',
  },
  closeIcon: {
    width: 20,
    height: 20,
    marginRight:370
  },
   buttonText1: {
    color: '#fff',
  },
});

export default Register4;
