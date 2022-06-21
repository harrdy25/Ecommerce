import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Welcome from './screen/Welcome';
import Home from './screen/Home';
import Login from './screen/Login';
import SignIn from './screen/SignIn';
import Product from './screen/Product';
import Cart from './screen/Cart';
import Counter from './screen/Counter';
import Shopping from './screen/Shopping';
import AsyncStorage from '@react-native-community/async-storage';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function TabHandler() {

    //   const [uid, setUid] = useState('')

    //   const getData = async () => {
    //     try {
    //       const value = await AsyncStorage.getItem('user')
    //       if (value !== null) {
    //         setUid(value)
    //       }
    //     } catch (e) {
    //       console.log(e);
    //     }
    //   }
    //   getData()

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'HOME') {
                        iconName = focused ? 'home-circle' : 'home-circle-outline';
                    } else if (route.name === 'Login') {
                        iconName = focused ? 'account-circle' : 'account-circle-outline';
                    } else if (route.name === 'Welcome') {
                        iconName = focused ? 'alpha-w-circle' : 'alpha-w-circle-outline';
                    }
                    // You can return any component that you like here!
                    return (
                        <MaterialCommunityIcons name={iconName} size={size} color={color} />
                    );
                },
                tabBarActiveTintColor: '#ffa000',
                tabBarInactiveTintColor: '#757575',
            })}>
            <Tab.Screen
                name="HOME"
                component={HomeScreenStack}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    );
}

const HomeStack = createNativeStackNavigator();

function HomeScreenStack() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="Home"
                options={{ headerShown: false }}
                component={Home}
            />
            <HomeStack.Screen
                name="Product"
                options={{ headerShown: false }}
                component={Product}
            />
            <HomeStack.Screen
                name='Shopping'
                options={{ headerShown: false }}
                component={Shopping}
            />
            <HomeStack.Screen
                name="Cart"
                options={{ headerShown: false }}
                component={Cart}
            />
            <HomeStack.Screen
                name="Counter"
                options={{ headerShown: false }}
                component={Counter}
            />
        </HomeStack.Navigator>
    );
}

const Main = () => {
    useEffect(() => {
        getData()
    }, [])

    const [uid, setUid] = useState('')

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('user')
            if (value !== null) {
                setUid(value)
            }
        } catch (e) {
            console.log(e);
        }
    }

    const auth = useSelector(state => state.auth)

    return (
        auth.user !== null && uid !== null ?
            <NavigationContainer>
                <Drawer.Navigator
                    screenOptions={{ headerShown: false }}
                    initialRouteName="Welcome">
                    <Drawer.Screen
                        name="Welcomee"
                        component={TabHandler}
                        options={{
                            drawerIcon: ({ focused, size }) => (
                                <MaterialCommunityIcons
                                    name="alpha-w-circle"
                                    size={size}
                                    color={'#ffa000'}
                                />
                            ),
                        }}
                    />
                    <Drawer.Screen
                        name="Home"
                        component={Home}
                        options={{
                            drawerIcon: ({ focused, size }) => (
                                <MaterialCommunityIcons
                                    name="home"
                                    size={size}
                                    color={'#ffa000'}
                                />
                            ),
                        }}
                    />
                    <Drawer.Screen
                        name="SignUp"
                        component={SignIn}
                        options={{
                            drawerIcon: ({ focused, size }) => (
                                <MaterialCommunityIcons
                                    name="login"
                                    size={size}
                                    color={'#ffa000'}
                                />
                            ),
                        }}
                    />
                    <Drawer.Screen
                        name="Login"
                        component={Login}
                        options={{
                            drawerIcon: ({ focused, size }) => (
                                <MaterialCommunityIcons
                                    name="logout"
                                    size={size}
                                    color={'#ffa000'}
                                />
                            ),
                        }}
                    />
                </Drawer.Navigator>
            </NavigationContainer>
            :
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Login' component={Login} />
                </Stack.Navigator>
            </NavigationContainer>
    )
}

export default Main

const styles = StyleSheet.create({})