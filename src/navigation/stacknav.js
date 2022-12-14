import {View, Text} from 'react-native';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/MainScreens/home/Home';

import Shoppingcart from '../screens/MainScreens/cart/shoppingcart';

import Profile from '../screens/MainScreens/profile';

import {AntDesign} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';
import Totalbill from '../screens/MainScreens/cart/totalbill';
import Paid from '../screens/MainScreens/payment/successful';
import Previousbill from '../screens/MainScreens/profile/previousbills';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const NavS = () => {
  const navs=useNavigation()
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerBackVisible: false,
          headerShown:false
        }}
      />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerBackVisible: false,

          title: 'Scan',
          headerRight: (color) => (
            <AntDesign
              name="shoppingcart"
              size={24}
              color={color}
              style={{right: 10}}
              onPress={()=>navs.navigate('Cart')}
            />
          ),
          headerLeft: (color) => (
            <FontAwesome
              name="user-circle-o"
              size={24}
              color={color}
              style={{left: 10}}
              onPress={()=>navs.navigate('Profile')}
            />
          ),
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: '600',
          },
        }}
      />

      <Stack.Screen
        name="Cart"
        component={Shoppingcart}
        options={{
          headerBackVisible: false,

          title: 'Shopping Cart',
          headerRight: (color) => (
            <AntDesign
              name="shoppingcart"
              size={24}
              color={color}
              style={{right: 10}}
              onPress={()=>navs.navigate('Cart')}
            />
          ),
          headerLeft: (color) => (
            <FontAwesome
              name="user-circle-o"
              size={24}
              color={color}
              style={{left: 10}}
              onPress={()=>navs.navigate('Profile')}
            />
          ),
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: '600',
          },
        }}
      />
      <Stack.Screen
        name="Total"
        component={Totalbill}
        options={{
          

          title: 'Total Bill',
          headerRight: (color) => (
            <FontAwesome
              name="user-circle-o"
              size={24}
              color={color}
              style={{right: 10}}
              onPress={()=>navs.navigate('Profile')}
            />
          ),
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: '600',
          },
        }}
      />
      <Stack.Screen name="Paid" 
      component={Paid}
      options={{
        headerBackVisible: false,
        headerShown:false
      }}/>
      
      
      <Stack.Screen name="Previousbills" 
      component={Previousbill}
      options={{
      
        title: 'Previous Bill',
          headerRight: (color) => (
            <AntDesign
              name="shoppingcart"
              size={24}
              color={color}
              style={{right: 10}}
              onPress={()=>navs.navigate('Cart')}
            />
          ),
       
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: '600',
          },
      
      }}
      
      
      />
    </Stack.Navigator>
    
  );
};

export default NavS;
