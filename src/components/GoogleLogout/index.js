import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const GoogleLogout = ({onPress}) => {
  return (
    <TouchableOpacity 
      onPress={onPress}
    >
      <Text>
        Google Logout
      </Text>
    </TouchableOpacity>
  )
}

export default GoogleLogout
