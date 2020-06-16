import React from 'react'
import { View, Text, Image } from 'react-native'
import { GoogleLogout, FacebookLogout } from "../../components";
import {
  GoogleSignin
} from '@react-native-community/google-signin';
import { 
  LoginManager
} from "react-native-fbsdk";

const Home = ({route, navigation}) => {
  const user = route.params;

  const GoogleSignOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      navigation.replace('Login');
    } catch (error) {
      console.error(error);
    }
  };

  const FacebookSignOut = () => {
    try {
      LoginManager.logOut();
      navigation.replace('Login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>Home Page</Text>
      <Text>User ID: {user.id}</Text>
      <Text>User Name: {user.name}</Text>
      <Text>User Email: {user.email}</Text>
      <Image style={{height: 100, width: 100}} source={{uri: user.photo}}/>
      {
        user.type === 'google' ? (
          <GoogleLogout onPress={GoogleSignOut}/>
        ) : (
          <FacebookLogout onPress={FacebookSignOut}/>
        )
      }
    </View>
  )
}

export default Home
