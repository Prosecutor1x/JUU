import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import {AntDesign} from '@expo/vector-icons';

import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) => {
  let backgroundColor;

  backgroundColor = selected ? 'rgba(255, 92, 0, 1)' : 'rgba(207, 207, 207, 1)';

  return (
    <Animatable.View
      animation={'bounce'}
      style={{
        width: 8,
        height: 8,
        marginHorizontal: 3,
        borderRadius: 4,
        marginHorizontal: 5,
        backgroundColor,
      }}
    />
  );
};
const Skip = ({...props}) => (
  <TouchableOpacity
    style={{
      marginHorizontal: 10,
    }}>
    <Text
      style={{
        color: '#FF5C00',
        fontSize: 14,
        fontWeight: '600',
      }}
      {...props}>
      SKIP
    </Text>
  </TouchableOpacity>
);

const Next = ({...props}) => (
  <TouchableOpacity
    style={{
      marginHorizontal: 10,
    }}>
    <AntDesign name="rightcircle" size={50} color="#FF5C00" {...props} />
  </TouchableOpacity>
);
const Done = ({...props}) => (
  <TouchableOpacity
    style={{
      marginHorizontal: 10,
    }}>
    <AntDesign name="rightcircle" size={50} color="#FF5C00" {...props} />
  </TouchableOpacity>
);

const Obone = () => {
  const [splashone, setSplashOne] = React.useState(true);

  const navo = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      setSplashOne(false);
    }, 4000);
  }, []);
  if (splashone) {
    return (
      <Pressable style={styles.container}>
        <Animatable.View
          animation="fadeInUpBig"
          duration={1500}
          delay={300}
          style={styles.container}>
          <Animatable.View
            animation="zoomInUp"
            delay={800}
            duration={1500}
            style={{
              backgroundColor: 'rgba(3, 22, 41, 0.72)',

              width: 200,
              height: 200,
              borderRadius: 100,
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: 10,
            }}>
            <Image
              source={require('../../assets/images/g16.png')}
              resizeMode="contain"
              style={{
                height: 80,
              }}
            />
          </Animatable.View>
          <View style={{flexDirection: 'row'}}>
            <Text> Why waiting , If you can </Text>
            <Text style={{color: '#F05A28'}}> JUU .</Text>
          </View>
          <Image
            source={require('../../assets/images/cart.png')}
            resizeMode="contain"
          />
        </Animatable.View>
      </Pressable>
    );
  } else {
    return (
      <View style={styles.containersec}>
        <Onboarding
          DotComponent={Dots}
          DoneButtonComponent={Done}
          NextButtonComponent={Next}
          SkipButtonComponent={Skip}
          onSkip={() => navo.replace('CreateAccount')}
          onDone={() => navo.navigate('CreateAccount')}
          pages={[
            {
              backgroundColor: '#fff',
              image: (
                <View>
                  <Animatable.View
                    style={{
                      height: 40,
                    }}>
                    <Animatable.Image
                      animation="bounce"
                      duration={1500}
                      source={require('../../assets/images/116.png')}
                      resizeMode="contain"
                    />
                  </Animatable.View>
                  <Animatable.Image
                    animation="bounce"
                    duration={1500}
                    source={require('../../assets/images/6.png')}
                    resizeMode="contain"
                  />
                </View>
              ),

              title: (
                <Animatable.Text
                  animation={'fadeInRight'}
                  duration={1500}
                  style={{
                    fontSize: 24,
                    fontWeight: '700',
                    color: '#FF5C00',
                    marginRight: 'auto',
                    marginVertical: 2,
                    marginHorizontal: 10,
                  }}>
                  Scan to add cart{' '}
                </Animatable.Text>
              ),
              subtitle: (
                <Animatable.Text
                  animation={'fadeInRight'}
                  duration={1500}
                  style={{
                    fontSize: 14,
                    fontWeight: '400',
                    color: '#000000',
                    marginRight: 'auto',
                    marginVertical: 10,
                    marginBottom: 150,
                    marginHorizontal: 10,
                  }}>
                  Simply scan the products and add to cart
                </Animatable.Text>
              ),
            },
            {
              backgroundColor: '#fff',
              image: (
                <View>
                  <Animatable.View
                    style={{
                      height: 40,
                    }}>
                    <Animatable.Image
                      animation="bounce"
                      duration={1500}
                      source={require('../../assets/images/115.png')}
                      resizeMode="contain"
                      style={{
                        marginTop: 60,
                      }}
                    />
                  </Animatable.View>
                  <Animatable.Image
                    animation="bounce"
                    duration={1500}
                    source={require('../../assets/images/26.png')}
                    resizeMode="contain"
                    style={{
                      marginLeft: 45,
                      marginBottom: 80,
                    }}
                  />
                </View>
              ),

              title: (
                <Animatable.Text
                  animation={'fadeInRight'}
                  style={{
                    fontSize: 24,
                    fontWeight: '700',
                    color: '#FF5C00',
                    marginRight: 'auto',
                    marginVertical: 2,
                    marginHorizontal: 10,
                  }}>
                  Generate Bill
                </Animatable.Text>
              ),
              subtitle: (
                <Animatable.Text
                  animation={'fadeInRight'}
                  style={{
                    fontSize: 14,
                    fontWeight: '400',
                    color: '#000000',
                    marginRight: 'auto',
                    marginVertical: 10,
                    marginBottom: 150,
                    marginHorizontal: 10,
                  }}>
                  Generate digital bill and skip the queue
                </Animatable.Text>
              ),
            },
            {
              backgroundColor: '#fff',
              image: (
                <View>
                  <Animatable.View
                    style={{
                      height: 0,
                    }}>
                    <Animatable.Image
                      animation="bounce"
                      duration={1500}
                      source={require('../../assets/images/117.png')}
                      resizeMode="contain"
                      style={{
                        marginTop: 40,
                      }}
                    />
                  </Animatable.View>
                  <Animatable.Image
                    animation="bounce"
                    duration={1500}
                    source={require('../../assets/images/15.png')}
                    resizeMode="contain"
                    style={{
                      marginLeft: 15,
                      marginBottom: 'auto',
                    }}
                  />
                </View>
              ),

              title: (
                <Animatable.Text
                  animation={'fadeInRight'}
                  duration={1500}
                  style={{
                    fontSize: 24,
                    fontWeight: '700',
                    color: '#FF5C00',
                    marginRight: 'auto',
                    marginHorizontal: 10,
                  }}>
                  Secure Pay
                </Animatable.Text>
              ),
              subtitle: (
                <Animatable.Text
                  animation={'fadeInRight'}
                  duration={1500}
                  style={{
                    fontSize: 14,
                    fontWeight: '400',
                    color: '#000000',
                    marginRight: 'auto',
                    marginVertical: 10,
                    marginBottom: 200,
                    marginHorizontal: 10,
                  }}>
                  Quick|Simple|Secure
                </Animatable.Text>
              ),
            },
          ]}
        />
      </View>
    );
  }
};

export default Obone;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C8DBEA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containersec: {
    flex: 1,
    backgroundColor: '#C8DBEA',
  },
});
