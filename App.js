import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useEffect } from 'react';
import NavS from './src/navigation/stacknav';
import * as Animatable from 'react-native-animatable';
import { ActivityIndicator } from 'react-native';

export default function App() {
  const [isFirstLaunch, setisFirstLaunch] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  if (isLoading) {
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
            style={{ height: 136, width: 186, marginTop: '40%', left: 40 }}
          />
          <Animatable.View animation="slideInRight" style={{ marginTop: '40%' }}>
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
        <View style={{ flexDirection: 'row' }}>
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
          style={{ marginTop: '30%' }}
        />
      </View>
    );
  } else {
   return (
    <NavigationContainer>
    <NavS />
    <StatusBar style="auto" />
  </NavigationContainer>
   )
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
