import { View, Text, Button } from 'react-native'

import { AuthContext } from '../components/context'
import React from 'react'


const Home = () => {


  const {signOut} = React.useContext(AuthContext)

  return (
    <View>
      <Text >home</Text>
      <Button title='signout'
              onPress={()=>{signOut()}}
      />
    </View>
  )
}

export default Home