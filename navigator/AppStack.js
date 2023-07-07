import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ChatMsgs from '../src/screens/ChatFolder/ChatMsgs'

const AppStack = () => {
  const data = route.params.item;
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen key={data} name='ChatMsgs' component={ChatMsgs} /> */}
    </Stack.Navigator>
  )
}

export default AppStack

const styles = StyleSheet.create({})