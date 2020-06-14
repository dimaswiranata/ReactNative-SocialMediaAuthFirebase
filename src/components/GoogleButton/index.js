import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import {
  GoogleSigninButton,
} from '@react-native-community/google-signin';

const GoogleButton = ({onPress}) => {
  return (
    <TouchableOpacity 
      onPress={onPress}
    >
      <GoogleSigninButton/>
    </TouchableOpacity>
  )
}

export default GoogleButton
