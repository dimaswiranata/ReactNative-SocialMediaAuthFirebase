import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const FacebookButton = ({onPress}) => {
  return (
    <TouchableOpacity 
      onPress={onPress}
    >
      <Text>
        Login With Facebook
      </Text>
    </TouchableOpacity>
  )
}

export default FacebookButton
