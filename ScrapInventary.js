import React, { useState } from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ScrapInventary = ({ route }) => {
  const { params: { selectedProductDetails = [] } = {} } = route;
  const [updatedProductDetails, setUpdatedProductDetails] = useState([...selectedProductDetails]);
  const [rupees, setRupees] = useState(' ');
  const[expectedBidAmount,setexpectedBidAmount]=useState('');
  const [availableQty, setAvailableQty] = useState('200'); // Set the initial available quantity
  const [expectedPricePerKg, setExpectedPricePerKg] = useState('21'); // Set the initial expected price per kilogram
  const navigation = useNavigation();
  const handleUpdateImage = (index, newImagePath) => {
    const updatedDetails = [...updatedProductDetails];
    updatedDetails[index] = { ...updatedDetails[index], imagePath: newImagePath };
    setUpdatedProductDetails(updatedDetails);
  };
  const handleButtonPress = () => {
    const params = {
      selectedProductDetails: updatedProductDetails,
      expectedBidAmount,
      availableQty,
      expectedPricePerKg,
      rupees,
    };
    navigation.navigate('ReviewPage', params);
  };
  

  const handleRemoveProduct = (index) => {
    const updatedDetails = [...updatedProductDetails];
    updatedDetails.splice(index, 1);
    setUpdatedProductDetails(updatedDetails);
  };

  const handleSaveDetails = () => {
    console.log('Available Quantity:', availableQty);
    console.log('Expected Price/kg:', expectedPricePerKg);
    console.log('Rupees:', rupees);
  };
  
const calculateExpectedBidAmount = (qty, pricePerKg) => {
  const expectedBidAmount = parseInt(qty) * parseInt(pricePerKg);
  console.log('Expected Bid Amount:', expectedBidAmount);
};

  return (
    <View>
      <View style={styles.container1}>

<TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.menuIcon}>
<Image style={styles.image} source={require('./assets/svgs/arrowright.png')}/>
</TouchableOpacity>
<Text style={styles.heading1}>Scrap inventory</Text>

</View>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.selected}>Estimated Amt.₹</Text>
          <TextInput
            placeholder="Enter Rupees"
            keyboardType="numeric"
            value={rupees}
            onChangeText={(text) => setRupees(text)}
          />
        </View>
        {updatedProductDetails.map((product, index) => (
          <View key={index} style={styles.productContainer}>
            <TouchableOpacity onPress={() => handleUpdateImage(index, 'newImagePath')}>
              <Image source={product.imagePath} style={styles.productImage} />
            </TouchableOpacity>
            <View style={styles.productDetails}>
              {product.selectedOptions.map((option, optionIndex) => 
              (
                <Text key={optionIndex} style={styles.optionText}>
                  {option}
                </Text>
              ))}
              <Text style={styles.productName}>{product.name}</Text>
              <View style={styles.card}>
                <Text style={styles.cardHeading}>Expected BID Amt.</Text>
                <TextInput>₹</TextInput>
              </View>
              <Text style={styles.Heading}>Available Qty.</Text>
      <View style={styles.card1}>
      <TextInput
    style={styles.cardHeading1}
    keyboardType="numeric"
    value={availableQty}
    onChangeText={(text) => {
      setAvailableQty(text);
      calculateExpectedBidAmount(text, expectedPricePerKg);
    }}
  />
       <View style={styles.card12}>
            <Text style={styles.subcardheading}>kg</Text>
        </View>
      </View>
      <Text style={styles.Heading1}>Market Price/kg</Text>
      <View style={styles.card2}>
       
       <Text style={styles.cardHeading2}>10-20</Text>
       <View style={styles.card13}>
            <Text style={styles.subcardheading1}>₹</Text>
        </View>
     
      </View>
      <Text style={styles.Heading2}>Expected Price/kg</Text>
      <View style={styles.card3}>
      <TextInput
    style={styles.cardHeading3}
    keyboardType="numeric"
    value={expectedPricePerKg}
    onChangeText={(text) => {
      setExpectedPricePerKg(text);
      calculateExpectedBidAmount(availableQty, text);
    }}
  />
       <View style={styles.card14}>
            <Text style={styles.subcardheading2}>kg</Text>
        </View>
      </View >
      <View style={styles.photocard}>
    <Image
          source={require('./assets/svgs/photo.png')}
          style={styles.photoimage}
        />
        </View>
            </View>
            <TouchableOpacity onPress={() => handleRemoveProduct(index)}>
              <Image source={require('./assets/svgs/remove.png')} style={styles.removeIcon} />
            </TouchableOpacity>
            
          </View>
        ))}
          <TouchableOpacity style={styles.button}>
      <Image
        source={require('./assets/svgs/add1.png')}
        style={styles.image5}
      />
        <Text style={styles.buttonText}>Request New Product</Text>
      </TouchableOpacity>
        <TouchableOpacity style={styles.button1} onPress={handleButtonPress}>
          <Text style={styles.buttonText1}>Review</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#02C784', 
},

heading1: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#fff',
  marginRight:100
},
symbol: {
width:24,
height:28,
color: '#fff'
},
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  selected: {
    color: '#005A7B',
    fontSize: 18,
    fontWeight: 'bold',
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  productImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginRight: 10,
    marginBottom:385
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productOptions: {
    fontSize: 16,
    color: '#818694',
    fontFamily: 'Inter Tight',
    fontWeight: '600',
  },
  optionText: {
    fontSize: 16,
    color: '#3B4357',
    fontFamily: 'Inter Tight',
    fontWeight: '500',
  },
  cardHeading: {
    width: '100%', textAlign: 'center', color: '#818694', fontSize: 18, fontFamily: 'Inter Tight', fontWeight: '500', wordWrap: 'break-word',marginBottom:20
  },
  requestButton: {
    marginTop: 500,
    backgroundColor: '#005A7B',
    padding: 15,
    borderRadius: 10,
    width: 200,
    alignItems: 'center',
  },
  reviewButton: {
    marginTop: 10,
    backgroundColor: '#00A86B',
    padding: 15,
    borderRadius: 10,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  removeIcon: {
    width: 20,
    height: 20,
    marginLeft: 20,
    marginRight:10,
    marginBottom:370
  },
  card: {
    width: 390,
    height: 99,
    backgroundColor: '#D4D9DF', 
    borderRadius: 9,
    padding: 10,
    alignItems: 'center',
    // marginBottom:-50,
  //  marginTop:20,
  marginLeft:-60,
 borderRadius: 17, 
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card12: {
    backgroundColor: '#D4D9DF', 
    width: 43,
    height: 43,

    borderRadius: 6,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight:20,
    marginLeft:-36

  },
  card13: {
    backgroundColor: '#D4D9DF', 
    width: 43,
    height: 43,
    borderRadius: 6,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    // marginRight:20,
    marginLeft:120,
    marginTop:-21

  },
  card14: {
    backgroundColor: '#D4D9DF', 
    width: 43,
    height: 43,

    borderRadius: 6,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight:20,
    marginLeft:-36

  },
  photocard:{
    backgroundColor: '#D4D9DF', 
    width: 90,
    height: 90,
    borderRadius: 12,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight:10,
   marginTop:20,
   marginLeft:-40
  },
  photoimage:{
marginLeft:16
  },
  photoimage1:{
    marginLeft:16
  },
  photocard1:{
    backgroundColor: '#D4D9DF', 
    width: 90,
    height: 90,
    borderRadius: 12,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
marginRight:190,
marginTop:20
  },
  card1: {
    width: 170,
    height: 48,
    borderRadius: 6,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
marginTop:-20, 
background: '#D4D9DF',
borderWidth:1,
borderColor:'black',
marginBottom:20,
marginRight:190,
marginLeft:-50,
marginTop:10
  },
  card2: {
    width: 170,
    height: 48,
    alignItems: 'center',
  borderRadius: 6, 
 marginRight:199,
 marginTop:1,

borderWidth:1,
borderColor:'black',
marginBottom:60,

marginRight:10,
marginLeft:150
  },
  card3: {
    width: 170,
    height: 48,
    borderRadius: 6,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',  
marginTop:-100,
borderWidth:1,
borderColor:'black',
marginLeft:-50
  },

  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
    color:'black',
    marginRight:50,
    marginLeft:-110,
    marginTop:-170

  },
  subHeading: {
    fontSize: 16,
    marginLeft:-110, 
    color: '#818694',fontFamily: 'Inter Tight', fontWeight: '600', wordWrap: 'break-word'
  },
  cardHeading: {
    width: '100%',
     textAlign: 'center', color: '#818694', 
     fontSize: 18,
      fontFamily: 'Inter Tight', fontWeight: '500', wordWrap: 'break-word',marginBottom:20
  },
  cardHeading1: {
    width: '100%', textAlign: 'center', color: '#818694', fontSize: 18, fontFamily: 'Inter Tight', fontWeight: '500', wordWrap: 'break-word',marginBottom:20,
    marginTop:-20,
    marginBottom:-10
  },

  cardHeading2: {
    width: '100%', textAlign: 'center', color: '#818694', fontSize: 18, fontFamily: 'Inter Tight', fontWeight: '500', wordWrap: 'break-word',
    marginBottom:20,
    marginTop:8,
    marginBottom:-10,
    // ma
  },
  cardHeading3: {
    width: '100%', textAlign: 'center', color: '#818694', fontSize: 18, fontFamily: 'Inter Tight', fontWeight: '500', wordWrap: 'break-word',marginBottom:20,
    marginTop:-20,
    marginBottom:-10
  },
  cardHeading4: {
    width: '100%', textAlign: 'center', color: '#818694', fontSize: 18, fontFamily: 'Inter Tight', fontWeight: '500', wordWrap: 'break-word',marginBottom:20
  },
  carImage: {
    width: 60, 
    height: 60, 
    resizeMode: 'contain',
    marginBottom:120,
    marginRight:335,
    marginLeft:-15

  },

  
  selected:{
    // fontSize: 20,color: '#3B4357', fontSize: 16, fontFamily: 'Inter Tight', fontWeight: '600', wordWrap: 'break-word',
    marginRight: 140,
    color: '#005A7B', fontSize: 14, fontFamily: 'Inter Tight', fontWeight: '600', wordWrap: 'break-word'

  },
  productText: {
    marginTop: 3,
    color: '#3B4357', fontSize: 16, fontFamily: 'Inter Tight', fontWeight: '500', wordWrap: 'break-word'

  },
  Heading:{
    color: '#818694', 
    fontSize: 16,
     fontFamily: 'Inter Tight', 
     fontWeight: '500',
      wordWrap: 'break-word',
      marginBottom:-7,
      marginLeft:-40
  },
  Heading1:{
    color: '#818694', 
    fontSize: 16, 
    fontFamily: 'Inter Tight', 
    fontWeight: '500',
     wordWrap: 'break-word',
     marginLeft:160,
     marginTop:-92,
  },
  Heading2:{
    color: '#818694', fontSize: 16, fontFamily: 'Inter Tight', fontWeight: '500', 
    wordWrap: 'break-word',
    marginBottom:100,
    marginTop:-40,
    marginLeft:-40
    
  },
  subcard:{
    width:43,
    height:44,
background: '#F2F6F8', borderRadius: 4,
marginBottom:-20,
marginRight:10,
marginLeft:-30
  },
  subcard1:{
    width:43,
    height:44,
    background: '#F2F6F8', borderRadius: 4
  },
  subcard2:{
    width:43,
    height:44,
    background: '#F2F6F8', 
    borderRadius: 4

  },
  subcardheading:{
    textAlign: 'center',
     color: '#818694', fontSize: 17, 
     fontFamily: 'Inter Tight', fontWeight: '400',
      lineHeight: 16, wordWrap: 'break-word',
  },
  subcardheading1:{
    textAlign: 'center', color: '#818694', fontSize: 17, fontFamily: 'Inter Tight', fontWeight: '400', lineHeight: 16, wordWrap: 'break-word'
  },
  subcardheading2:{
    textAlign: 'center', color: '#818694', fontSize: 17, fontFamily: 'Inter Tight', fontWeight: '400', lineHeight: 16, wordWrap: 'break-word'
  },
  button: {
    marginTop: 20,
    backgroundColor: 'white', // Customize the button styles
    padding: 10,
    borderRadius: 5,
    width: 351, height: 54,
    marginLeft:35,
    borderColor:'#005A7B',
    borderWidth:2,
    
    borderRadius: 31.94, 
    

  },
  buttonText: {
    color: '#005A7B',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft:90,
    marginBottom:-10,
    marginTop:4
  },
  button1: {
    marginTop: 20,
    backgroundColor: '#005A7B', 
    padding: 10,
    borderColor:'green',
    borderRadius: 5,
    width: 351, height: 54,
    marginLeft:35,
    
    borderRadius: 31.94, border: '2px #005A7B solid'

  },
  buttonText1: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft:125,
    marginBottom:-10,
    marginTop:4
  },
  image5:{
    background: '#005A7B',
    color:'#005A7B',

    width: 24, height: 24, left: 0, top: 24,
     position: 'absolute', 
    marginLeft:20,
    marginTop:-12
  },
  buttonheading:{
    marginTop:110,
    marginRight:18
  }
});

export default ScrapInventary;
