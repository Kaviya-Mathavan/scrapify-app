import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import removeIcon from './assets/svgs/remove.png'; 
const ReviewPage = ({ route }) => {
  const {
    params: {
      selectedProductDetails = [],
      availableQty,
      expectedPricePerKg,
      rupees,
      estimatedPrice,
      marketPrice,
      expectedPrice,
    } = {},
  } = route;
  const handleRemoveProduct = (index) => {
    const updatedSelectedProductDetails = [...selectedProductDetails];
    updatedSelectedProductDetails.splice(index, 1);
    const updatedParams = {
      ...route.params,
      selectedProductDetails: updatedSelectedProductDetails,
    };
    navigation.navigate('Listproduct', updatedParams);
  };
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
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
      <View >
          <Text style={styles.cardHeading}>Estimated Price.₹{estimatedPrice}</Text>
        </View>
        {selectedProductDetails.map((product, index) => (
          <View key={index} style={styles.productContainer}>
              

            <Image source={product.imagePath} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{product.name}</Text>
              {product.category && (
                <Text style={styles.productCategory}>{product.category}</Text>
              )}
              {product.subCategory && (
                <Text style={styles.subCategory}>{product.subCategory}</Text>
              )}
              {product.optionName && (
                <Text style={styles.optionName}>{product.optionName}</Text>
              )}
                  <TouchableOpacity onPress={() => handleRemoveProduct(index)}>
              <Image source={removeIcon} style={styles.removeIcon} />
            </TouchableOpacity>
              
              {product.selectedOptions && (
                <View style={styles.selectedOptionsContainer}>
                  {product.selectedOptions.map((option, optionIndex) => (
                    <Text key={optionIndex} style={styles.selectedOption}>
                      {option}
                    </Text>
                    
                  ))}
                   <View style={styles.card}>
                <Text style={styles.cardHeading}>Expected BID Amt.</Text>
                <Text>₹{expectedPrice}</Text>
              </View>
        <View style={styles.carded}>
              <Text style={styles.Heading}>Available Qty.</Text>
      <View style={styles.card1}>
      <Text>{availableQty}</Text>
       <View style={styles.card12}>
            <Text style={styles.subcardheading}>kg</Text>
        </View>
      </View>
      <Text style={styles.Heading1}>Market Price/kg</Text>
      <View style={styles.card2}>
       
       <Text style={styles.cardHeading2}>{marketPrice}</Text>
       <View style={styles.card13}>
            <Text style={styles.subcardheading1}>₹</Text>
        </View>
     
      </View>
      <Text style={styles.Heading2}>Expected Price/kg</Text>
      <View style={styles.card3}>
   <Text>{expectedPricePerKg}</Text>
       <View style={styles.card14}>
            <Text style={styles.subcardheading2}>kg</Text>
        </View>
      </View >
      </View>
                </View>
              )}
            </View>
          </View>
        ))}
        <TouchableOpacity style={styles.button1} onPress={handleGoBack}>
          <Text style={styles.buttonText1}>Edit Inventary</Text>
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
    marginBottom:300
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom:-18
  },
  productCategory: {
    fontSize: 16,
    color: '#818694',
    fontWeight: '500',
  },

  card: {
    width: '80%',
    marginVertical: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#005A7B',
    borderRadius: 10,
    alignSelf: 'center',
  },
  cardHeading: {
    width: '100%', textAlign: 'center', color: '#818694', fontSize: 18, fontFamily: 'Inter Tight', fontWeight: '500', wordWrap: 'break-word',marginBottom:20
  },
carded:{
  marginBottom:10,
  marginTop:30

},
  card: {
    width: 390,
    height: 99,
    backgroundColor: '#D4D9DF', 
    borderRadius: 9,
    padding: 10,
    alignItems: 'center',

  marginLeft:-60,
 borderRadius: 17,
 marginBottom:-15 
  },
  cardText: {
    fontSize: 16,
    color: '#3B4357',
    marginTop: 5,
  },
   subCategory: {
    fontSize: 16,
    color: '#818694',
    fontWeight: '500',
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
    marginLeft:90

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

  },
  cardHeading3: {
    width: '100%', textAlign: 'center', color: '#818694', fontSize: 18, fontFamily: 'Inter Tight', fontWeight: '500', wordWrap: 'break-word',marginBottom:20,
    marginTop:-20,
    marginBottom:-10
  },
  cardHeading4: {
    width: '100%', textAlign: 'center', color: '#818694', fontSize: 18, fontFamily: 'Inter Tight', fontWeight: '500', wordWrap: 'break-word',marginBottom:20
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

  subHeading: {
    fontSize: 16,
    marginLeft:-110, 
    color: '#818694',fontFamily: 'Inter Tight', fontWeight: '600', wordWrap: 'break-word'
  },
  card13: {
    backgroundColor: '#D4D9DF', 
    width: 43,
    height: 43,
    borderRadius: 6,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
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
    marginLeft:97

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
  removeIcon: {
    width: 20,
    height: 20,
    marginLeft: 300, 

  }
  
});
export default ReviewPage;