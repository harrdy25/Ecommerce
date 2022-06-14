import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Welcome from './src/screen/Welcome';
import Home from './src/screen/Home';
import Login from './src/screen/Login';
import SignIn from './src/screen/SignIn';
import Product from './src/screen/Product';
import { Provider } from 'react-redux';
import { configStore } from './src/redux/store';
import Cart from './src/screen/Cart';
import { PersistGate } from 'redux-persist/integration/react';
import Counter from './src/screen/Counter';
import Shopping from './src/screen/Shopping';
import SplashScreen from 'react-native-splash-screen'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function TabHandler() {
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

const App = () => {
  const { store, persistor } = configStore();

  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});