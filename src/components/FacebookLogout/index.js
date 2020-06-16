import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const FacebookLogout = ({onPress}) => {
  return (
    <TouchableOpacity 
      onPress={onPress}
    >
      <Text>
        Facebook Logout
      </Text>
    </TouchableOpacity>
  )
}

export default FacebookLogout
