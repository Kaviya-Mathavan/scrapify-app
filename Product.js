import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput,ScrollView } from 'react-native';
import Menubarr from './Menubarr';
import { useNavigation } from '@react-navigation/native';
const Product = () => {
  const [selectedStatus, setSelectedStatus] = useState('close');
  const navigation = useNavigation();
  const handleNavigateToProductDetails = () => {
   
    const productId = products
    .filter((product) => productOptions[product.id]?.length > 0)
    .map((product) => ({
      name: products.name,
    }));
    navigation.navigate('ProductDetails', { productId });
  };
 

  const products = [
    {
      name: 'Garbage Crunchers',
      rating: '4.5',
      reviews: '120',
      status:'open',
      location: 'Guindy',
      bidText: 'BID00012',
      postedText: 'Posted April 10, 2023',
      bidAmount: '₹600.00',
      imageSource:require('./assets/svgs/logo1.png'),
      product: [
        {
          metalName: "Aluminium",
          productCount: 3,
          details: {
            reqQty: "10",
            expectedPricePerKg: "25.00",
            expectedBidAmount: "250.00",
            marketPricePerKg: "22.50",
            bidPricePerKg: "23.00"
          }
        },
        {
          metalName: "Aluminium",
          productCount: 3,
          details: {
            reqQty: "10",
            expectedPricePerKg: "25.00",
            expectedBidAmount: "250.00",
            marketPricePerKg: "22.50",
            bidPricePerKg: "23.00"
          }
        },
        {
          metalName: "Aluminium",
          productCount: 3,
          details: {
            reqQty: "10",
            expectedPricePerKg: "25.00",
            expectedBidAmount: "250.00",
            marketPricePerKg: "22.50",
            bidPricePerKg: "23.00"
          }
        },
      ],
    },  
     {
      name: 'Garbage Crunchers',
      rating: '4.5',
      reviews: '120',
      status:'modified',
      location: 'Guindy',
      bidText: 'BID00012',
      postedText: 'Posted April 10, 2023',
      bidAmount: '₹600.00',
      imageSource: require('./assets/svgs/logo2.png'),
      product: [
        {
          metalName: "Aluminium",
          productCount: 3,
          details: {
            reqQty: "10",
            expectedPricePerKg: "25.00",
            expectedBidAmount: "250.00",
            marketPricePerKg: "22.50",
            bidPricePerKg: "23.00"
          }
        },
        {
          metalName: "Aluminium",
          productCount: 3,
          details: {
            reqQty: "10",
            expectedPricePerKg: "25.00",
            expectedBidAmount: "250.00",
            marketPricePerKg: "22.50",
            bidPricePerKg: "23.00"
          }
        },
        {
          metalName: "Aluminium",
          productCount: 3,
          details: {
            reqQty: "10",
            expectedPricePerKg: "25.00",
            expectedBidAmount: "250.00",
            marketPricePerKg: "22.50",
            bidPricePerKg: "23.00"
          }
        },
      ],
    },
    {
      name: 'Garbage Crunchers',
      rating: '4.5',
      reviews: '120',
      status:'open',
      location: 'Guindy',
      bidText: 'BID00012',
      postedText: 'Posted April 10, 2023',
      bidAmount: '₹600.00',
      img:
      './assets/svgs/logo2.png',
      product: [
        {
          metalName: "Aluminium",
          productCount: 3,
          details: {
            reqQty: "10",
            expectedPricePerKg: "25.00",
            expectedBidAmount: "250.00",
            marketPricePerKg: "22.50",
            bidPricePerKg: "23.00"
          }
        },
        {
          metalName: "Aluminium",
          productCount: 3,
          details: {
            reqQty: "10",
            expectedPricePerKg: "25.00",
            expectedBidAmount: "250.00",
            marketPricePerKg: "22.50",
            bidPricePerKg: "23.00"
          }
        },
        {
          metalName: "Aluminium",
          productCount: 3,
          details: {
            reqQty: "10",
            expectedPricePerKg: "25.00",
            expectedBidAmount: "250.00",
            marketPricePerKg: "22.50",
            bidPricePerKg: "23.00"
          }
        },
      ],
    },
    
    {
      name: 'Garbage Crunchers',
      rating: '4.5',
      reviews: '120',
      status:'close',
      location: 'Guindy',
      bidText: 'BID00012',
      postedText: 'Posted April 10, 2023',
      bidAmount: '₹600.00',
      imageSource: require('./assets/svgs/logo1.png'),
      product: [
        {
          metalName: "Aluminium",
          productCount: 3,
          details: {
            reqQty: "10",
            expectedPricePerKg: "25.00",
            expectedBidAmount: "250.00",
            marketPricePerKg: "22.50",
            bidPricePerKg: "23.00"
          }
        },
        {
          metalName: "Aluminium",
          productCount: 3,
          details: {
            reqQty: "10",
            expectedPricePerKg: "25.00",
            expectedBidAmount: "250.00",
            marketPricePerKg: "22.50",
            bidPricePerKg: "23.00"
          }
        },
        {
          metalName: "Aluminium",
          productCount: 3,
          details: {
            reqQty: "10",
            expectedPricePerKg: "25.00",
            expectedBidAmount: "250.00",
            marketPricePerKg: "22.50",
            bidPricePerKg: "23.00"
          }
        },
      ],
    },
  ];
  const countProductsByName = () => {
    const nameCounts = {};
    products.forEach((product) => {
      const name = product.name;
      nameCounts[name] = (nameCounts[name] || 0) + 1;
    });
    return nameCounts;
  };
  const nameCounts = countProductsByName();
  console.log(nameCounts);
  const filterProductsByStatus = (status) => {
    setSelectedStatus(status);
  };

  const switchProduct = (index) => {
    setCurrentProduct(index);
  };
  const handleButtonPress = () => {
    console.log('Button Pressed!');
  };
  const getStatusCounts = (status) => {
    return products.filter(product => product.status === status).length;
  };
  const renderStatusButton = (status) => (
    <TouchableOpacity
      key={status}
      onPress={() => filterProductsByStatus(status)}
      style={[styles.optionButton, selectedStatus === status && styles.selectedOption]}
    >
      <Text style={styles.optionButtonText}>{status} ({getStatusCounts(status)})</Text>
    </TouchableOpacity>
  );


  return (
    <View>
 <View style={styles.container1}>
      <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.menuIcon}>
        <Text style={styles.symbol}>☰</Text>
      </TouchableOpacity>
      <Image style={styles.image} source={require('./assets/svgs/FISH.png')}/>
      <Text style={styles.heading}>Scrapify</Text>
        <Text style={styles.loginText}>MyStock</Text>
        </View>
        <View style={styles.container2}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.optionsBar}>
        {['open', 'modified', 'confirm', 'close'].map((status) => renderStatusButton(status))}
  {/* <Text style={styles.optionButtonText1}>Open</Text>
  <TouchableOpacity style={styles.optionButton}>
    <Text style={styles.optionButtonText}> {products.status}</Text>
  </TouchableOpacity>
  <Text style={styles.optionButtonText1}>Modified</Text>
  <TouchableOpacity style={styles.optionButton}>
    <Text style={styles.optionButtonText}>{optionCounts.modified}</Text>
  </TouchableOpacity>
  <Text style={styles.optionButtonText1}>Confirm</Text>
  <TouchableOpacity style={styles.optionButton}>
    <Text style={styles.optionButtonText}>{optionCounts.confirm}</Text>
  </TouchableOpacity>
  <Text style={styles.optionButtonText1}>Close</Text>
  <TouchableOpacity style={styles.optionButton}>
    <Text style={styles.optionButtonText}>{optionCounts.close}</Text>
  </TouchableOpacity> */}
</ScrollView>    
    </View>
<ScrollView style={{gap:10,elevation:12}}>
<View style={styles.optionsBar}>

        </View>
        
        {products
          .filter((product) => product.status === selectedStatus)
          .map((product, index) => (
            <View key={index} style={styles.container}>
      <View style={styles.topSection}>
        
        <Image
        source={require('./assets/svgs/logo2.png')}
        // source={products.imageSource}
          style={styles.productImage}
        />
        <View style={styles.projectInfo}>
          <Text style={styles.projectName}>{product.name}</Text>
          <View style={styles.ratingContainer}>
            <Image
              source={require('./assets/svgs/star.png')}
              style={styles.icon}
            />

            <TextInput style={styles.rating}>{product.rating}</TextInput>
           
            <TextInput style={styles.review}>Reviews:{product.reviews}</TextInput>
          </View>
          <View style={styles.locationContainer}>
            <Image
              source={require('./assets/svgs/loc.png')}
              style={styles.icon}
            />
            <Text style={styles.location}>{product.location}</Text>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={handleNavigateToProductDetails}
            >
              <Text style={styles.button}>{product.product.length} Products{" >"}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.topLeftText}>
        <Text style={styles.bidText}>{product.bidText}</Text>
      </View>

      <View style={styles.topRightText}>
        <Text style={styles.postedText}>{product.postedText}</Text>
      </View>

      <View style={styles.iconTextContainer}></View>
      <View style={styles.bidAmountCard}>
        <Text style={styles.bidAmountText}>Total BID Amount</Text>
        <Text style={styles.bidAmountValue}>{product.bidAmount}</Text>
      </View>
    </View>
    ))}
    </ScrollView>
    <Menubarr/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 16,
    padding: 16,
    borderRadius: 8,
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 16,
  },
  icon: {
    width: 25,
    height: 26,
    marginRight: 5,
  },
  projectInfo: {
    flex: 1,
  },
  projectName: {
    fontSize: 18,
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'center',
  },
  rating: {
    color: '#f39c12',
    marginLeft: 5,
  },
  review: {
    color: '#3498db',
    marginLeft: 5,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  location: {
    color: '#3498db',
    marginLeft: 5,
  },
  buttonContainer: {
    marginLeft: 10,
    // marginTop: 10,
    marginBottom:-110,
    marginRight:50,
    marginLeft:-60

  },
  button: {
    backgroundColor: '#3498db',
    color: '#fff',
    padding: 10,
    borderRadius: 16,
  },
  topLeftText: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 10,
    marginBottom:30
  },
  topRightText: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 10,
    marginBottom:30
  },
  bidText: {
    color: '#000',
    fontSize: 16,
    marginBottom:30,
    marginTop:-20
  },
  postedText: {
    color: '#000',
    fontSize: 16,
    marginBottom:10,
    marginTop:-20
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    marginRight: 170,
  },
  bidAmountCard: {
    width: 350.231,
    height: 90,
    flexShrink: 0,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: '#D4D9DF',
    backgroundColor: '#F2F6F8',
    padding: 16,
    marginTop: 40,
  },
  bidAmountText: {
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
  },
  bidAmountValue: {
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 8,
  },
  menuIcon: {
    padding: 10,
    color: '#fff'
  },
  Image: {
    padding: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#02C784', 
},
container2: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 10,
  marginBottom:10,
  marginTop:0,
  backgroundColor: '#02C784', 
},
  symbol: {
  // fontSize: 18,
  // fontWeight: 'bold',
  color: '#fff'
  },
  optionsBar: {
    flexDirection: 'row',
    // backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  optionButton: {
    marginRight: 20,
    paddingVertical: 7,
    paddingHorizontal: 15,
    backgroundColor: '#3B4357', // Adjust the background color as needed
    borderRadius: 18,
    // marginTop:-4

  },
  optionButtonText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Inter Tight',
    fontWeight: '700',
    textAlign: 'center',
    marginRight:10,
    marginBottom:2
  },
  
  optionButtonText1: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Inter Tight',
    fontWeight: '700',
    textAlign: 'center',
    marginRight:10,
    // marginBottom:20
  },
  
  
    loginText: {
      padding: 10,
      color: '#fff',
  },
  menuIcon: {
    padding: 10,
    color: '#fff'
  },
  Image: {
    padding: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  symbol: {
  // fontSize: 18,
  // fontWeight: 'bold',
  color: '#fff'
  },
  
    loginText: {
      padding: 10,
      color: '#fff',
  },
  optionCount: {
    color: '#3498db',
    marginLeft: 5,
  },
});

export default Product;
