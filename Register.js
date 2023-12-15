import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, StyleSheet, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Register = ({ }) => {

  const [name, setName] = useState('');
  const [modalVisible, setModalVisible] = useState(true);
  const navigation = useNavigation();

  const handleNext = () => {
    if (name.trim() !== '') {
      navigation.navigate('Register2');
    } else {

      alert('Please enter your Name / Shop Name');
    }
  };
  

  const handleNavigate = () => {
    console.log("Navigating to LoginScreen"); 
    navigation.navigate('LoginScreen');
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
            source={require('./assets/svgs/register1.png')}
            style={styles.image}
          />
          <Text style={styles.text}>
            Marketplace to connect with buyers
          </Text>

          <Text style={styles.label}>Enter your Name / Shop Name*</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
          />

          <TouchableOpacity style={styles.button}  title="Register2" onPress={handleNext}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>

          <Text style={styles.already}>
  <Text style={styles.registerUserText}>Registered User?</Text>
  {' '}
  <Text style={styles.loginText} title="LoginScreen" onPress={handleNavigate}>Login</Text>
</Text>
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
  cornerSymbolContainer: {
    position: 'absolute',
    top: 20, // Adjust the top value
    right: 20,
  },
  cornerSymbol: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 30,
    marginBottom: 10,
    marginTop: 300,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  heading: {
    textAlign: 'center',
    color: '#005A7B',
    fontSize: 22,
    fontFamily: 'Inter Tight',
    fontWeight: '700',
    marginBottom: 20,
  },
  image: {
    marginTop: 20,
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  text: {
    textAlign: 'center',
    color: '#3B4357',
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 60,
    marginRight:20,
    marginLeft:55,
    textAlign: 'center',fontFamily: 'Inter Tight', lineHeight: 32, wordWrap: 'break-word'
  },
  label: {
    color: '#818694',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
    marginRight:110,

  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 100,
    paddingLeft: 10,
    borderRadius: 6,
    width: '100%',
  },
  button: {
    backgroundColor: '#005A7B',
    padding: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: -40,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
  },
  already: {

    marginTop: 10,
  },
  loginText: {
    color: '#005A7B',
    fontSize:16
  },
  registerUserText: {
    color: '#838383', 
    fontSize:16
  },
  closeIcon: {
    width: 20,
    height: 20,
    marginRight:370
  },
});

export default Register;
