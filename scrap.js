import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity,TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const ScrapInventory = ({ route }) => {
  const { selectedProductDetails } = route.params;
  const navigation = useNavigation();
  const products = ['Copper', 'Stainless Steel', 'Bronze', 'Platinum'];
  return (
    <View style={styles.container}> 
     <TextInput style={styles.selected}>Estimated Amt.₹200</TextInput>
        <Image
          source={require('./assets/svgs/metals.png')}
          style={styles.carImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Aluminium</Text>
          <Text style={styles.subHeading}>3 Products</Text>
          <Image
          source={require('./assets/svgs/remove.png')}
          style={styles.removeImage}
        />
        </View>

        <View style={styles.card}>
       <Text style={styles.cardHeading}>Expected BID Amt.</Text>
       <TextInput>₹200.00</TextInput>
      </View>

      <View style={styles.cardContainer}>
        <Text style={styles.Heading}>Available Qty.</Text>
      <View style={styles.card1}>
      
       <TextInput style={styles.cardHeading1}>200</TextInput>
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
       <TextInput style={styles.cardHeading3}>₹21</TextInput>
       <View style={styles.card14}>
            <Text style={styles.subcardheading2}>kg</Text>
        </View>
      </View >

      
    </View> 
    <View style={styles.image2}>
        <View style={styles.photocard}>
    <Image
          source={require('./assets/svgs/photo.png')}
          style={styles.photoimage}
        />
        </View>
        <View style={styles.photocard1}>
    <Image
          source={require('./assets/svgs/photo.png')}
          style={styles.photoimage1}
        />
        </View>
    </View>
    <View style={styles.buttonheading}>
    <TouchableOpacity style={styles.button}>
      <Image
        source={require('./assets/svgs/add1.png')}
        style={styles.image5}
      />
        <Text style={styles.buttonText}>Request New Product</Text>
      </TouchableOpacity>
        <TouchableOpacity style={styles.button1} onPress={() => handleButtonPress('Button 2')}>
          <Text style={styles.buttonText1}>Review</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    padding: 10,
    backgroundColor:'white'
  },
  
  cardContainer: {

  marginTop:-25
    
   
  },
  
  image2: {

    flexDirection: 'row',
      
     
    },
  card: {
    // width: 390,
    height: 99,
    backgroundColor: '#D4D9DF', 
    borderRadius: 9,
    padding: 10,
    alignItems: 'center',
    marginBottom:40,
   marginTop:-110,
 borderRadius: 17, 
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
   marginTop:20
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
marginBottom:40,
marginRight:199,
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
marginLeft:200,
marginRight:10
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
borderColor:'black'
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
    width: '100%', textAlign: 'center', color: '#818694', fontSize: 18, fontFamily: 'Inter Tight', fontWeight: '500', wordWrap: 'break-word',marginBottom:20
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

  removeImage: {
    resizeMode: 'contain',
    marginBottom:10,
    marginTop:-20,

    marginLeft:190

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
      marginBottom:20
  },
  Heading1:{
    color: '#818694', 
    fontSize: 16, 
    fontFamily: 'Inter Tight', 
    fontWeight: '500',
     wordWrap: 'break-word',
     marginLeft:207,
     marginTop:-111,
  },
  Heading2:{
    color: '#818694', fontSize: 16, fontFamily: 'Inter Tight', fontWeight: '500', 
    wordWrap: 'break-word',
    marginBottom:100,
    marginTop:-40
    
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


export default SelectedProduct;


