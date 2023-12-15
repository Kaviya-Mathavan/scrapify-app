import React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';

const Products = () => {

  const imagePaths = [
    require('./assets/svgs/bottles.png'),
    require('./assets/svgs/cartonboxes.png'),
    require('./assets/svgs/metals.png'),
    require('./assets/svgs/cartons.png'),
    require('./assets/svgs/books.png'),
    require('./assets/svgs/ewaste.png'),
    require('./assets/svgs/glasses.png'),
    require('./assets/svgs/wood.png'),
    require('./assets/svgs/bottles.png'),
  ];

  return (
    <ScrollView contentContainerStyle={styles.gridContainer}>
      {imagePaths.map((path, index) => (
        <View key={index} style={styles.card}>
          <Image source={path} style={styles.image} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 35,
  },
  card: {
    width:'32%',
    aspectRatio: 1,
    borderWidth: 1,
    borderRadius: 8, 
    marginBottom: 2,
    overflow: 'hidden',
  },
  image: {

    borderRadius: 8,
    marginLeft:11
    // marginRight:12

    

  },
});

export default Products;
