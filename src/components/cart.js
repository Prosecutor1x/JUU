import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';


export const Item = ({item, onPress, backgroundColor, textColor}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <View>
        <Image source={{uri: item.image}} style={styles.image} />
      </View>
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

  item: {
    padding: 20,
    marginVertical: 4,
    borderRadius: 8,
    flexDirection: 'row',
  },
  title: {
    fontSize: 23,
    marginHorizontal: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 'auto',
  },
  des: {
    fontSize: 15,
    marginHorizontal: 10,
  },
  price: {
    marginLeft: 'auto',
    fontSize: 15,
    fontWeight: '600',
    marginTop: 'auto',
  },
});
