import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  StatusBar,
  TextInput,
  Linking,
} from 'react-native';
import React, { useState } from 'react';

import {LinearGradient} from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import firebase from 'firebase/compat';

const OtpVerification = ({ verificationId}) => {
  const navh = useNavigation();
  const [code, setCode] = useState(null);

  const confirmCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code
    );
    firebase
      .auth()
      .signInWithCredential(credential)
      .then((result) => {
        // Do something with the results here
        console.log(result);
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          delay={700}
          source={require('../../assets/images/Saly-25.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <Animatable.View animation={'fadeInUpBig'} style={styles.Footer}>
        <Text style={styles.enter}>Enter OTP</Text>
        <Text style={styles.ins}>
          Which has been sent to your Mobile Number
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={setCode}
          keyboardType="numeric"
          maxLength={6}
          cursorColor="black"
          placeholder="Enter OTP"
        />
         <Text
            style={{
              color: 'red',
              fontSize: 16,
              fontWeight: '400',
              marginVertical: 20,
              textDecorationLine: 'underline',
              alignSelf:'center'           }}
            onPress={() => Linking.openURL('http://google.com')}>
            Resend OTP
          </Text>
        <Animatable.View animation={'zoomIn'} style={styles.loginb} delay={500}>
          <TouchableOpacity
            style={styles.loginb}
            onPress={() =>{ navh.navigate('Details'); confirmCode()}}>
            <LinearGradient
              colors={['#ffa500', '#FF5C00']}
              style={styles.loginb}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  color: 'white',
                }}>
                VERIFY OTP
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </Animatable.View>
      </Animatable.View>
    </View>
  );
};

export default OtpVerification;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.33;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  Footer: {
    flex: 2,
    backgroundColor: '#C8DBEA',
    borderRadius: 24,
  },
  Header: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: height_logo,
    height: height_logo,
    alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    marginLeft: 30,
    color: 'black',
    fontSize: 20,
    width: '80%',
    borderRadius: 4,
  },
  enter: {
    fontSize: 24,
    fontWeight: '400',
    marginVertical: 30,
    marginHorizontal: 20,
  },
  ins: {
    fontSize: 16,
    fontWeight: '400',
    marginVertical: 20,
    marginHorizontal: 20,
  },
  loginb: {
    height: 40,
    width: '97%',
    padding: 10,
    fontSize: 20,
    borderRadius: 4,
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
  },
});