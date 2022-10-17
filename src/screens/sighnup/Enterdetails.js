import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';

import {AuthContext} from '../../components/context';
import React from 'react';
import {useEffect} from 'react';
import {LinearGradient} from 'expo-linear-gradient';


import { Formik } from 'formik';
import * as Yup from 'yup';

const EnterDetails = () => {


  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Please Enter your full name'),
    location: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Please Enter your Location'),
    
    email: Yup.string().email('Invalid email').required('Please enter a valid email'),
  });



  const [verified, setVerified] = React.useState(true);

   const {signUp} = React.useContext(AuthContext);

  //  const [data, setData] = React.useState({
  //   userName: '',
  //   check_textInputChange: false,
  //   icShown: false,
  // });
  // const textInputChange = (val) => {
  //   if (val.length != 1) {
  //     setData({
  //       ...data,
  //       userName: val,
  //       check_textInputChange: true,
  //     });
  //   } else {
  //     setData({
  //       ...data,
  //       userName: val,
  //       check_textInputChange: false,
  //     });
  //   }
  // };

   const signupHandler = (values) => {
      signUp(values);
    };

  useEffect(() => {
    setTimeout(() => {
      setVerified(false);
    }, 3000);
  }, []);
  if (verified) {
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/images/conf.png')} />
        <Text>Your Mobile Number is verified </Text>
        <Text>successfully</Text>
        <Text style={{marginTop: '50%'}}>
          Automatically Redirected to next{' '}
        </Text>
        <Text>Page in 3 Seconds </Text>
      </View>
    );
  } else {
    return (
      <Formik 
      initialValues={{
        name:'',
        email:'',
        location:'',

    }}
      validationSchema={SignupSchema}
       onSubmit={(values)=>signupHandler(values.name)}
      // onSubmit={values=> Alert.alert(JSON.stringify(values))}
      
      >
        {({values,errors,touched,handleSubmit,handleChange,setFieldTouched,isValid})=>(

        
      <View View style={styles.container}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
            marginVertical: 40,
            marginBottom: 80,
          }}>
          Enter Details
        </Text>

        <Text style={styles.textin}>User name</Text>
        <TextInput
          style={styles.input}
          cursorColor={'black'}
          placeholder="Enter User Name"
          value={values.name} 
          onChangeText={handleChange('name')}
          onBlur={()=>setFieldTouched('name')}
        />
        {touched.name && errors.name &&(
          <Text style={styles.et}>{errors.name}</Text>
        )}
        <Text style={styles.textin}>Email Id</Text>
        <TextInput
          style={styles.input}
          cursorColor={'black'}
          placeholder="Enter Email ID"
          value={values.email} 
          onChangeText={handleChange('email')}
          onBlur={()=>setFieldTouched('email')}
                
        />
        {touched.email && errors.location &&(
          <Text style={styles.et}>{errors.email}</Text>
        )}
        <Text style={styles.textin}>Location</Text>
        <TextInput
          style={styles.input}
          cursorColor={'black'}
          placeholder="Enter Location"
          value={values.location} 
          onChangeText={handleChange('location')}
          onBlur={()=>setFieldTouched('location')}
        />
        { touched.location &&  errors.location &&(
          <Text style={styles.et}>{errors.location}</Text>
        )}

        <TouchableOpacity
          style={styles.Next}
          onPress={ 
            // signupHandler(data.userName);
            handleSubmit
          }
          disabled={!isValid} >
          
          <LinearGradient colors={['#ffa500', '#FF5C00']} style={styles.Next}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '400',
                color: 'white',
              }}>
              NEXT
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      )}
      </Formik>
    );
    
  }
 
};

export default EnterDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C8DBEA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Next: {
    height: 40,
    width: '97%',
    padding: 10,
    fontSize: 20,
    borderRadius: 4,
    marginTop: 90,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
  },
  input: {
    height: 40,
    margin: 18,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    color: 'black',
    fontSize: 14,
    width: '80%',
    borderRadius: 4,
  },
  textin: {
    fontSize: 18,
    fontWeight: '500',
    marginRight: '60%',
  },
  et:{
    color:'red',
    fontSize:12
  },
});
