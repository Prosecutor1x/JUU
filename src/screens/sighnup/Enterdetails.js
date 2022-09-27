import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {AuthContext} from '../../components/context';
import React from 'react';
import {useEffect} from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {Feather} from '@expo/vector-icons';

const EnterDetails = () => {
  const [verified, setVerified] = React.useState(true);

  const {signUp} = React.useContext(AuthContext);

  const [data, setData] = React.useState({
    userName: '',
    check_textInputChange: false,
    icShown: false,
  });
  const textInputChange = (val) => {
    if (val.length != 1) {
      setData({
        ...data,
        userName: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        userName: val,
        check_textInputChange: false,
      });
    }
  };

  const signupHandler = (userName) => {
    signUp(userName);
  };

  useEffect(() => {
    setTimeout(() => {
      setVerified(false);
    }, 3000);
  }, []);
  if (verified) {
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/images/conf.png')} />
        <Text>Your Mobile Number is verified </Text>
        <Text>successfully</Text>
        <Text style={{marginTop: '50%'}}>
          Automatically Redirected to next{' '}
        </Text>
        <Text>Page in 3 Seconds </Text>
      </View>
    );
  } else {
    return (
      <View View style={styles.container}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
            marginVertical: 40,
            marginBottom: 80,
          }}>
          Enter Details
        </Text>

        <Text style={styles.textin}>User name</Text>
        <TextInput
          style={styles.input}
          onChangeText={(val) => textInputChange(val)}
          cursorColor={'black'}
          placeholder="Enter User Name"
        />
        <Text style={styles.textin}>Email Id</Text>
        <TextInput
          style={styles.input}
          onChangeText={() => textInputChange()}
          cursorColor={'black'}
          placeholder="Enter Email ID"
        />
        <Text style={styles.textin}>Location</Text>
        <TextInput
          style={styles.input}
          onChangeText={() => textInputChange()}
          cursorColor={'black'}
          placeholder="Enter Location"
        />

        <TouchableOpacity
          style={styles.Next}
          onPress={() => {
            signupHandler(data.userName);
          }}>
          <LinearGradient colors={['#ffa500', '#FF5C00']} style={styles.Next}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '400',
                color: 'white',
              }}>
              NEXT
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  }
};

export default EnterDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C8DBEA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Next: {
    height: 40,
    width: '97%',
    padding: 10,
    fontSize: 20,
    borderRadius: 4,
    marginTop: 90,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
  },
  input: {
    height: 40,
    margin: 18,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    color: 'black',
    fontSize: 14,
    width: '80%',
    borderRadius: 4,
  },
  textin: {
    fontSize: 16,
    fontWeight: '400',
    marginRight: '60%',
  },
});
