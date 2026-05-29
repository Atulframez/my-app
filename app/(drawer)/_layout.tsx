import { View, Text } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const DrawerRoot = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <Text>DrawerRoot</Text>
    </GestureHandlerRootView>
  );
};

export default DrawerRoot;