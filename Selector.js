import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SwitchSelector from 'react-native-switch-selector';

const Selector = () => {
  const [selectedOption, setSelectedOption] = useState(0);

  const options = [
    { label: 'Buyer', value: 0 },
    { label: 'Seller', value: 1 },
  ];

  const handleOptionChange = (value) => {
    setSelectedOption(value);

  };

  return (
    <View style={styles.container1}>
      <Text style={styles.loginText}>Login</Text>
      <SwitchSelector
        options={options}
        initial={selectedOption}
        onPress={handleOptionChange}
        style={{ marginTop: 10 }}
        buttonColor="#005A7B"
    
      />
    </View>
    
  );
};
const styles = StyleSheet.create({
container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: '#005A7B',
    fontSize: 18, 
    fontWeight: 'bold',
  },
});
export default Selector;