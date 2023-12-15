import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CheckBox from '@react-native-community/checkbox';
// import SelectedProduct from './SelectedProduct';
import { useNavigation } from '@react-navigation/native';
const Listproduct = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productOptions, setProductOptions] = useState({});
  const [selectedProducts, setSelectedProducts] = useState([]);
  const navigation = useNavigation();

  const products = [
    { id: 1, name: 'Metals', imagePath: require('./assets/svgs/metal.png'), options: ['Copper', 'Stainless Steel', 'Bronze', 'Titanium'] },
    { id: 2, name: 'Bottles', imagePath: require('./assets/svgs/bottles.png'), options: ['1', '2', '3', '4']  },
    { id: 3, name: 'Cartons', imagePath: require('./assets/svgs/cartons.png'), options: ['hi', 'hello', 'dude', 'hey']  },
    { id: 4, name: 'Glasses', imagePath: require('./assets/svgs/glasses.png'), options: ['DK', 'MS', 'diamond', 'nice']  },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        flexDirection: 'column',
        padding: 10,
        
      }}
      onPress={() => handleDropdownPress(item)}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center',paddingBottom: 10 }}>
        <Image
          source={item.imagePath}
          style={{ width: 50, height: 50, marginRight: 10 }}
        />
        <Text style={{ flex: 1 }}>{item.name}</Text>
        <Icon name="chevron-down" size={20} />
      </View>

      {selectedProduct && selectedProduct.id === item.id && item.options && (
        <FlatList
        data={item.options}
        keyExtractor={(option) => option}
        renderItem={({ item: option }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center', padding: 8,borderBottomWidth: 1, borderBottomColor: '#ccc', }}>
            <Text style={{ flex: 1 }}>{option}</Text>
            <CheckBox
                value={productOptions[item.id]?.includes(option) || false}
                onValueChange={() => handleCheckboxPress(item.id, option)}
              />
          </View>
        )}
      />
      )}
    </TouchableOpacity>
  );

  const handleDropdownPress = (product) => {
    setSelectedProduct((prevSelectedProduct) => {
      if (prevSelectedProduct && prevSelectedProduct.id === product.id) {
        return null;
      }
      return product;
    });
  };

  // const handleRowPress = (selectedProduct) => {
  //   console.log(`Row pressed for ${selectedProduct.name}`);
  // };

  const handleCheckboxPress = (productId, option) => {
    setProductOptions((prevProductOptions) => {
      const currentOptions = prevProductOptions[productId] || [];
      const newOptions = currentOptions.includes(option)
        ? currentOptions.filter((selectedOption) => selectedOption !== option)
        : [...currentOptions, option];

      return { ...prevProductOptions, [productId]: newOptions };
    });
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };


  const handleDeleteProduct = (index) => {
    console.log("dleeted product");
    setSelectedProducts((prevSelectedProducts) => {
      const updatedProducts = [...prevSelectedProducts];
      updatedProducts.splice(index, 1); 
      return updatedProducts;
    });
  };


  const handleButtonPress = () => {
    const selectedProductsWithOptions = products
      .filter((product) => productOptions[product.id]?.length > 0)
      .map((product) => ({
        id: product.id,
        name: product.name,
        imagePath: product.imagePath,
        selectedOptions: productOptions[product.id] || [],
      }));

    setSelectedProducts(selectedProductsWithOptions);

    // Navigate to a new screen to show the added products
    navigation.navigate('SelectedProduct', {
      selectedProduct: selectedProductsWithOptions,
    });

  };
  return (
    <View>
          <View style={styles.container1}>

<TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.menuIcon}>
<Image style={styles.image} source={require('./assets/svgs/arrowright.png')}/>
</TouchableOpacity>
<Text style={styles.heading1}>Scrap inventory</Text>

</View>
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Image source={require('./assets/svgs/search.png')} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search by products"
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>
      <FlatList
        data={searchQuery.length > 0 ? filteredProducts : products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      {/* <SelectedProduct
        selectedProducts={selectedProducts}
        onDeleteProduct={handleDeleteProduct}
      /> */}

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require('./assets/svgs/add1.png')}
            style={styles.image5}
          />
          <Text style={styles.buttonText}>Request New Product</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1} onPress={() => handleButtonPress('Button 2')}>
          <Text style={styles.buttonText1}>Add Product</Text>
        </TouchableOpacity>
      </View>
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
 container:{
  flex: 1,
  height: 'auto',
 },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  searchIcon: {
    width: 20,
    position: 'absolute',
    height: 20,
    marginRight: 20,
    marginLeft: 16,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 30,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderColor: '#ccc',
  },
  image: {
    width: 54,
    height: 72,
    marginRight: 10,
  },
  image1: {
    width: 52,
    height: 77,
    marginRight: 10,
    marginLeft: -60
  },
  image2: {
    width: 93,
    height: 66,
    marginRight: 10,
    marginLeft: -65
  },
  image3: {
    width: 42,
    height: 86,
    marginRight: 10,
    marginLeft: -80
  },
  productName: {
    marginLeft: 38,
    color: '#4B4B4B',
    fontSize: 20, 
    fontFamily: 'Inter Tight', 
    fontWeight: '700', 
    flexWrap: 'wrap',
  },
  productName1: {
    marginLeft: 2,
    color: '#4B4B4B', fontSize: 20, 
    fontFamily: 'Inter Tight', 
    fontWeight: '700', 
    flexWrap: 'wrap',
  },
  productName2: {
    marginLeft: 6,
    color: '#4B4B4B', fontSize: 20, 
    fontFamily: 'Inter Tight', 
    fontWeight: '700', 
    flexWrap: 'wrap',
  },
  productName3: {
    flex: 1,
    marginLeft: 5,
    color: '#4B4B4B', fontSize: 20, 
    fontFamily: 'Inter Tight', 
    fontWeight: '700', 
    flexWrap: 'wrap',
  },
  dropdownIcon: {
    fontSize: 20,
    marginLeft: 10,
  },
  dropdownOptions: {
    position: 'absolute',
    top: '100%',
    left: 0,
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    zIndex: 1,
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    // marginTop: 100,

  },
  button: {
    marginTop: 20,
    backgroundColor: 'white', 
    padding: 5,
    borderRadius: 5,
    width: 280, height: 54,
    marginLeft:60,
    borderColor:'#005A7B',
    borderWidth:2,
    borderRadius: 31.94, 
  },
  buttonText: {
    color: '#005A7B',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft:60,
    marginBottom:-10,
    marginTop: 5
  },
  button1: {
    marginTop: 20,
    backgroundColor: '#005A7B', 
    padding: 5,
    borderColor:'green',
    borderRadius: 5,
    width: 280, height: 54,
    marginLeft:60,
    borderRadius: 31.94, 
    border: '2px #005A7B solid'

  },
  buttonText1: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft:95,
    marginBottom:-10,
    marginTop: 7
  },
  image5:{
    // backgroundColor: '#005A7B',
    // color:'#005A7B',
    width: 24, height: 24, left: 0, top: 24,
     position: 'absolute', 
    marginLeft:20,
    marginTop:-12
  }
});

export default Listproduct;
