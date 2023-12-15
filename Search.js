import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = () => {
    let filtered = products;

    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    filtered = filtered.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredProducts(filtered);
  };

  const products = [
    { id: '1', name: 'Metal Product 1', category: 'metals', image: require('./assets/svgs/books.png') },
    { id: '2', name: 'Bottle Product 1', category: 'bottles', image: require('./assets/svgs/books.png') },
    { id: '3', name: 'Carton Product 1', category: 'cartons', image: require('./assets/svgs/books.png') },
    { id: '4', name: 'Wood Product 1', category: 'wood', image: require('./assets/svgs/books.png') },
    { id: '5', name: 'Plastic Product 1', category: 'plastic', image: { uri: './assets/svgs/books.png' } },

  ];

  return (
    <View style={{ backgroundColor: 'white', padding: 50, width: 400, marginRight: 100, marginLeft: -50 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon name="search1" size={20} color="black" style={{ marginRight: 10 }} />
        <TextInput
          placeholder="Search products"
          value={searchQuery}
          onChangeText={text => setSearchQuery(text)}
          style={{
            flex: 1,
            backgroundColor: 'white',
            color: 'black',
            fontSize: 16,
            paddingVertical: 20,
            paddingHorizontal: 10,
            marginBottom: 10,
            borderRadius: 6,
            borderWidth: 1,
            borderColor: '#E9EDF4',
          }}
        />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
        <Text style={{ color: 'black' }}>Select a category:</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text onPress={() => setSelectedCategory('metals')} style={{ marginRight: 10, color: 'black' }}>Metals</Text>
          <Text onPress={() => setSelectedCategory('bottles')} style={{ marginRight: 10, color: 'black' }}>Bottles</Text>
          <Text onPress={() => setSelectedCategory('cartons')} style={{ marginRight: 10, color: 'black' }}>Cartons</Text>
          <Text onPress={() => setSelectedCategory('wood')} style={{ marginRight: 10, color: 'black' }}>Wood</Text>
          <Text onPress={() => setSelectedCategory('plastic')} style={{ color: 'black' }}>Plastic</Text>
        </View>
      </View>

      <FlatList
        data={filteredProducts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
            <Image
              source={item.image}
              style={{ width: 50, height: 50, marginRight: 10 }}
            />
            <View>
              <Text style={{ color: 'black' }}>{item.name}</Text>
            </View>
            <View style={{ position: 'absolute', right: 10 }}>
              <Text style={{ color: 'black' }}>{'Dropdown Symbol'}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Search;
