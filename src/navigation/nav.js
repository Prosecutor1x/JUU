import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Createaccount from '../screens/sighnup/createaccoutn';
import OtpVerification from '../screens/sighnup/otpVerification';
import Home from '../screens/sighnup/Enterdetails';
import Login from '../screens/login/login';
import Obone from '../screens/oboarding/ob1';
import LoginUser from '../screens/login/loginUsr'
import { AuthContext } from '../components/context';
import EnterDetails from '../screens/sighnup/Enterdetails';


const Stack= createNativeStackNavigator();

const Nav = () => {
  return (
  <Stack.Navigator> 
    <Stack.Screen name="CreateAccount" component={Createaccount} />
    <Stack.Screen name="OTP" component={OtpVerification} />
    <Stack.Screen name="LogIn" component={LoginUser} />
    <Stack.Screen name="Details" component={EnterDetails} />
  </Stack.Navigator>  
  )
}
export default Nav


