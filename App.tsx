import React from 'react';
import Navbarr from './Navbarr';

import Profile from './Profile';
import Selector from './Selector';
import { View } from 'react-native';
import LoginScreen from './LoginScreen';
import FlipkartMenuBar from './FlipkartMenuBar';

import Menu from './Menu';
import Search from './Search';
import Categories from './Categories';
import Register from './Register';
import Products from './Products';
import Register2 from './Register2';
import Register3 from './Register3';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Listproduct from './Listproduct';
import VerificationScreen from './VerficationScreen';
import ProductDetails from './ProductDetails';
import Product from './Product';
import LoginOtp from './LoginOtp';
import Success from './Success';
import Combine from './Combine';
import Profile1 from './Profile1';
import Profile2 from './Profile2';
import Menubar from './Menubar';
import Register4 from './Register4';
import Register5 from './Register5';
import Inventory from './Inventory';
import AddProducts from './AddProducts';

import SelectedProduct from './SelectedProduct';
import ScrapInventary from './ScrapInventary';
import RegisterOtp from './RegisterOtp';
import MyStock from './MyStock';
import Location from './Location';
import ReviewPage from './ReviewPage';
import BidDetail from './BidDetail';
import Menubarr from './Menubarr';
import Head from './Head';
// import Profile from './Profile';
const Stack=createStackNavigator();
const {Navigator,Screen}=Stack
const App = () =>{
  return(


  <NavigationContainer>
      <Navigator initialRouteName="Register" screenOptions={{ headerShown:false}} >
     <Screen name="LoginScreen" component={LoginScreen} /> 
        <Screen name="LoginOtp" component={LoginOtp} />
        <Screen name="Menubar" component={Menubar} />
        <Screen name="Menubarr" component={Menubarr} />
        <Screen name="Success" component={Success} />
        <Screen name="Register" component={Register} />
        <Screen name="Register2" component={Register2} />
        <Screen name="Register3" component={Register3} />
        <Screen name="Register4" component={Register4} />
        <Screen name="Register5" component={Register5} />
        <Screen name="RegisterOtp" component={RegisterOtp} />
  <Screen name="Inventory" component={Inventory} />
<Stack.Screen name="AddedProducts" component={AddProducts} /> 
  <Screen name="SelectedProduct" component={SelectedProduct} />
 <Screen name="Listproduct" component={Listproduct}/>
     <Screen name="ScrapInventary" component={ScrapInventary} />
     <Screen name="ReviewPage" component={ReviewPage} />
     <Screen name="Product" component={Product} />
     <Screen name="ProductDetails" component={ProductDetails} />
     <Screen name="MyStock" component={MyStock} />
      </Navigator>
    </NavigationContainer>

//     <View>

//     {/* <Profile/> */}
//     {/* <Profile1/> */}
//     {/* <Location navigation={undefined}/> */}
//     {/* <BidDetail setIsDetail={undefined} bid={undefined} handleActions={undefined} selectedTab={undefined}/> */}
//     {/* <Profile2/> */}
// {/* <MyStock/> */}
//  <Product/>
//     {/* <ProductDetails/> */}
//     {/* <Products/> */}
// {/* <Head selectedTab={undefined} setSelectedTab={undefined} count={undefined} setInventoryOpen={undefined}/> */}
//  </View>

  );
}
export default App;