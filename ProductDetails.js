import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useRoute } from '@react-navigation/native';
const ProductDetails = () => {
  const route = useRoute();
  const { productId } = route.params;
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setSelectedDate(selectedDate);
    }
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.topSection}>
        <Image
          source={require('./assets/svgs/logo1.png')}
          style={styles.productImage}
        />
        <View style={styles.projectInfo}>
          <Text style={styles.projectName}>Garbage Crunchers</Text>
          <View style={styles.ratingContainer}>
            <Image
              source={require('./assets/svgs/star.png')}
              style={styles.icon}
            />
            <Text style={styles.rating}>Rating: 4.5 </Text>
            <Text style={styles.review}>Reviews: 120</Text>
          </View>
          <View style={styles.locationContainer}>
            <Image
              source={require('./assets/svgs/loc.png')}
              style={styles.icon}
            />
            <Text style={styles.location}>Guindy</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity onPress={() => setShowDatePicker(true)}>
        <View style={styles.iconTextContainer}>
          <Image
            source={require('./assets/svgs/calender.png')}
            style={styles.icon}
          />
          <Text style={styles.pickupDate}>Pickup Date:</Text>
          <Text style={styles.pickupDate1}> {selectedDate.toDateString()}</Text>
        </View>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          onChange={handleDateChange}
        />
      )}

      <View style={styles.iconTextContainer}>
        <Image
          source={require('./assets/svgs/clock.png')}
          style={styles.icon}
        />
        <Text style={styles.pickupTime}>Pickup Time: </Text>
        <Text style={styles.pickupTime1}> 3:00 PM</Text>
      </View>
      <View style={styles.bidAmountCard}>
        <Text style={styles.bidAmountText}>Total BID Amount</Text>
        <Text style={styles.bidAmountValue}>₹600.00</Text>
      </View>
      <View style={styles.aluminumContainer}>
        <Image
          source={require('./assets/svgs/metals.png')}
          style={styles.aluminumImage}
        />
        
        <Text style={styles.aluminumHeading}>Aluminum</Text>
        </View>
        <View style={styles.aluminumDetailsContainer}>
    <View style={styles.detailGrid}>
      <View style={styles.detailColumn}>
        <Text style={styles.detailHeading}>Req. Qty:</Text>
        <Text style={styles.detailValue}>10</Text>
      </View>
      <View style={styles.detailColumn}>
        <Text style={styles.detailHeading}>Expected Price:</Text>
        <Text style={styles.detailValue}>₹500.00</Text>
      </View>
    </View>
    <View style={styles.detailGrid}>
      <View style={styles.detailColumn}>
        <Text style={styles.detailHeading}>Expected Bid Price:</Text>
        <Text style={styles.detailValue}>₹550.00</Text>
      </View>
      <View style={styles.detailColumn}>
        <Text style={styles.detailHeading}>Bid Price:</Text>
        <Text style={styles.detailValue}>₹550.00</Text>     
    </View>
  </View>
  </View>
      
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
    marginBottom: 30,
  },
  location: {
    color: '#3498db',
    marginLeft: 5,
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    marginRight: 170,
  },
  pickupDate: {
    color: '#3498db',
    marginBottom: 8,
    marginLeft: 10,
  },
  pickupDate1: {
    marginTop: 30,
    marginRight: 10,
  },
  pickupTime: {
    color: '#3498db',
    marginBottom: 8,
    marginLeft: 10,
  },
  pickupTime1: {
    marginTop: 30,
    marginRight: 40,
  },
  aluminumContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  aluminumImage: {
    width: 60, 
    height: 80, 
    marginRight:100,
    marginTop:40,
    // marginLeft:10
    
  },
  aluminumHeading: {
    fontSize: 22,
    color:'#000000',
    fontWeight: 'bold',
    // marginLeft:50,
  marginBottom:20,
  marginRight:70 , 
  marginTop:40, 
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
    marginTop: 16,
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
  aluminumDetailsContainer: {
    marginTop: 25,
    width: '100%',
    padding: 16,
    backgroundColor: '#F2F6F8',
    borderRadius: 8,
  },
  detailGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginBottom: 45
  },
  detailColumn: {
    flex: 1,
    marginRight: 8,
  },
  detailHeading: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  detailValue: {
    fontSize: 16,
  },
  
  
});

export default ProductDetails;
