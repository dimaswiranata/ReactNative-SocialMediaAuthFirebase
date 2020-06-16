import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Profile = ({photo, name, user_id, email}) => {
  return (
    <View style={styles.container}>
      <View style={styles.borderProfile}>
        <Image source={{uri: photo}} style={styles.avatar}/>
      </View>
      <View>
        <Text  style={styles.name}>{name}</Text>
        <Text  style={styles.profession}>{user_id}</Text>
        <Text  style={styles.profession}>{email}</Text>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110/2
  },
  removePhoto: {
    position: 'absolute',
    right: 8,
    bottom: 8
  },
  borderProfile: {
    width: 130,
    height: 130,
    borderRadius: 130/2,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    justifyContent: 'center',
    alignItems: 'center'
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#112340',
    marginTop: 16,
    textAlign: 'center'
  },
  profession: {
    fontSize: 16,
    fontWeight: '600',
    color: '#7D8797',
    marginTop: 2,
    textAlign: 'center'
  }
})