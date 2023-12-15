import React, { useState } from 'react';
import { ScrollView, View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Profile = () => {
  const [name, setName] = useState('Kaviya');
  const [businessType, setBusinessType] = useState('Individual');
  const [email, setEmail] = useState('kaviyamathavan@gmail.com');
  const [mobile, setMobile] = useState('1234567899');

  const handleSave = () => {
    alert('Profile saved!');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image
          source={require('./assets/svgs/Profile.png')}
          style={styles.profileImage}
        />

        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.label}>Business Type</Text>
          <TextInput
            style={styles.input}
            value={businessType}
            onChangeText={setBusinessType}
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>Mobile</Text>
          <TextInput
            style={styles.input}
            value={mobile}
            onChangeText={setMobile}
          />
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  detailsContainer: {
    width: '100%',
  },
  label: {
    color: '#818694',
    fontSize: 16,
    fontFamily: 'Inter Tight',
    fontWeight: '500',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#B0B0B0',
    borderRadius: 6,
    padding: 10,
    marginBottom: 15,
    color: '#3B4357',
    fontSize: 18,
    fontFamily: 'Inter',
    fontWeight: '700',
  },
  saveButton: {

    backgroundColor: '#005A7B',
    width: 351,
    height: 54,
    borderRadius: 31.94,
    marginTop:90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Inter Tight',
    fontWeight: '700',
  },
});

export default Profile;
