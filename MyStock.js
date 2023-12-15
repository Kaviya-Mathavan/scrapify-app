import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Modal, FlatList, ScrollView, TouchableOpacity } from 'react-native';

const MyStock = () => {
  const [data, setData] = useState([
    { scrapName: 'Scrap 1', qty: 10, market: 'Market 1', expPrice: 100, image : require('./assets/svgs/glasses.png') },
    { scrapName: 'Scrap 2', qty: 15, market: 'Market 2', expPrice: 150, image : require('./assets/svgs/glasses.png') },
    { scrapName: 'Scrap 2', qty: 15, market: 'Market 2', expPrice: 150, image : require('./assets/svgs/glasses.png') },
    { scrapName: 'Scrap 2', qty: 15, market: 'Market 2', expPrice: 150, image : require('./assets/svgs/glasses.png') },
    { scrapName: 'Scrap 2', qty: 15, market: 'Market 2', expPrice: 150, image : require('./assets/svgs/glasses.png') },
    { scrapName: 'Scrap 2', qty: 15, market: 'Market 2', expPrice: 150, image : require('./assets/svgs/glasses.png') },
    // Add more data as needed
  ]);

  return (
    <Modal animationType="slide" transparent={true} visible={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
            <Image source={require('./assets/svgs/symbol.png')} style={styles.closeIcon} />
            <Text style={styles.heading}>My Stock</Text>

            {/* List of Columns */}
            <View style={styles.columnContainer}>
              <Text style={styles.column}>Scrap Type</Text>
              <Text style={styles.column1}>QTY</Text>
              <Text style={styles.column1}>Market</Text>
              <Text style={styles.column1}>Exp. Price</Text>
            </View>
            <View style={styles.separator}></View>

            <ScrollView contentContainerStyle={styles.scrollContainer}>
            {/* List of Data */}
            <FlatList
              data={data}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <>
                  {/* Details for each row */}
                  <View style={styles.rowContainer}>
                    <Image source={item.image} style={styles.scrapImage} />
                    <Text style={styles.row}>{item.scrapName}</Text>
                    <Text style={styles.row}>{item.qty}</Text>
                    <Text style={styles.row}>{item.market}</Text>
                    <Text style={[styles.row, styles.rightAlign]}>{item.expPrice}</Text>
                  </View>

                  <View style={[styles.bidAmountContainer, styles.fadeBlueBackground]}>
                    <Text style={[styles.text, styles.leftAlign]}>
                      Expected Bid Amt.
                    </Text>
                    <Text style={[styles.text1, styles.rightAlign]}>
                    ₹{item.expPrice}
                    </Text>
                  </View>
                </>
              )}
            />
          </ScrollView>

          {/* Update Inventory Button */}
          <TouchableOpacity style={styles.fullWidthButton}>
            <Text style={styles.buttonText} title="update_inventory">Update Inventory</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#004159',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    height: '80%',
    marginTop: '60%', 
  },
  scrollContainer: {
    flexGrow: 1,
  },
  heading: {
    marginTop: -20,
    marginBottom: 20,
    textAlign: 'center',
    color: '#005A7B',
    fontSize: 22,
    fontFamily: 'Inter Tight',
    fontWeight: '700',
  },
  leftAlign: {
    textAlign: 'left',
  },
  rightAlign: {
    textAlign: 'right',
  },
  fadeBlueBackground: {
    backgroundColor: '#F2F6F8', 
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#D4D9DF'
  },
  columnContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  scrapImage: {
    width: 20, // Adjust the width as needed
    height: 40, // Adjust the height as needed
    marginRight: 8,
  },

  column: {
    flex: 1.5,
    fontSize: 14,
    textAlign: 'center',
    color: '#818694',
  },
  column1:{
    textAlign: 'center',
    justifyContent: 'space-around',
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    alignItems: 'center', // Align items vertically in the center
  },
  row: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    color: '#3B4357',
  },
  separator: {
    height: 1,
    backgroundColor: '#818694',
    marginVertical: 10,
  },
  text: {
    color: '#3B4357',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    marginTop: 10,
  },
  text1:{
    color: '#3B4357',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    marginTop: 10,
  },
  bidAmountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft : 20,
    paddingRight : 20,
    marginBottom: 10,
  },
  fullWidthButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    width: '100%',
    borderColor: '#005A7B',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 25,
  },
  buttonText: {
    color: '#005A7B',
  },
  closeIcon: {
    width: 20,
    height: 20,
    justifyContent: 'flex-start',
  },
});

export default MyStock;
