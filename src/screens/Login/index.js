import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FacebookButton, GoogleButton, Gap } from '../../components';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-community/google-signin';
import { 
  AccessToken,
  LoginManager,
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

  const initUser = (token) => {
    fetch('https://graph.facebook.com/v2.5/me?fields=email,name,friends,picture.type(large)&access_token=' + token)
    .then((response) => response.json())
    .then((json) => {
      const user = {
        id: json.id,
        name: json.name,
        email: json.email,
        photo: json.picture.data.url,
        type: 'facebook'
      };
      console.log('user', user);
      navigation.replace('Home', user);
    })
    .catch(() => {
      reject('ERROR GETTING DATA FROM FACEBOOK')
    })
  }

  const FacebookLogin = async () => {
    LoginManager.logInWithPermissions(["email","public_profile"])
      .then((res) => {
        console.log('result: ', res);
        if (res.isCancelled) {
          console.log("Login cancelled");
        } else {
          console.log("Login success with permissions: ", res.grantedPermissions.toString());
          AccessToken
            .getCurrentAccessToken()
            .then((data) => {
              const { accessToken } = data;
              initUser(accessToken);
            })
        }
      })
      .catch((err) => {
        console.log('error: ', err.message);
      });
  };


  const GoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const info = await GoogleSignin.signIn();
      const token = await GoogleSignin.getTokens();
      const user = {
        id: info.user.id,
        name: info.user.name,
        email: info.user.email,
        photo: info.user.photo,
        type: 'google'
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
    <View style={styles.screen}>
      <Text style={styles.text}>Social Login</Text>
      <Gap height={10}/>
      <GoogleButton onPress={GoogleSignIn} />
      <Gap height={10}/>
      <FacebookButton onPress={FacebookLogin} />
    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  }
})
