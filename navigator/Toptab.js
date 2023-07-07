import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Chat from '../src/screens/ChatFolder/Chat';
import Call from '../src/screens/CallFolder/Call';
import Community from '../src/screens/CommunityFolder/Community';
import Status from '../src/screens/StatusFolder/Status';
import { COLORS, SIZES, icons } from '../src/constants';


const Toptab = () => {
  const Tab = createMaterialTopTabNavigator();
  return (

    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarLabelStyle: { textTransform: "lowercase" },
      tabBarStyle: { backgroundColor: COLORS.green },
      tabBarIndicatorStyle: { backgroundColor: COLORS.white },
      tabBarIcon: ({ focused, size }) => {
        let iconname;
        if (route.name === "Community") {
          iconname = <Image source={icons.community} style={{ height: SIZES.h2, width: SIZES.h2, tintColor: COLORS.white }} />
        }

        return iconname;
      }
    })}>
      <Tab.Screen name="Community" component={Community}
        options={{ tabBarShowLabel: false }} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Status" component={Status} />
      <Tab.Screen name="Call" component={Call} />

    </Tab.Navigator>

  )
}

export default Toptab

const styles = StyleSheet.create({})