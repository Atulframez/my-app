import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from "expo-router";

const TabRoot = () => {
  return (
    <Tabs>
        <Tabs.Screen name="index" options={{ title: "Home", tabBarIcon: () => <Text>🏠</Text> }} />
        <Tabs.Screen name="profile" options={{ title: "My-Profile", tabBarIcon: () => <Text>👤</Text> }} />
        <Tabs.Screen name="about" options={{ title: "About Us", tabBarIcon: () => <Text>ℹ️</Text>  }} />
    </Tabs>
  );
};

export default TabRoot;