import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, Image} from 'react-native';
import Nav from './src/navigation/nav';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from './src/components/context';
import React from 'react';
import {useEffect} from 'react';
import NavS from './src/navigation/stacknav';
import * as Animatable from 'react-native-animatable';
import {ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OBnav from './src/navigation/obnav';


export default function App() {
  const [isFirstLaunch, setisFirstLaunch] = React.useState(null);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
    otpNumber: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userToken: null,
          userName: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatchAction] = React.useReducer(
    loginReducer,
    initialLoginState,
  );

  const authContext = React.useMemo(() => ({
    signIn: async (userName) => {
      let userToken;
      userToken = null;

      if (userName == 'user') {
        try {
          userToken = 'ABCD';
          await AsyncStorage.setItem('userToken', userToken);
        } catch (e) {
          console.log(eror);
        }
      }
      console.log('user token: ', userToken);
      dispatchAction({type: 'LOGIN', id: userName, token: userToken});
    },
    signOut: async () => {
      try {
        await AsyncStorage.removeItem('userToken');
      } catch (e) {
        console.log(eror);
      }

      dispatchAction({type: 'LOGOUT'});
    },
    signUp: async (userName) => {
      let userToken;
      userToken = null;

      if (userName == 'abc') {
        try {
          userToken = 'ABCD';
          await AsyncStorage.setItem('userToken', userToken);
        } catch (e) {
          console.log(eror);
        }
      }
      console.log('user token: ', userToken);
      dispatchAction({type: 'REGISTER', id: userName, token: userToken});
    },
  }));

  useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(eror);
      }

      dispatchAction({type: 'RETRIEVE_TOKEN', token: userToken});
    }, 2000);
  }, []);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setisFirstLaunch(true);
      } else {
        setisFirstLaunch(false);
      }
    });
  }, []);

  if (loginState.isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Animatable.Image
            animation="bounceIn"
            duraton="500"
            delay={400}
            source={require('./src/assets/images/path24.png')}
            style={{height: 136, width: 186, marginTop: '40%', left: 40}}
          />
          <Animatable.View animation="slideInRight" style={{marginTop: '40%'}}>
            <Image
              source={require('./src/assets/images/g26.png')}
              resizeMode="contain"
              style={styles.ir}
            />
            <Image
              source={require('./src/assets/images/g30.png')}
              resizeMode="contain"
              style={styles.ir}
            />
            <Image
              source={require('./src/assets/images/g34.png')}
              resizeMode="contain"
              style={styles.ir}
            />
          </Animatable.View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('./src/assets/images/g38.png')}
            resizeMode="contain"
            style={styles.i}
          />
          <Image
            source={require('./src/assets/images/g38.png')}
            resizeMode="contain"
            style={styles.i}
          />
        </View>
        <ActivityIndicator
          size={80}
          color={'blue'}
          style={{marginTop: '30%'}}
        />
      </View>
    );
  } else {
    if (isFirstLaunch == null) {
      return null;
    } else if (isFirstLaunch == true) {
      return (
        <AuthContext.Provider value={authContext}>
          <NavigationContainer>
            {loginState.userToken != null ? <NavS /> : <OBnav />}
            <StatusBar style="auto" />
          </NavigationContainer>
        </AuthContext.Provider>
      );
    } else {
      return (
        <AuthContext.Provider value={authContext}>
          <NavigationContainer>
            {loginState.userToken != null ? <NavS /> : <OBnav />}
            <StatusBar style="auto" />
          </NavigationContainer>
        </AuthContext.Provider>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  i: {
    height: 15,
    marginHorizontal: -20,
    right: 50,
    bottom: 10,
  },
  ir: {
    height: 10,
    marginVertical: 9,
    width: 140,
  },
});
