
import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Animated, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default class BottomNavigator extends Component {

    
    navigateToListProduct = () => {
        this.props.navigation.navigate('Inventory');
    }

    render() {
        return (
            <View>
                 {/* <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.menuIcon}>
        <Text style={styles.symbol}>☰</Text>
      </TouchableOpacity>
      <Image style={styles.image} source={require('./assets/svgs/FISH.png')}/>
      <Text style={styles.heading}>Scrapify</Text>
       <Text style={styles.loginText}>Login</Text>
     
    </View> */}
            <View style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: '#20D497'

            }}>               

                <View style={{
                    position: 'absolute',
                    alignSelf: 'center',
                    backgroundColor: '#20D497',
                    width: 70,
                    height: 70,
                    borderRadius: 35,
                    top:280,
                    zIndex: 10


                }}>

                    <TouchableWithoutFeedback onPress={this.toggleOpen}>
                        <View style={[styles.button, styles.actionBtn]}>

                            <Image style={{ width: 30, height: 30 }}
                                resizeMode="contain"
                                source={require('./assets/svgs/market.png')} />
                                <Text style={{justifyContent:'center',alignItems:'center',color:'white', fontSize: 12, fontFamily: 'Inter Tight', fontWeight: '500' }}>Market</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={{

                    position: 'absolute',
                    backgroundColor: 'white',
                    border: 2,
                    radius: 3,
                    shadowOpacity: 0.3,
                    shadowRadius: 3,
                    marginBottom:-390,
                    shadowOffset: {

                        height: 3, width: 3
                    },
                    x: 0,
                    y: 0,
                    style: { marginVertical: 5 },
                    bottom: 0,
                    width: '100%',
                    height: 70,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 10,
                    paddingHorizontal: 25


                }}>

                    <View style={{


                        flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <TouchableOpacity onPress={() => { Alert.alert('click') }}>
                            <Image

                                style={{ width: 32, height: 36 }}

                                source={require('./assets/svgs/Home.png')}

                                onPress={()=>{Alert.alert("")}}
                            >

                            </Image>
                  

                        </TouchableOpacity>
                        <Text style={{justifyContent:'center',alignItems:'center',color:'#005A7B', fontSize: 12, fontFamily: 'Inter Tight', fontWeight: '500'}}>Home</Text>
                    </View>
                    
                    <View style={{
                        flexDirection: 'column', alignItems: 'center',justifyContent:'center',marginStart:30
                    }}>

                        <TouchableOpacity
                            onPress={this.navigateToListProduct}
                        >
                            <Image
                                style={{  width: 32, height: 33 }}
                                source={require('./assets/svgs/box.png')}
                                onPress={() => { Alert.alert("click") }}
                            />
                       
                        </TouchableOpacity>
                        <Text style={{justifyContent:'center',alignItems:'center',color:'#005A7B', fontSize: 12, fontFamily: 'Inter Tight', fontWeight: '500' }}>Inventory</Text>
                    </View>

                    <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', marginStart: 85 }}>
                    <TouchableOpacity >
                    <Image
                        source={require('./assets/svgs/shopping.png')}
                        style={{ marginHorizontal: 16, width: 32, height: 32 }}
                    />
                </TouchableOpacity>
                <Text style={{ justifyContent: 'center', alignItems: 'center', color: '#005A7B', fontSize: 12, fontFamily: 'Inter Tight', fontWeight: '500' }}>My Bids</Text>
            </View>
                        <View style={{
                            flexDirection: 'column', alignItems: 'center',justifyContent:'flex-end',
                          
                        }}>
                            <TouchableOpacity
                                onPress={() => { Alert.alert("click") }}
                            >
                                <Image
                                    source={require('./assets/svgs/metal.png')}

                                    style={{ marginHorizontal: 16, width: 30, height: 36,marginBottom:-3}}
                                    containerStyle={{ marginHorizontal: 16 }}
                                />
                     
                            </TouchableOpacity>
                            <Text style={{justifyContent:'center',alignItems:'center',color:'#005A7B', fontSize: 12, fontFamily: 'Inter Tight', fontWeight: '500' }}>Rewards </Text>
                           
                        </View>

                </View>
            </View>
            </View>
        );
    }

    
}


const styles = StyleSheet.create({

    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    button: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#20D497',
        shadowOpacity: 0.1,
        shadowOffset: { x: 2, y: 0 },
        shadowRadius: 2,
        borderRadius: 30,
        position: 'absolute',
        bottom: 20,
        right: 0,
        top: 5,
        left: 5,
        shadowOpacity: 5.0,
        // marginBottom:200

    },
    actionBtn: {

        backgroundColor: '#20D497',
        textShadowOffset: { width: 10, height: 10 },
        textShadowRadius: 10,
        borderWidth: 2,
        borderColor: '#20D497'


    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        // backgroundColor: '#f0f0f0',
        backgroundColor: '#02C784', 
        marginTop:100,
        marginBottom:100
    },
    menuIcon: {
      padding: 10,
      color: '#fff',
      
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


});