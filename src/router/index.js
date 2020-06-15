import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Home, LoginFB } from "../screens";

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName='LoginFB'
    >
      <Stack.Screen 
        name="Login" 
        component={Login}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen 
        name="Home" 
        component={Home}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen 
        name="LoginFB" 
        component={LoginFB}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}

export default Router;