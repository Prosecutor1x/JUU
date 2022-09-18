import { View, Text } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Createaccount from '../screens/sighnup/createaccoutn';
import OtpVerification from '../screens/sighnup/otpVerification';
import Home from '../screens/home';
import Login from '../screens/login';

import LoginUser from '../screens/loginUsr';
import { AuthContext } from '../components/context';


const Stack= createNativeStackNavigator();

const NavS = () => {
  return (
    
    
      <Stack.Navigator>
        
        <Stack.Screen name="Home" component={Home} />
       
      </Stack.Navigator>
      
      
      
    
  )
}
export default NavS
