import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Logout, Profile, Gap } from "../../components";
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
    <View style={styles.screen}>
      <View style={styles.container}>
        <Profile 
          name={user.name}
          user_id={user.id}
          email={user.email}
          photo={user.photo} 
        />
      </View>
      <Gap height={16}/>
      {
        user.type === 'google' ? (
          <Logout title='Log Out' onPress={GoogleSignOut}/>
        ) : (
          <Logout title='Log Out' onPress={FacebookSignOut}/>
        )
      }
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
    flex: 1,
    padding: 16
  },
  container: {
    flex: 1
  }
});
