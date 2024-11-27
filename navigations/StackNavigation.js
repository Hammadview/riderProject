import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ManchesterScreen from '../src/screens/manchesterScreen/ManchesterScreen';
import AlstonScreen from '../src/screens/alston/AlstonScreen';
import DateTimeScreen from '../src/screens/dateTime/DateTimeScreen';
const StackNavigation = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Manchester">
    <Stack.Screen
      name="Manchester"
      component={ManchesterScreen} 
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="alston"
      component={AlstonScreen} 
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="dateTime"
      component={DateTimeScreen} 
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
  );
};

export default StackNavigation;
