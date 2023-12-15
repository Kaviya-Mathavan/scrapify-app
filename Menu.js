import React from 'react';
import { Animated, Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import plus from './assets/svgs/market.png';

const Tab = createBottomTabNavigator();

export default function Menu() {
  const tabOffsetValue = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={{}}>
      <NavigationContainer>
        <Tab.Navigator tabBarOptions={{
          style: {
            backgroundColor: 'white',
            height: 60,
            borderRadius: 10,
            shadowColor: '#000',
            shadowOpacity: 0.06,
            shadowOffset: {
              width: 10,
              height: 10
            },
            marginBottom: Platform.OS === 'ios' ? 30 : 0,
            marginHorizontal: 20,
            paddingHorizontal: 20,
            position: 'relative',
          }
        }}>
          <Tab.Screen name={"Home"} component={HomeScreen} options={{
            tabBarIcon: ({ focused }) => (
              <View style={{
                position: 'absolute',
                top: 20
              }}>
                <Image
                  style={{ width: 30, height: 35, marginTop: -20 }}
                  source={require('./assets/svgs/Home.png')}
                  onPress={() => { Alert.alert("click") }}
                />
              </View>
            )
          }} listeners={({ navigation, route }) => ({
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true
              }).start();
            }
          })}></Tab.Screen>

          <Tab.Screen name={"Inventory"} component={SearchScreen} options={{
            tabBarIcon: ({ focused }) => (
              <View style={{
                position: 'absolute',
                top: 20
              }}>
                <Image
                  style={{ width: 36, height: 37, marginTop: -20 }}
                  source={require('./assets/svgs/box.png')}
                  onPress={() => { Alert.alert("click") }}
                />
                <Text style={{
                  fontSize: 9,
                  color: 'white',
                }}>Market</Text>
              </View>
            )
          }} listeners={({ navigation, route }) => ({
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth(),
                useNativeDriver: true
              }).start();
            }
          })}></Tab.Screen>

          <Tab.Screen name={" "} component={EmptyScreen} options={{
            tabBarIcon: ({ focused }) => (
              <TouchableOpacity>
                <View style={{
                  width: 55,
                  height: 55,
                  backgroundColor: '#02C784',
                  borderRadius: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: Platform.OS === 'android' ? 50 : 30
                }}>
                  <Image source={plus} style={{
                    width: 24,
                    height: 35,
                  }}></Image>
                  <Text style={{
                    fontSize: 9,
                    color: 'white',
                  }}>Market</Text>
                </View>
              </TouchableOpacity>
            )
          }}></Tab.Screen>

          <Tab.Screen name={"Mybids"} component={NotificationScreen} options={{
            tabBarIcon: ({ focused }) => (
              <View style={{
                position: 'absolute',
                top: 20
              }}>
                <Image
                  style={{ width: 35, height: 36, marginTop: -20 }}
                  source={require('./assets/svgs/shopping.png')}
                  onPress={() => { Alert.alert("click") }}
                />
              </View>
            )
          }} listeners={({ navigation, route }) => ({
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 3,
                useNativeDriver: true
              }).start();
            }
          })}></Tab.Screen>

          <Tab.Screen name={"Rewards"} component={SettingsScreen} options={{
            tabBarIcon: ({ focused }) => (
              <View style={{
                position: 'absolute',
                top: 20
              }}>
                <Image
                  style={{ width: 30, height: 36, marginTop: -20 }}
                  source={require('./assets/svgs/metal.png')}
                  onPress={() => { Alert.alert("click") }}
                />
              </View>
            )
          }} listeners={({ navigation, route }) => ({
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 4,
                useNativeDriver: true
              }).start();
            }
          })}></Tab.Screen>
        </Tab.Navigator>

        <Animated.View style={{
          width: getWidth() - 20,
          height: 2,
          backgroundColor: 'red',
          position: 'absolute',
          bottom: 98,
          left: 50,
          borderRadius: 20,
          transform: [
            { translateX: tabOffsetValue }
          ]
        }}></Animated.View>
      </NavigationContainer>
    </View>
  );
}

function getWidth() {
  let width = Dimensions.get("window").width
  width = width - 80
  return width / 5
}

function EmptyScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function NotificationScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

function SearchScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'blue'
  }
});
