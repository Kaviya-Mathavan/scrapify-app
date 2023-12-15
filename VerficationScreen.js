import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet, Text, Image } from 'react-native';

const VerificationScreen = () => {
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

  const handleOtpKeyPress = (index, key) => {
    if (key === 'Backspace' && index > 0 && !otp[index]) {
      otpInputRefs.current[index - 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.centeredContent}>
        <Text style={styles.heading}>Register</Text>
        <Image
          source={require('./assets/svgs/register1.png')}
          style={styles.image}
        />
        <Text style={styles.message}>Verification code is sent to +91-89394 89764</Text>
      </View>
      <View style={styles.inputRow}>
        {otp.map((digit, index) => (
          <View key={index} style={styles.inputContainer}>
            <TextInput
              ref={(ref) => (otpInputRefs.current[index] = ref)}
              style={styles.input}
              value={digit}
              onChangeText={(value) => handleOtpChange(index, value)}
              onKeyPress={({ nativeEvent }) => handleOtpKeyPress(index, nativeEvent.key)}
              keyboardType="numeric"
              maxLength={1}
            />
            {index < 5 && <View style={styles.line} />}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  centeredContent: {
    alignItems: 'center',
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inputContainer: {
    position: 'relative',
  },
  input: {
    width: 40,
    height: 40,
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontSize: 20,
    zIndex: 2,
  },
  image: {
    marginTop: 20,
    width: 100,
    height: 100,
  },
  line: {
    position: 'absolute',
    bottom: 7,
    left: '100%',
    transform: [{ translateX: -12.5 }],
    height: 1,
    width: 25,
    backgroundColor: 'black',
  },
  message: {
    marginTop: 10,
    fontSize: 20,
    color: '#3B4357', // Update the color to var(--grey90, #3B4357)
    textAlign: 'center',
    fontFamily: 'Inter Tight',
    fontWeight: '500',
    lineHeight: 32, 
    marginLeft:80,
    marginRight:50 // You can adjust the color as needed
  },
});

export default VerificationScreen;
