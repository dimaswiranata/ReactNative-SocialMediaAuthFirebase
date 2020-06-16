import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({ title, onPress}) => {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={onPress}
    >
      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0BCAD4',
    paddingVertical: 10,
    borderRadius: 10
  },
  text: {
    fontSize: 18,
    fontFamily: '600',
    textAlign: 'center',
    color: 'white'
  }
});