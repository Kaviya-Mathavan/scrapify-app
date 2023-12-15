
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Menubarr from './Menubarr';
import Menubar from './Menubar';
const Navbarr= ({}) => {
  const navigation = useNavigation();
  const handleNavigate = () => {
    navigation.navigate('Listproduct'); 
  };

  return (
    <View>
    <><View style={styles.container}>

      <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.menuIcon}>
        <Text style={styles.symbol}>☰</Text>
      </TouchableOpacity>
      <Text style={styles.heading}>Scrap inventory</Text>

    </View>

    <View style={styles.contentContainer}>
      <Image source={require('./assets/svgs/scrap.png')} />
      <Text style={styles.text}>
        Sell scrap to contribute for a circular economy
      </Text>
      <View>
        <TouchableOpacity style={styles.addButton}>
        <Icon style={styles.Icon} name="add-circle" size={22} color="white" />
          <Text style={styles.addButtonText} onPress={handleNavigate}>Add Scrap Product</Text>
        </TouchableOpacity>

      </View> 
    </View>
      </>
      <Menubarr/>
      {/* <Menubar/> */}
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#02C784', 
},

heading: {
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
contentContainer:{
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'center',
  marginTop: 130,

},

text:{
  color: '#005A7B',
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop: 20,
  marginBottom: 20,
},
addButton:{
  flexDirection: 'row',
  backgroundColor: '#005A7B',
  padding: 10,
  borderRadius: 25,
  alignItems: 'center',
},
addButtonText:{
  color: 'white',
  paddingLeft: 16,
  fontWeight: 'bold',
  paddingRight: 20,
  fontSize: 18,
},
Icon: {
  paddingLeft: 10,
},


});

export default Navbarr;

