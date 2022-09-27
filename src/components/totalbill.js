import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Image,
  } from 'react-native';
  import {StatusBar} from 'react-native';
  
  export const Item = ({item, onPress, backgroundColor, textColor}) => {
    return (
       
    
      <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <View>
          <Text style={[styles.title, textColor]}>{item.name}</Text>
          <Text style={[styles.des, textColor]}>{item.description}</Text>
        </View>
        <View style={styles.price}>
          <Text style={[styles.price, textColor]}> Rs {item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      width: '100%',
      backgroundColor:'white'
    },
    item: {
      padding: 10,
      top:10,
      borderRadius: 8,
      flexDirection: 'row',
      
    },
    title: {
      fontSize: 15,
      marginHorizontal: 10,
    },
    des: {
      fontSize: 15,
      marginHorizontal: 10,
    },
    price: {
      marginLeft: 'auto',
      fontSize: 15,
      fontWeight: '600',
      alignSelf:'center',
      right:10
     
    },
  });
  