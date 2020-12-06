import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, Pilihlog, Splash, Search, Favorite, Akun, Streaming } from '../pages'
import {BottomNavigator} from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Favorite" component={Favorite} />
        <Tab.Screen name="Akun" component={Akun} />
      </Tab.Navigator>
    )
}

const Routers = () => {
    return (
        <Stack.Navigator initialRouteName='Splash'
        screenOptions={{
        headerShown: false
        }}
        >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="MainApp" component={MainApp} />
        <Stack.Screen name="Pilihlog" component={Pilihlog} />
        <Stack.Screen name="Streaming" component={Streaming} />
      </Stack.Navigator>
    )
}

export default Routers

const styles = StyleSheet.create({})
