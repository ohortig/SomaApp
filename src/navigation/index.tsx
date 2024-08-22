import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import TestScreen from '../screens/TestScreen';


export type RootStackParamList = {
  Login: undefined;
  Test: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Test">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Test" component={TestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default index;