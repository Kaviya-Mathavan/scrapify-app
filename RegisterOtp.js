import React, { useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,Image
} from 'react-native';

const VerificationScreen = ({ isVisible, onClose }) => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const otpInputRefs = useRef([...Array(6)].map(() => React.createRef()));

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      otpInputRefs.current[index + 1].focus();
    }
  };
  const handleVerify = () => {
    const enteredOtp = otp.join('');
    const validOtp = '123456'

    if (enteredOtp === validOtp) {
      navigation.navigate('Success');
    } else {
      console.log('Invalid OTP');
    }
  };

  const handleOtpKeyPress = (index, key) => {
    if (key === 'Backspace' && index > 0 && !otp[index]) {
      otpInputRefs.current[index - 1].focus();
    }
  };

  const handleResendCode = () => {
    console.log('Resend Code pressed');
  };

  const handlePrev = () => {
    navigation.navigate('Register4');
  };


  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
           <Image
              source={require('./assets/svgs/symbol.png')}
              style={styles.closeIcon}
            />
          <Text style={styles.heading}>Register</Text>

          <Image
            source={require('./assets/svgs/register6.png')}
            style={styles.image}
          />
          <Text style={styles.message}>
            Verification code is sent to +91-89394 89764
          </Text>
          <View style={styles.inputRow}>
            {otp.map((digit, index) => (
              <View key={index} style={styles.inputContainer}>
                <TextInput
                  ref={(ref) => (otpInputRefs.current[index] = ref)}
                  style={styles.input}
                  value={digit}
                  onChangeText={(value) => handleOtpChange(index, value)}
                  onKeyPress={({ nativeEvent }) =>
                    handleOtpKeyPress(index, nativeEvent.key)
                  }
                  keyboardType="numeric"
                  maxLength={1}
                />
                {index < 6 && <View style={styles.line} />}
              </View>
            ))}
          </View>
          <TouchableOpacity
            style={styles.resendButton}
            onPress={handleResendCode}
          >
            <Text style={styles.resendButtonText}>Resend Code</Text>
          </TouchableOpacity>
          <View style={styles.buttonContainer}>
            <View
              style={styles.button} >
              <Text style={styles.buttonText} title="Register5" onPress={handlePrev}>Prev</Text>
            </View>

            <View
              style={styles.button1}             
                >
              <Text style={styles.buttonText1} title="Success" onPress={handleVerify}>Verify</Text>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  buttonText: {
    color: '#fff',
  },
  buttonText1: {
    color: '#fff', 
    borderColor:'#fff', 
    borderRadius:1,

  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    marginTop:349,
    paddingBottom:80,

  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inputContainer: {
    position: 'relative',
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
    marginLeft:147
  },
  input: {
    width: 40,
    height: 44,
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontSize: 20,
    zIndex: 2,
    marginRight: -5,
    marginLeft: 20,
  },
  line: {
    position: 'absolute',
    bottom: 7,
    left: '100%',
    transform: [{ translateX: -24.5 }],
    height: 1,
    width: 25,
    backgroundColor: 'black',
  },
  message: {
    marginTop: 10,
    fontSize: 20,
    color: '#3B4357',
    textAlign: 'center',
    fontFamily: 'Inter Tight',
    fontWeight: '500',
    lineHeight: 32,
    marginLeft: 80,
    marginRight: 50,
  },
  verifyButton: {
    marginTop: 20,
    backgroundColor: '#005A7B',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    width: 350,
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  resendButton: {
    marginTop: 10,
    marginLeft:130
  },
  resendButtonText: {
    color: '#005A7B',
    fontSize: 16,

  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 50,
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

export default VerificationScreen;
