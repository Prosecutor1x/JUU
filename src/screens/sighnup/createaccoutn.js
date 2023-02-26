import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  StatusBar,
  TextInput,
  Linking,
} from 'react-native';

import React, {useRef, useState} from 'react';
import * as Animatable from 'react-native-animatable';
import {Feather} from '@expo/vector-icons';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import firebase from 'firebase/compat';
import {firebaseConfig} from '../../../config/firebaseconfig';
import {FirebaseRecaptchaVerifierModal} from 'expo-firebase-recaptcha';
import OtpVerification from './otpVerification';

const Createaccount = () => {
  const navb = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [verificationId, setVerificationId] = useState(null);
  const recaptchaVerifier = useRef(null);

  const sendVerification = () => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
      .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
      .then(setVerificationId)
      .catch((error) => alert(error.message));
    setPhoneNumber('');
  };

  return (
    <View style={styles.container}>
      {verificationId == null ? (
        <>
       
          <StatusBar backgroundColor="#009387" barStyle="light-content" />
          <FirebaseRecaptchaVerifierModal
            ref={recaptchaVerifier}
            firebaseConfig={firebaseConfig}
          />
          <View style={styles.imageContainer}>
            <Animatable.Image
              animation="bounceIn"
              duraton="1500"
              delay={700}
              source={require('../../assets/images/Saly-25.png')}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
          <Animatable.View
            animation={'fadeInUpBig'}
            style={styles.containersec}>
            <Text style={styles.login}>Create Account</Text>
            <Text style={styles.Heading}>Mobile Number</Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={styles.input}
                onChangeText={setPhoneNumber}
                keyboardType="phonepad"
                maxLength={13}
                cursorColor="black"
                placeholder="Enter Mobile Number with country code"
              />

              {/* {data.check_textInputChange ? (
            <Feather
              style={{color: 'green', alignSelf: 'center'}}
              name="check-circle"
              size={18}
              color="black"
            />
          ) : null} */}
            </View>
            <View style={styles.tc}>
              {/* <TouchableOpacity onPress={iconChange}>
            {data.icShown ? (
              <Feather
                style={styles.icon}
                name="check-square"
                size={18}
                color="green"
              />
            ) : (
              <Feather
                style={styles.icon}
                name="square"
                size={18}
                color="black"
              />
            )}
          </TouchableOpacity> */}

              <Text style={styles.tandc}>I agree to all </Text>
              <Text
                style={{
                  color: 'red',
                  fontSize: 16,
                  fontWeight: '400',
                  marginVertical: 20,
                  textDecorationLine: 'underline',
                }}
                onPress={() => Linking.openURL('http://google.com')}>
                Terms and Conditions
              </Text>

              <Text style={styles.tandc}> and </Text>
              <Text
                style={{
                  color: 'red',
                  fontSize: 16,
                  fontWeight: '400',
                  marginVertical: 20,
                  textDecorationLine: 'underline',
                }}
                onPress={() => Linking.openURL('http://google.com')}>
                Privacy Policies
              </Text>
            </View>
            <Animatable.View
              animation={'zoomIn'}
              style={styles.loginb}
              delay={500}>
              <TouchableOpacity
                style={styles.loginb}
                onPress={() => {
                  sendVerification();
                  console.log(verificationId);
                }}>
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
            <View style={styles.tc}>
              <MaterialCommunityIcons
                style={styles.icon}
                name="account-check-outline"
                size={18}
                color="black"
              />
              <Text style={styles.tandc}>Already have an account? </Text>

              <Text
                style={{
                  color: 'red',
                  fontSize: 16,
                  fontWeight: '400',
                  marginVertical: 20,
                  textDecorationLine: 'underline',
                }}
                onPress={() => navb.navigate('LogIn')}>
                LogIn
              </Text>
            </View>
          </Animatable.View>
        </>
      ) : (
        <>
          <OtpVerification verificationId={verificationId} />
        </>
      )}
    </View>
  );
};

export default Createaccount;
const {height} = Dimensions.get('screen');
const height_logo = height * 0.33;

const styles = StyleSheet.create({
  image: {
    width: height_logo,
    height: height_logo,
  },
  container: {
    flex: 1,
    width: '100%',
  },
  containersec: {
    flex: 2,
    backgroundColor: '#C8DBEA',
    borderRadius: 24,
  },
  imageContainer: {
    flex: 1,
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
  login: {
    fontSize: 24,
    fontWeight: '400',
    marginVertical: 30,
    marginHorizontal: 20,
  },
  Heading: {
    fontSize: 16,
    fontWeight: '400',
    marginVertical: 20,
    marginHorizontal: 20,
  },
  tc: {
    flexDirection: 'row',
    marginHorizontal: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tandc: {
    fontSize: 16,
    fontWeight: '400',
    marginVertical: 20,
  },
  icon: {
    marginHorizontal: 5,
    marginVertical: 30,
    borderRadius: 6,
  },
  loginb: {
    height: 40,
    width: '97%',
    padding: 10,
    fontSize: 20,
    borderRadius: 4,
    marginVertical: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
});
