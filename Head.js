import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image,ScrollView } from 'react-native';

export default function Header({ selectedTab, setSelectedTab, count, setInventoryOpen }) {
 
const handleChange=(newValue)=>{
  setSelectedTab(newValue);
}
  

  const tabs = [
    {
      key: 'open',
      value: 'Open',
      count: count?.open,
    },
    {
      key: 'modified',
      value: 'Modified',
      count: count?.modified,
    },
    {
      key: 'confirmed',
      value: 'Confirmed',
      count: count?.confirmed,
    },
    {
      key: 'closed',
      value: 'Close',
      count: count?.closed,
    },
  ];

  return (
    <>
      <View style={{ paddingTop: 10,paddingHorizontal:10, width: '100%',backgroundColor: '#02C784'}}>
        
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between',gap:15 }}>
            {tabs.map((tab, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleChange(tab.key)}
                style={{
                  marginRight: 15,
                  borderBottomWidth: selectedTab === tab.key ? 5 : 0,
                  borderBottomColor: theme.colors.light, 
                
                }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center' ,marginVertical:5}}>
                  <View style={{marginRight: 5}}>
                    
                  <Text
                    style={{
                      
                      fontSize: 20,
                      color:   theme.colors.light,
                      fontWeight:selectedTab === tab.key ?'bold':'normal',
                      textTransform: 'none',
                    }}
                  >
                    {tab.value}
                  </Text>
                 </View>
                 <View style={{backgroundColor: selectedTab === tab.key ?   theme.colors.light:'#578962',
            borderRadius: 40,
            paddingHorizontal: 12,
            paddingVertical: 3,
            }}>

                    <Text style={{ color: selectedTab === tab.key ? theme.colors.primary : theme.colors.light ,fontSize:theme.sizes.medium,fontWeight:'bold'}}>
                      {tab.count}
                    </Text>
                 </View>
             
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
}
