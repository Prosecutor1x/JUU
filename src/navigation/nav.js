import { View, Text } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Createaccount from '../screens/sighnup/createaccoutn';
import OtpVerification from '../screens/sighnup/otpVerification';
import Home from '../screens/home';
import Login from '../screens/login';
import Obone from '../screens/oboarding/ob1';

import LoginUser from '../screens/loginUsr';
import { AuthContext } from '../components/context';


const Stack= createNativeStackNavigator();

const Nav = () => {
  return (
    
    
      <Stack.Navigator>
     
        <Stack.Screen name="CreateAccount" component={Createaccount} />
        <Stack.Screen name="OTP" component={OtpVerification} />
        <Stack.Screen name="LogIn" component={LoginUser} />
      </Stack.Navigator>
      
      
      
    
  )
}
export default Nav


