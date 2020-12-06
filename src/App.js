import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Routers from './routers'

const App = () => {
  return (
    <NavigationContainer>
      <Routers/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
