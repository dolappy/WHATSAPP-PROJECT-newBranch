import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../src/screens/AuthScreen/HomeScreen';



const AuthStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen} />
        </Stack.Navigator>

    )
}

export default AuthStack

const styles = StyleSheet.create({})