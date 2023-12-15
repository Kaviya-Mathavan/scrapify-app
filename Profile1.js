import React, { useState } from 'react';
import { View, TextInput, Image, StyleSheet,Text,TouchableOpacity } from 'react-native';

const LocationForm = () => {
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [landmark, setLandmark] = useState('');

  const updateLocation = () => {
    // Perform actions with the captured data
    console.log('Address 1:', address1);
    console.log('Address 2:', address2);
    console.log('City:', city);
    console.log('State:', state);
    console.log('Zipcode:', zipcode);
    console.log('Landmark:', landmark);

    setIsLocationSelected(true);
  };

  const LocationBox = () => {
    return (
      <View style={styles.locationBoxContainer}>
        <Text style={styles.locationBoxText}>Location Selected on Map</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
        
         {/* <Text style={styles.locationBoxText}>Location Selected on Map</Text> */}
      <Image source={require('./assets/svgs/map.png')} style={styles.topImage} />
      {/* <Text style={styles.locationBoxText}>Location Selected on Map</Text> */}
      <Image source={require('./assets/svgs/locationbox.png')} style={styles.locationBoxImage} />
      
      <View style={styles.detailsContainer}>
       <Text style={styles.label}>Address 1</Text>
       <TextInput
        style={styles.input}
        placeholder="Address Line 1"
        onChangeText={(text) => setAddress1(text)}
        value={address1}
      />
      <Text style={styles.label}>Address 2</Text>
      <TextInput
        style={styles.input}
        placeholder="Address Line 2"
        onChangeText={(text) => setAddress2(text)}
        value={address2}
      />
      <Text style={styles.label}>City</Text>
      <TextInput
        style={styles.input}
        placeholder="City"
        onChangeText={(text) => setCity(text)}
        value={city}
      />
      <Text style={styles.label}>State</Text>
      <TextInput
        style={styles.input}
        placeholder="State"
        onChangeText={(text) => setState(text)}
        value={state}
      />
      <Text style={styles.label}>Zipcode</Text>
      <TextInput
        style={styles.input}
        placeholder="Zipcode"
        onChangeText={(text) => setZipcode(text)}
        value={zipcode}
      />
      <Text style={styles.label}>Landmark</Text>
      <TextInput
        style={styles.input}
        placeholder="Landmark"
        onChangeText={(text) => setLandmark(text)}
        value={landmark}
      />


<TouchableOpacity style={styles.saveButton} >
          <Text style={styles.saveButtonText}>Update Location</Text>
        </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    padding: 16,
    marginBottom:30
  },
  topImage: {
    // width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom:13,
    // marginTop:250
  },
  detailsContainer: {
    width: '100%',
    marginBottom:60
  },
  input: {
    height: 40,
    borderColor: '#818694',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
    borderRadius: 6,
    width:350
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Inter Tight',
    fontWeight: '700',
    marginBottom:20
  },
  label: {
    color: '#818694',
    fontSize: 16,
    fontFamily: 'Inter Tight',
    fontWeight: '500',
    marginBottom: 5,
  },
  locationBoxImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    alignSelf: 'center',
    // marginBottom: 30,
    marginRight:320,
    marginLeft:-40
  },

  saveButton: {
    backgroundColor: '#005A7B',
    height: 40,
    borderRadius: 31.94,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -1, 
    width:351
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Inter Tight',
    fontWeight: '700',
  },
});

export default LocationForm;
