// ProductList.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Categories = ({ navigation }) => {
  const products = [
    { id: '1', name: 'Product 1', price: '$19.99', image: require('./assets/svgs/register.png') },
    { id: '2', name: 'Product 2', price: '$29.99', image: require('./assets/svgs/register.png') },
    { id: '3', name: 'Product 3', price: '$39.99', image: require('./assets/svgs/register.png') },
   
  ];

  const navigateToProductDetails = (productId) => {

    navigation.navigate('ProductDetails', { productId });
  };

  const renderProductItem = ({ item }) => (
    <TouchableOpacity
      style={styles.productItem}
      onPress={() => navigateToProductDetails(item.id)}
    >
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderProductItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  productItem: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 16,
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 8,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: 'green',
    marginTop: 8,
  },
});

export default Categories;
