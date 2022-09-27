import {View, Text, StyleSheet, Image, StatusBar, FlatList} from 'react-native';
import React from 'react';
import userdetails from '../../../assets/data/userdetails.json';
import {AntDesign} from '@expo/vector-icons';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';
import {Item} from '../../../components/previousbills';
import {useState} from 'react';

import order from '../../../assets/data/order.json'; 

const det = userdetails[0];

const Profile = () => {
  const [selectedId, setSelectedId] = useState(null);
 

  const renderItem = ({item}) => {
    return <Item item={item} />;
  };
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../../../assets/images/R1.png')}
          resizeMode="stretch"
        />
      </View>

      <View style={styles.superheader}>
        <Text style={{fontSize: 20, fontWeight: '700', alignSelf: 'center'}}>
          {det.name}
        </Text>
        <Text style={{fontSize: 14, alignSelf: 'center'}}>{det.userName}</Text>
        <View style={styles.header}>
          <View>
            <AntDesign
              style={styles.icon}
              name="mobile1"
              size={14}
              color="#FF5C00"
            />
            <MaterialCommunityIcons
              style={styles.icon}
              name="gmail"
              size={14}
              color="#FF5C00"
            />
            <Ionicons
              style={styles.icon}
              name="location-sharp"
              size={14}
              color="#FF5C00"
            />
          </View>

          <View>
            <Text style={styles.title}>Mobile:</Text>
            <Text style={styles.title}>gmail:</Text>
            <Text style={styles.title}>Location:</Text>
          </View>

          <View>
            <Text style={styles.subtitle}> {det.mobile}</Text>
            <Text style={styles.subtitle}> {det.gamail}</Text>
            <Text style={styles.subtitle}> {det.Location}</Text>
          </View>
        </View>
      </View>
      <Image
        source={{uri: det.image}}
        style={styles.image}
        resizeMode="cover"
      />
      <View
        style={{
          backgroundColor: 'white',
          padding: 20,
          margin: 15,
          borderRadius: 8,
          bottom: 250,
        }}>
        <Text style={{fontSize: 20, fontWeight: '600'}}> Previous Bills:</Text>
      </View>

      <FlatList
        data={order}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        showsVerticalScrollIndicator={false}
        style={styles.list}
      />

      <StatusBar barStyle="light-content" />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#E5E5E5',
  },
  header: {
    flexDirection: 'row',
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    backgroundColor: 'white',
    margin: 20,
  },
  superheader: {
    backgroundColor: 'white',
    padding: 30,
    margin: 20,
    borderRadius: 8,
    bottom: '20%',
  },
  title: {
    fontSize: 16,
    marginVertical: 2,
    fontWeight: '600',
  },
  subtitle: {
    marginVertical: 2,
    marginHorizontal: 10,
  },
  icon: {
    marginVertical: 3,
    marginHorizontal: 10,
  },
  image: {
    alignSelf: 'center',
    height: 100,
    aspectRatio: 1,
    bottom: 463,
  },
  list: {
    backgroundColor: 'white',
    borderRadius: 8,
    bottom: 250,
    paddingBottom:290,
    margin:10
    
  },
});
