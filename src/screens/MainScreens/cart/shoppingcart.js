import React, { useState } from "react";
import { FlatList, View, StatusBar, StyleSheet, Text, TouchableOpacity,Image } from "react-native";
import products from '../../../assets/data/products.json'
import { Item } from "../../../components/cart";
import {LinearGradient} from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";



const Shoppingcart = () => {
  const [selectedId, setSelectedId] = useState(null);
  const navh=useNavigation();

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
    <View style={styles.container} >
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        style={styles.list}
      />
        <TouchableOpacity
            style={styles.loginb}
            onPress={() => navh.navigate('Total')}>
            <LinearGradient
              colors={['#ffa500', '#FF5C00']}
              style={styles.loginb}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '600',
                  color: 'white',
                }}>
                Generate Bill
              </Text>
            </LinearGradient>
          </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    width:'100%',
    padding:10, 

  },
  loginb: {
    width: '98%',
    fontSize: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1 / 3,
    marginVertical:12
  },
  list: {
    borderRadius: 8,
    flex: 1,
  },

});

export default Shoppingcart;