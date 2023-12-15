import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Modal, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Register2 = ({ isVisible, onClose }) => {
  const [name, setName] = useState('');
  const [buyerPressed, setBuyerPressed] = useState(false);
  const [sellerPressed, setSellerPressed] = useState(false);
  const navigation = useNavigation();

  const handleNext = () => {
    if (buyerPressed || sellerPressed) {
      navigation.navigate('Register3');
    } else {
      alert('Please select either Buyer or Seller');
    }
  };

  const handlePrev = () => {
    navigation.navigate('Register');
  };

  const handleBuyerPress = () => {
    setBuyerPressed(!buyerPressed);
    setSellerPressed(false);
  };

  const handleSellerPress = () => {
    setSellerPressed(!sellerPressed);
    setBuyerPressed(false);
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
            source={require('./assets/svgs/register2.png')}
            style={styles.image}
          />

          <View style={styles.cardContainer}>
            <TouchableHighlight
              style={[
                styles.card,
                {
                  backgroundColor: buyerPressed ? '#02C784' : '#fff',
                  borderColor: buyerPressed ? '#02C784' : '#005A7B',
                },
              ]}
              underlayColor="#fff"
              onPress={handleBuyerPress}
            >
              <>
                <Image
                  source={require('./assets/svgs/buyer.png')}
                  style={styles.cardIcon}
                />
                <Text style={styles.cardTitle}>Seller</Text>
              </>
            </TouchableHighlight>

            <TouchableHighlight
              style={[
                styles.card,
                {
                  backgroundColor: sellerPressed ? '#02C784' : '#fff',
                  borderColor: sellerPressed ? '#02C784' : '#005A7B',
                },
              ]}
              underlayColor="#fff"
              onPress={handleSellerPress}
            >
              <>
                <Image
                  source={require('./assets/svgs/seller.png')}
                  style={styles.cardIcon}
                />
                <Text style={styles.cardTitle}>Buyer</Text>
              </>
            </TouchableHighlight>
          </View>

          <Text style={styles.text}>
            Hi Ramakrishnan,<Text style={{ fontWeight: '400' }}>Say who         you are</Text>
          </Text>

          <View style={styles.buttonContainer}>
            <View
              style={styles.button}
            >
              <Text style={styles.buttonText} title="Register" onPress={handlePrev}>Prev</Text>
            </View>

            <View
              style={styles.button1}             
           
            >
              <Text style={styles.buttonText1} title="Register3" onPress={handleNext}>Next</Text>
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
    marginTop:345
  },
  heading: {
    marginBottom: 10,
    textAlign: 'center', color: '#005A7B', 
    fontSize: 22, fontFamily: 'Inter Tight', 
    fontWeight: '700', wordWrap: 'break-word'
  },
  image: {
    marginTop: 10,
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  card: {
    borderRadius: 8,
    padding: 15,
    // width: '48%',
    width:160,
    height:123,
    alignItems: 'center',
    borderWidth: 1,
    marginBottom: 10,
  },
  cardIcon: {
    width: 42,
    height: 40,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#005A7B',
  },
  text: {
    color: '#3B4357',
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 10,
    marginTop: 10,
    marginLeft:70
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
  closeButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10,
    borderColor: '#005A7B',
    borderWidth: 1,
  },
});

export default Register2;
