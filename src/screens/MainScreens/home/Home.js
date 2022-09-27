import {View, Text, Button, StyleSheet, Image} from 'react-native';

import {AuthContext} from '../../../components/context';
import {BarCodeScanner} from 'expo-barcode-scanner';
import React, {useState, useEffect} from 'react';
import Constants from 'expo-constants';
import {Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');
const qrSize = width * 0.7;

const Home = () => {
  const navh = useNavigation();
  const {signOut} = React.useContext(AuthContext);
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Not yet scanned');

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const {status} = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({type, data}) => {
    setScanned(true);
    setText(data);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    console.log('Type: ' + type + '\nData: ' + data);
  };

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{margin: 10}}>No access to camera</Text>
        <Button
          title={'Allow Camera'}
          onPress={() => askForCameraPermission()}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{height: 550, width: 350}}
        />
      </View>
      <View>
        <Text style={styles.maintext}>{text}</Text>
        {scanned && (
          <Button
            title={'Tap to Scan Again'}
            onPress={() => setScanned(false)}
          />
        )}
      </View>
      <Button
        title="signout"
        onPress={() => {
          signOut();
        }}
      />
      <Button title="cart" onPress={() => navh.navigate('Cart')} />
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 500,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: 'tomato',
  },
  maintext: {
    marginVertical: 20,
  },
});
