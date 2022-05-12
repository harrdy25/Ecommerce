import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './src/screen/Home';
import Login from './src/screen/Login';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


const App = () => {
  return (
    <NavigationContainer>

      <Drawer.Navigator>
        <Drawer.Screen name="Feed" component={Home} />
        <Drawer.Screen name="Article" component={Login} options={{
            drawerIcon: ({focused, size}) => (
              <MaterialCommunityIcons
                name="logout"
                size={size}
                color={'green'}
              />
            ),
          }} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})