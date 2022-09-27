
import React, {useState} from 'react';
import {
  FlatList,
  View,
  StatusBar,
  StyleSheet,
  Text,
  Image,
} from 'react-native';
import products from '../../../assets/data/products.json';
import {Item} from '../../../components/totalbill';
import {useNavigation} from '@react-navigation/native';
import order from '../../../assets/data/order.json';

const ord = order[0];
const Header = () => {
  return (
    <View>
      <View style={styles.header}>
        <View>
          <Text style={{fontSize: 18, fontWeight: '700'}}>{ord.name}</Text>
          <Text>Mobile: {ord.mobile}</Text>
          <Text>Date: {ord.date}</Text>
          <Text>Time: {ord.time}</Text>
        </View>
        <View style={{marginLeft: 80, right: 10}}>
          <Text style={{fontSize: 18, fontWeight: '700', color: '#0038FF'}}>
            {ord.shop}
          </Text>
          <Text style={{fontSize: 14}}>{ord.Location}</Text>
        </View>
        <View>
          <Image source={{uri: ord.logo}} style={{height: 40, width: 40}} />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          top: 20,
        }}>
        <Text style={{fontSize: 14, fontWeight: '700'}}>Product Name</Text>
        <Text style={{fontSize: 14, fontWeight: '700', right: 20}}>Price</Text>
      </View>
    </View>
  );
};

const Footer = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        paddingVertical: 5,
      }}>
      <Text style={{fontSize: 20, fontWeight: '700'}}>Total</Text>
      <Text style={{fontSize: 20, fontWeight: '700'}}>Rs 46000</Text>
    </View>
  );
};

const Previousbill = () => {
  const [selectedId, setSelectedId] = useState(null);
  const navh = useNavigation();

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#808080" : "#FFFFFF";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}  
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
    
  };

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={() => <Header />}
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => <Footer />}
        ListHeaderComponentStyle={{
          backgroundColor: 'white',
          width: '100%',
          padding: 20,

          borderRadius: 8,
        }}
        ListFooterComponentStyle={{
          backgroundColor: 'white',
          width: '100%',
          padding: 20,
          borderRadius: 8,
          marginVertical: 10,
        }}
        style={styles.list}
      />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    width: '100%',
    padding: 10,
  },
  loginb: {
    width: '98%',
    padding: 10,
    fontSize: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1 / 4,
  },
  header: {
    flexDirection: 'row',

    borderBottomWidth: 1,
    paddingVertical: 5,
    flex: 1,
  },
  list: {
    backgroundColor: 'white',
    borderRadius: 8,
    flex: 2,
  },
});

export default Previousbill;
