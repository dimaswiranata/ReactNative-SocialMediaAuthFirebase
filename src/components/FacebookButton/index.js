import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

const FacebookButton = ({onPress}) => {
  return (
    <TouchableOpacity 
      onPress={onPress}
    >
      <Image style={{width: 290, height: 50}} source={require('../../assets/button/facebook.png')}/>
    </TouchableOpacity>
  )
}

export default FacebookButton
