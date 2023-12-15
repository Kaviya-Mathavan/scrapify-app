import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, ScrollView,Image } from 'react-native';
import Modal from 'react-native-modal'; // Make sure to import from the correct library
// import { BackArrow, CalenderIcon, ClockIcon, CloseIcon, DeleteIcon, MetalIcon, Union } from '../../util/Image';
// import theme from '../../util/Theme';
// import { PrevNextButton, PrimaryButton, SecondaryButton } from '../../Reusable/Button';
// import Popup from '../../Reusable/Popup';
const BidDetail = ({ setIsDetail, bid, handleActions, selectedTab }) => {
//   const props = [
//   (img =
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHEyp1biOa3pMHSuHqo4zOJohXKKqjEVWJQw&usqp=CAU'),
//   (sellerName = 'Lakshmanan Raman'),
//   (lastposted = 'last posted 3 months ago'),
// ];
const [isAcceptModalVisible, setAcceptModalVisible] = useState(false);
  const [isRejectModalVisible, setRejectModalVisible] = useState(false);


  const DeleteAcceptModal = () => {
    setRejectModalVisible(!isRejectModalVisible);
  };

  const AcceptModal = () => {
    setAcceptModalVisible(!isAcceptModalVisible);
  };
 
  return (
  
      
    <View style={[styles.modalContent,{maxHeight:'80%'}]}>
          <ScrollView>
       
        <View >
          <View style={{margin:10}}>
          <View style={{ display: 'flex', flexDirection: 'row', gap: 12 }}>
          <Image source={{ uri:bid.img }} style={{ height: 80, width: 90, borderRadius: 20 }} />
          <View style={{ display: 'flex', justifyContent: 'space-between' }}>
            <View>
              <Text style={styles.seller_name}>{bid?.sellerName}</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 20 }}>
              <View>
                <Text style={styles.rating}>4.5</Text>
              </View>
             
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
              
                <Text style={styles.review}>54k Reviews</Text>
              </View>
            </View>
            <View>
              <Text style={styles.lastposted}>last posted 3 months ago</Text>
            </View>
          </View>
        </View>
          </View>
        <View style={{flexDirection:'row',margin:10}}>
        <CalenderIcon/>
        <View style={styles.datetime}>
          <Text>Pickup date</Text>
          <Text style={styles.datetime.text}>{bid?.date}</Text>
        </View>
        </View>
        <View style={{flexDirection:'row',margin:10}}>
        <ClockIcon/>
        <View style={styles.datetime}>
          <Text>Time</Text>
          <Text style={styles.datetime.text}>{bid?.pickupTime}</Text>
        </View>
        </View>
        <View style={styles.ExpAmt}>
        {/* <Text style={{ fontSize: theme.sizes.large }}>Total BID Amount</Text>
        <Text style={{ fontSize: theme.sizes.xlarge, fontWeight: 700, color: theme.fontColor.grey90 }}>{bid?.bidAmt}</Text> */}
    </View>
    
    <View >
      {bid?.products?.map((product, index) => (
        <View key={index} style={{borderBottomWidth: 1, borderBottomColor: theme.fontColor.grey40 ,marginTop:10}}>
          <View style={{ flexDirection: 'row', margin: 10 }}>
            <View>
              <MetalIcon />
            </View>
            <View style={styles.datetime}>
              <Text style={{ fontSize: 20, fontWeight: '700', color: theme.fontColor.grey90 }}>{product.metalName}</Text>
              <Text style={{ fontSize: 16, fontWeight: '600', color: theme.fontColor.grey50 }}>{`${product.productCount} Products`}</Text>
            </View>
          </View>
          <View style={styles.maindiv}>
            <View style={styles.div1}>
              <View>
                <Text style={styles.text1}>Req.Qty</Text>
                <Text style={styles.text2}>{`₹${product.details?.reqQty}`}</Text>
              </View>
              <View>
                <Text style={styles.text1}>Expected Price/kg</Text>
                <Text style={styles.text2}>{`₹${product.details.expectedPricePerKg}`}</Text>
              </View>
              <View>
                <Text style={styles.text1}>Expected BID Amt.</Text>
                <Text style={styles.text2}>{`₹${product.details.expectedBidAmount}`}</Text>
              </View>
            </View>
            <View style={styles.div2}>
              <View>
                <Text style={styles.text1}>Market Price/kg</Text>
                <Text style={styles.text2}>{`₹${product.details.marketPricePerKg}`}</Text>
              </View>
              <View>
                <Text style={styles.text1}>BID Price/kg</Text>
                <Text style={styles.text2}>{`₹${product.details.bidPricePerKg}`}</Text>
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
        
       </View>
       <View
                  style={{
                   marginVertical:20,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                { selectedTab === "open"?   <PrimaryButton
                    buttonText="Accept"
                    customStyle={{
                      height: 60,
                    }}
                    onPress={AcceptModal}
                 /> :""}
                { selectedTab === "confirmed"?   <PrimaryButton
                    buttonText="Complete Transaction"
                    customStyle={{
                      height: 60,
                    }}
                
                 /> :""}
                
                     { selectedTab === "open"?  <SecondaryButton
                    buttonText="Reject"
                    customStyle={{
                      height: 60,
                      marginVertical:15
                    }}
                    onPress={DeleteAcceptModal}/>:""}
                      { selectedTab === "open"? <SecondaryButton
                    buttonText="Modify"
                    customStyle={{
                      height: 60,
                      
                    }}/>:""}
                  </View>


                    </ScrollView>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        
    <Modal
        isVisible={isAcceptModalVisible}
        style={styles.DeleteAcceptModal}
        onBackdropPress={AcceptModal}
        onBackButtonPress={AcceptModal}
        backdropOpacity={0.8}
        >
        {/* <Popup     
          message="Are you sure about accepting this BID?"
          PrevText="Cancel"
          NextText="Yes, Accept"
          onPressPrev={AcceptModal}
          /> */}
      </Modal>

      <Modal
        isVisible={isRejectModalVisible}
        style={styles.DeleteAcceptModal}
        onBackdropPress={DeleteAcceptModal}
        onBackButtonPress={DeleteAcceptModal}
        backdropOpacity={0.8}
        >
        {/* <Popup
          requiredIcon="DeleteIcon"  
          message="Are you sure you reject this BID?"
          PrevText="Cancel"
          NextText="Yes, Reject"
          onPressPrev={DeleteAcceptModal}
          /> */}
      </Modal>
         </View>
       </View>
 
     
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
          margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    height: '100%',
  },
  DeleteAcceptModal: {
    justifyContent: 'center',
       
  },
  DeleteAcceptModalContent: {
    backgroundColor: 'white',
    height: '37%',
    width:'100%',
    borderRadius:12,
    alignItems:'center'
  },
modal1text:{
  fontSize:18,
  fontWeight:'bold',
//   color:theme.fontColor.dark
},
  closeIconContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  RegisteText: {
    fontSize: 23,
    // color: theme.colors.primary,
    fontWeight: 'bold',
  },
  TopNav:{
    height:80,
    backgroundColor:'#00DF8F',
    justifyContent:'center',
    flexDirection:'column'
    

  },
  datetime:{
    flexDirection:'column',
    marginHorizontal:10,
    gap:3,
    text:{
      fontSize:16,
      color:'#5b5858',
      fontWeight:'bold'
    }
  },
  ExpAmt:{
    flexDirection:'column',
    alignItems:'center',
    padding:10,
    backgroundColor:'#F2F6F8',
    borderRadius:10,
    borderWidth:2,
    borderColor:'#D4D9DF',
    margin:10
  },
 
   text1:{
      fontSize:18
    },
  text2:{
    //   fontSize:theme.sizes.large,
    //   color:theme.colors.dark,
      fontWeight:'700'
    },
    maindiv:{
      flexDirection:'row',
      justifyContent:'space-between',
      width:'80%',
      marginHorizontal:20,
      marginVertical:10
    },
    div1:{
      gap:20
    },
    div2:{
      gap:20
    },
   
    container: {
      height: 350, 
      borderRadius: 24,
      paddingVertical: 12,
      paddingHorizontal: 12,
      borderWidth: 1,
    //   borderColor: theme.fontColor.grey40,
      justifyContent: 'space-between',
      backgroundColor: theme.colors.light,
    },
  
    rating: {
    //   fontSize: theme.sizes.medium,
      fontWeight: '900',
    //   color: theme.fontColor.grey90,
    },
    review: {
    //   fontSize: theme.sizes.medium,
      fontWeight: '400',
    //   color: theme.fontColor.grey90,
    },
    lastposted: {
    //   fontSize: theme.sizes.medium,
      fontWeight: '400',
    //   color: theme.fontColor.grey50,
    },
  
    seller_name: {
    //   fontSize: theme.sizes.large,
      fontWeight: '900',
    //   color: theme.fontColor.grey90,
    },
    buttonText: {
      color: 'black',
      fontSize: 16,
      fontWeight: 'bold',
    },
 
});

export default BidDetail;
