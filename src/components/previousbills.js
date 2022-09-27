import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

export const Item = ({item, onPress, backgroundColor, }) => {
    const navigation = useNavigation();
            onPress=()=>{
        navigation.navigate("Previousbills")//{id:orders.id})
    }


  return (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <View style={styles.header}>
        <View>
          <Text style={{fontSize: 18, fontWeight: '700'}}>{item.name}</Text>
          <Text>Mobile: {item.mobile}</Text>
          <Text>Date: {item.date}</Text>
          <Text>Time: {item.time}</Text>
          <View
            style={{
            flexDirection: 'row',
            marginVertical:10
        }}>
        <Text style={{fontSize: 24, fontWeight: '700'}}>Total</Text>
        <Text style={{fontSize: 24, fontWeight: '700',left:150 }}>{item.total}</Text>
      </View>
        </View>
        <View style={{marginLeft: 80, right: 10}}>
          <Text style={{fontSize: 18, fontWeight: '700', color: '#0038FF'}}>
            {item.shop}
          </Text>
          <Text style={{fontSize: 14}}>{item.Location}</Text>
        </View>
        <View>
          <Image source={{uri: item.logo}} style={{height: 40, width: 40}} />
        </View>
      </View>
      
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    top: 10,
    borderRadius: 8,
    flexDirection: 'row',
  },
  header: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingVertical: 5,
    flex: 1,
  },
 
});
