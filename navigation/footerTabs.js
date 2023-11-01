import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomePage from '../screens/HomePage';
import ListOfIngredients from '../screens/ListOfIngredients';
import ListOfExpiredSoon from '../screens/ListOfExpiredSoon';
import ListOfGrocery from '../screens/ListOfGrocery';
import BarCodeScanner from '../screens/BarCodeScanner';

const Tab = createBottomTabNavigator();

const footerTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#fff',
          borderRadius: 15,
          height: 90,
          ...style.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Home Page"
        component={HomePage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Image
                source={require('../assets/homeIcon.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#E32F45' : '#748C94',
                }}
              />
              <Text style={{ color: focused ? '#E32F45' : '#748C94', fontSize: 12 }}>HOME</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="List Of Ingredients"
        component={ListOfIngredients}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Image
                source={require('../assets/dottedList.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#E32F45' : '#748C94',
                }}
              />
              <Text style={{ color: focused ? '#E32F45' : '#748C94', fontSize: 12 }}>LIST</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="List Of Expiring Soon Ingredients"
        component={ListOfExpiredSoon}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Image
                source={require('../assets/expiringAlert.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#E32F45' : '#748C94',
                }}
              />
              <Text style={{ color: focused ? '#E32F45' : '#748C94', fontSize: 12 }}>EXPIRING</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="List Of Grocery"
        component={ListOfGrocery}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Image
                source={require('../assets/groceryIcon.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#E32F45' : '#748C94',
                }}
              />
              <Text style={{ color: focused ? '#E32F45' : '#748C94', fontSize: 12 }}>GROCERY</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Barcode Scanner"
        component={BarCodeScanner}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Image
                source={require('../assets/scannerIcon.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#E32F45' : '#748C94',
                }}
              />
              <Text style={{ color: focused ? '#E32F45' : '#748C94', fontSize: 12 }}>SCANNER</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const style = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default footerTabs;
