import React from 'react'
import { View, Text, Image } from 'react-native'
import { GoogleLogout } from "../../components";
import {
  GoogleSignin
} from '@react-native-community/google-signin';

const Home = ({route, navigation}) => {
  const user = route.params;

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      navigation.replace('Login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>Home Page</Text>
      <Text>{user.id}</Text>
      <Text>{user.name}</Text>
      <Text>{user.email}</Text>
      <Image style={{height: 100, width: 100}} source={{uri: user.photo}}/>
      <GoogleLogout onPress={signOut}/>
    </View>
  )
}

export default Home
