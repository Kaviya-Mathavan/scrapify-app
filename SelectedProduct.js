import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
const SelectedProduct = ({route }) => {
  const navigation = useNavigation();
  const [selectedItems, setSelectedItems] = useState([]);
  // const [selectedProducts,selectedProducts]=useState([]);
  // const selectedProducts  = route.params || {};
  const { params: selectedProducts = [] } = route;

  useEffect(() => {
    console.log('Selected Products:', selectedProducts);
    const productsArray = selectedProducts.selectedProduct || [];
  
    const updatedSelectedItems = productsArray.map((product) => ({
      ...product,
      selectedOptions: product.selectedOptions || [],
    }));
    setSelectedItems(updatedSelectedItems);
  }, [selectedProducts]);
  
  
  const handleRemoveOption = (productIndex) => {
    console.log('Removing product at index:', productIndex);
  
    setSelectedItems((prevSelectedItems) => {
      const updatedItems = [...prevSelectedItems];
      updatedItems.splice(productIndex, 1);
      return updatedItems;
    });
  
    // Notify the parent component to update the selectedProducts state
    onDeleteProduct(productIndex);
  };
  const handlePrev = () => {
    navigation.navigate('Listproduct'); 
  };
  const handleNext = () => {

    navigation.navigate('ScrapInventary', { selectedProductDetails: selectedItems });
  };
  const renderCard = (item, index) => {
    if (!item.imagePath) {
      // Handle the case where imagePath is undefined
      return null;
    }
  
    return (
      <View style={styles.card} key={index}>
        <View style={styles.imageContainer}>
          <Image source={item.imagePath} style={styles.cardImage} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>{item.name}</Text>
          <Text style={styles.subHeading}>
            {item.selectedOptions.length} {item.selectedOptions.length > 1 ? 'Products' : 'Product'}
          </Text>
          <View style={styles.optionfullContainer}>
          {item.selectedOptions.map((option, optionIndex) => (
            <View style={styles.optionContainer} key={optionIndex}>
            <Icon name="checkmark-sharp" size={20} color="green" style={styles.checkIcon} />
            <Text style={styles.productText}>{option}</Text>
          </View>
          ))}
          </View>
        </View>
        <TouchableOpacity
          style={styles.removeContainer}
          onPress={() => handleRemoveOption(index)}
        >
          <Image source={require('./assets/svgs/remove.png')} style={styles.removeImage} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
   
    <><View style={styles.container}>
      <Text style={styles.selected}>Selected Products</Text>
      {selectedItems.map((item, index) => {
        // Extract options and count for the selected product
        const optionsCount = item.selectedOptions.length;
        const optionsText = optionsCount > 0 ? `${optionsCount} Options: ` : '';
        const optionsList = item.selectedOptions.join(', ');

        return renderCard({
          ...item,
          optionsText,
          optionsList,
        }, index);
      })}
    </View><View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={handlePrev}>Prev</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1} onPress={handleNext}>
          <Text style={styles.buttonText1}>Next</Text>
        </TouchableOpacity>
      </View></>
     
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
    // alignItems: 'flex-end',
    flex: 1,
    justifyContent: 'flex-start',
    padding: 10,
    height: 'auto',
  },
  card: {
    width: '100%',
    height: 'auto',
    backgroundColor: 'white',
    borderRadius: 9,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#ccc',
    borderWidth: 1,
    marginTop: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3B4357',
    marginRight: 10,
  },
  subHeading: {
    fontSize: 16,
    color: '#818694',
    fontFamily: 'Inter Tight',
    fontWeight: '600',
  },
  cardImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    paddingRight: 10,
  },
  textContainer: {
    flex: 3,
  },
  removeContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  removeImage: {
    resizeMode: 'contain',
    marginBottom: 10,
    marginTop: 10,
    marginRight: 10,
  },
  selected: {
    color: '#818694',
    fontSize: 16,
    fontFamily: 'Inter Tight',
    fontWeight: '600',
  },
  productText: {
    marginTop: 3,
    color: '#3B4357',
    fontSize: 16,
    fontFamily: 'Inter Tight',
    fontWeight: '500',
    flexWrap: 'wrap',
  },
  optionfullContainer:{
    marginTop:20,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -50, // Updated to align with the left end
    marginTop: 5,
  },
  checkIcon: {
    marginRight: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    bottom: 10,
    right: 10,

  },
  button: {
    marginTop: 20,
    backgroundColor: 'white', 
    padding: 5,
    borderRadius: 5,
    width: 145, height: 54,
    marginLeft:25,
    borderColor:'#005A7B',
    borderWidth:2,
    borderRadius: 31.94, 
  },
  buttonText: {
    color: '#005A7B',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom:-10,
    marginTop: 5
  },
  button1: {
    marginTop: 20,
    backgroundColor: '#005A7B', 
    padding: 5,
    borderColor:'green',
    borderRadius: 5,
    width: 145, height: 54,
    marginLeft:25,
    borderRadius: 31.94, 
    border: '2px #005A7B solid'

  },
  buttonText1: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom:-10,
    marginTop: 7
  },
});

export default SelectedProduct;
