import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { FacebookButton, GoogleButton } from '../../components';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import { 
  LoginButton
} from "react-native-fbsdk";

const Login = ({navigation}) => {

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '920225540843-g8evbi3qbhuq3m3iqvpto0opc0g1kpkb.apps.googleusercontent.com', // client ID of type WEB for your server(needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      accountName: '', // [Android] specifies an account name on the device that should be used
    });
  }, []);

  // const facebookLogin = async () => {
    
  // };

  const signIn = async () => {
    try {
      // const { idToken } = await GoogleSignin.signIn();
      // const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      // console.log('googleCredential', googleCredential);
      await GoogleSignin.hasPlayServices();
      const info = await GoogleSignin.signIn();
      const token = await GoogleSignin.getTokens();
      const user = {
        id: info.user.id,
        name: info.user.name,
        email: info.user.email,
        photo: info.user.photo,
      };
      console.log('data user', user);
      console.log('token', token.accessToken);
      navigation.replace('Home', user);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };


  return (
    <View>
      <Text>Login Page</Text>
      <GoogleButton onPress={signIn} />
      {/* <FacebookButton onPress={facebookLogin} /> */}
    </View>
  )
}

export default Login
