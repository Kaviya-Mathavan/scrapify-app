import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SwitchSelector from 'react-native-switch-selector';

const Stack = createStackNavigator();

const LoginOtpScreen = ({ route }) => {
  const { phoneNumber } = route.params;
  return (
    <View>
      <Text>Verification code sent to: {phoneNumber}</Text>

    </View>
  );
};

const LoginScreen = ({ visible, onClose }) => {
  const [selectedOption, setSelectedOption] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const navigation = useNavigation();

  const options = [
    { label: 'Seller', value: 0 },
    { label: 'Buyer', value: 1 },
  ];

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  const handleGetOTP = () => {
 
    if (!phoneNumber || !/^\+?[0-9]{10,}$/.test(phoneNumber)) {
      alert('Please enter a valid phone number');
      return;
    }

    navigation.navigate('LoginOtp', { phoneNumber });
  };
  const handleNavigate = () => {
    navigation.navigate('Register'); 
  };

  const handleLoginWithGoogle = () => {
    console.log('Logging in with Google');

  };

  const handleButtonPress = () => {
    setIsButtonPressed(true);
  };

  const handleButtonRelease = () => {
    setIsButtonPressed(false);
  };

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingContainer}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image
              source={require('./assets/svgs/symbol.png')}
              style={styles.closeIcon}
            />
            <Text style={styles.heading}>Login</Text>

            <SwitchSelector
              options={options}
              initial={selectedOption}
              onPress={handleOptionChange}
              style={styles.switchSelector}
              buttonColor="#005A7B"
              borderColor="#00FF00"
              fontSize={16}
              height={40}
              buttonMargin={2}
              width={2}
            />

            <Text style={styles.phone}>Phone Number</Text>
            <TextInput
              style={styles.input}
              placeholder="+91 XXXXX XXXXX"
              keyboardType="phone-pad"
              onChangeText={(text) => setPhoneNumber(text)}
            />

            <TouchableWithoutFeedback
              onPressIn={handleButtonPress}
              onPressOut={handleButtonRelease}
            >
              <View
                style={[
                  styles.button1,
                  isButtonPressed && styles.buttonPressed,
                ]}
              >
                <Text
                  style={[
                    styles.buttonText,
                    isButtonPressed && styles.buttonTextPressed,
                  ]}
                  title="LoginOtp" onPress={handleGetOTP} 
                >
                  Get OTP
                </Text>
              </View>
            </TouchableWithoutFeedback>

            <TouchableOpacity
              style={styles.button}
              onPress={handleLoginWithGoogle}
            >
              <Text style={styles.buttonText1}>Login with </Text>
              <Image
                source={require('./assets/svgs/googleicon.png')}
                style={styles.googleLogo}
              />
            </TouchableOpacity>

            <View style={styles.registerContainer}>
              <Text style={styles.registerText}>
                Don’t have an account?{' '}
              </Text>
              <TouchableOpacity onPress={onClose}>
                <Text style={styles.registerLink} title="LoginOtp" onPress={handleNavigate} >Register Here</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
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
    height: '50%',
    marginTop: 410,
  },
  heading: {
    fontSize: 22,
    fontFamily: 'Inter Tight',
    fontWeight: '700',
    color: '#005A7B',
    marginBottom: 10,
    wordWrap: 'break-word',
    alignSelf: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    marginTop: 3,
    borderRadius: 6,
    overflow: 'hidden',
  },
  keyboardAvoidingContainer: {
    flex: 1,
    marginBottom: 200,
  },
  button1: {
    backgroundColor: '#005A7B',
    padding: 20,
    borderRadius: 31.94,
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    height: 54,
    borderColor: '#005A7B',
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 31.94,
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    height: 54,
    borderColor: '#005A7B',
    borderWidth: 1,
  },
  buttonPressed: {
    backgroundColor: '#005A7B',
    borderColor: '#005A7B',
  },
  buttonText: {
    color: '#fff',
    marginLeft: 120,
    textAlign: 'center',
    height: 27,
    fontSize: 18,
  },
  buttonTextPressed: {
    color: '#fff',
  },
  buttonText1: {
    color: '#005A7B',
    marginLeft: 105,
    textAlign: 'center',
    height: 27,
    fontSize: 18,
  },
  googleLogo: {
    width: 20,
    height: 20,
  },
  phone: {
    color: '#818694',
    fontSize: 16,
    fontFamily: 'Inter Tight',
    fontWeight: '500',
    wordWrap: 'break-word',
    marginTop: 20,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },
  registerText: {
    color: '#818694',
    fontSize: 16,
    fontFamily: 'Inter Tight',
    fontWeight: '500',
  },
  registerLink: {
    color: '#005A7B',
    fontSize: 16,
    fontFamily: 'Inter Tight',
    fontWeight: '700',
  },
  switchSelector: {
    borderColor: '#005A7B',
    borderWidth: 2,
    borderRadius: 30,
    fontWeight: '700',
    width: 184,
    marginLeft: 90,
    marginTop: 20,
  },
  switchPressed: {
    backgroundColor: '#005A7B',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  closeIcon: {
    width: 20,
    height: 20,
  },
});

export default LoginScreen;
