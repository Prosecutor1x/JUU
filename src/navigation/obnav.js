import {View, Text} from 'react-native';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Createaccount from '../screens/sighnup/createaccoutn';

import Home from '../screens/sighnup/Enterdetails';
import Obone from '../screens/oboarding/ob1';
import OtpVerification from '../screens/sighnup/otpVerification';
import LoginUser from '../screens/login/loginUsr';
import EnterDetails from '../screens/sighnup/Enterdetails';

const Stack = createNativeStackNavigator();

const OBnav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Onboard" component={Obone} />
      <Stack.Screen name="CreateAccount" component={Createaccount} />
      <Stack.Screen name="OTP" component={OtpVerification} />
      <Stack.Screen name="LogIn" component={LoginUser} />
      <Stack.Screen name="Details" component={EnterDetails} />
    </Stack.Navigator>
  );
};
export default OBnav;
