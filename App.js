import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthStack from './navigator/AuthStack'
import AppStack from './navigator/AppStack'
import ChatMsgs from './src/screens/ChatFolder/ChatMsgs'

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AuthScreen" component={AuthStack} />
        <Stack.Screen name='ChatMsgs' component={ChatMsgs} />
        <Stack.Screen name="AppStack" component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>)
}

export default App;

const styles = StyleSheet.create({})
