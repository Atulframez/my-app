import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: 'red' },
        headerTintColor: 'white',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
        <Stack.Screen name="index" />
        <Stack.Screen name="about" />
    </Stack>
  );
};

export default RootLayout;