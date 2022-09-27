import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';

const Paid = () => {
  return (
    <View style={styles.container}>
      <View style={styles.i1}>
        <Animatable.Image
          source={require('../../../assets/images/v2.png')}
          animation="zoomIn"
          delay={800}
          duration={2500}
        />
      </View>

      <View style={styles.i1}>
        <Animatable.Image source={require('../../../assets/images/v1.png')} />
      </View>
      <Animatable.Image
        source={require('../../../assets/images/v3.png')}
        animation="bounce"
        delay={800}
        duration={2500}
      />
    </View>
  );
};

export default Paid;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    width: '100%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  i1: {
    position: 'absolute',
  },
});
