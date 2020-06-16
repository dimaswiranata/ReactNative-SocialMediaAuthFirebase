import React from 'react'
import { TouchableOpacity, Image } from 'react-native';

const GoogleButton = ({onPress}) => {
  return (
    <TouchableOpacity 
      onPress={onPress}
    >
      <Image style={{width: 290, height: 50}} source={require('../../assets/button/google.png')}/>
    </TouchableOpacity>
  )
}

export default GoogleButton
