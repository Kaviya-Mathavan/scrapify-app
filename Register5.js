import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, StyleSheet, Modal, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const LoginOtpScreen = ({ route }) => {
  const { phoneNumber } = route.params;
  return (
    <View>
      <Text>Verification code sent to: {phoneNumber}</Text>

    </View>
  );
};
const Register3 = ({}) => {
  const [name, setName] = useState('');
  const [modalVisible, setModalVisible] = useState(true);
    const navigation = useNavigation();
    const [phoneNumber,setPhoneNumber] = useState('');

    

const handleGetOTP = () => {
 
  if (!phoneNumber || !/^\+?[0-9]{10,}$/.test(phoneNumber)) {
    alert('Please enter a valid phone number');
    return;
  }

  navigation.navigate('RegisterOtp', { phoneNumber });
};


  const handlePrev = () => {
    navigation.navigate('Register4');
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
            source={require('./assets/svgs/register5.png')}
            style={styles.image}
          />
          <Text style={styles.text}>Your mobile number to 
send updates</Text>

          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />

<View style={styles.buttonContainer}>
            <View
              style={styles.button}
            >
              <Text style={styles.buttonText} title="Register4" onPress={handlePrev}>Prev</Text>
            </View>

            <View
              style={styles.button1}             
           
            >
              <Text style={styles.buttonText1} title="RegisterOtp" onPress={handleGetOTP}>Get OTP</Text>
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
    marginTop:430
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
    marginRight:380
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

   buttonText1: {
    color: '#fff',
  },
});

export default Register3;
