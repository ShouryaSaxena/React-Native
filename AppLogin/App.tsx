/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserRegister from './src/screens/UserRegister';
import UserLogin from './src/screens/UserLogin';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={UserLogin} />
        <Stack.Screen name="Register" component={UserRegister} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
