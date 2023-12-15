
import React from 'react';
import { View, Text, FlatList } from 'react-native';

const AddedProducts = ({ route }) => {
  const { addedProducts } = route.params;

  return (
    <View>
      <Text>List of Added Products</Text>
      <FlatList
        data={addedProducts}
        renderItem={({ item }) => (
          <View>
            <Text>{/* Display product details here */}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default AddedProducts;
