

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const MobileVerificationScreen = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);

  const handleSendCode = () => {

    fetch('YOUR_BACKEND_API_ENDPOINT/sendVerificationCode', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ mobileNumber }),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from your backend
        if (data.success) {
          setIsCodeSent(true);
          Alert.alert('Verification Code Sent', `Verification code sent to ${mobileNumber}`);
        } else {
          Alert.alert('Error', 'Failed to send verification code. Please try again.');
        }
      })
      .catch(error => {
        console.error('Error sending verification code:', error);
        Alert.alert('Error', 'Failed to send verification code. Please try again.');
      });
  };

  const handleVerifyCode = () => {
    // Here, you would make an API call to your backend to verify the entered code.
    // For simplicity, let's assume the backend returns a success message.
    // Replace the URL with your actual backend endpoint.
    fetch('YOUR_BACKEND_API_ENDPOINT/verifyCode', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ mobileNumber, verificationCode }),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from your backend
        if (data.success) {
          Alert.alert('Verification Successful', 'Mobile number verified successfully!');
        } else {
          Alert.alert('Verification Failed', 'Invalid verification code. Please try again.');
        }
      })
      .catch(error => {
        console.error('Error verifying code:', error);
        Alert.alert('Error', 'Failed to verify code. Please try again.');
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Mobile Number"
        keyboardType="numeric"
        value={mobileNumber}
        onChangeText={setMobileNumber}
      />

      {!isCodeSent ? (
        <TouchableOpacity style={styles.sendCodeButton} onPress={handleSendCode}>
          <Text style={styles.buttonText}>Send Verification Code</Text>
        </TouchableOpacity>
      ) : (
        <>
          <TextInput
            style={styles.input}
            placeholder="Enter 6-digit Verification Code"
            keyboardType="numeric"
            value={verificationCode}
            onChangeText={setVerificationCode}
            maxLength={6}
          />

          <TouchableOpacity style={styles.verifyCodeButton} onPress={handleVerifyCode}>
            <Text style={styles.buttonText}>Verify Code</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    width: '100%',
  },
  sendCodeButton: {
    backgroundColor: '#1E90FF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
  },
  verifyCodeButton: {
    backgroundColor: '#1E90FF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MobileVerificationScreen;
