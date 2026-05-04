import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import CommunitySwipeScreen from '../screens/CommunitySwipeScreen';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#111111',
    card: '#111111',
    text: '#ffffff',
    border: '#222222',
  },
};

export default function AppNavigator() {
  return (
    <NavigationContainer theme={CustomDarkTheme}>
      <StatusBar style="light" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTabs" component={TabNavigator} />
        <Stack.Screen
          name="CommunitySwipe"
          component={CommunitySwipeScreen}
          options={{ headerShown: true, headerBackTitleVisible: false, headerTintColor: '#fff', headerStyle: { backgroundColor: '#111111' } }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}