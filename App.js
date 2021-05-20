import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Signup from './src/screens/Signup';
import Login from './src/screens/Login';
import Dashboard from './src/screens/Dashboard';
import LogScreen from './src/screens/Logs';
import ProfileScreen from './src/screens/Profile';
import MyWeb from './src/screens/Webpage';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionBarImage from './src/screens/ActionBarImage';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const Dash = () => {
  return (
    <Tab.Navigator
    initialRouteName="Dashboard"
    activeColor="#fff"
    barStyle={{ backgroundColor: '#e23744' }}
  >
    <Tab.Screen
      name="Dashboard"
      component={Dashboard}
      options={{
        tabBarLabel: 'food',
        tabBarIcon: ({ color }) => (
          <Icon name="fast-food-outline" color={color} size={24} />
        ),
      }}
    />
    <Tab.Screen
      name="Logs"
      component={LogScreen}
      options={{
        tabBarLabel: 'Restraurants',
        tabBarIcon: ({ color }) => (
          <Icon name="restaurant-outline" color={color} size={24} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <Icon name="person-circle-outline" color={color} size={24} />
        ),
      }}
    />
    <Tab.Screen
      name="Cart"
      component={MyWeb}
      options={{
        tabBarLabel: 'Cart',
        tabBarIcon: ({ color }) => (
          // <span class="iconify" data-icon="" data-inline="false"></span>
          <Icon name="cart-outline" color={color} size={24} />
        ),
      }}
    />
  </Tab.Navigator>
  );
}




const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator > 
          <Stack.Screen name="Signup" component={Signup} options={{
            title: 'REGISTER',
            headerStyle: {
              backgroundColor: '#e23744',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              textAlign:"center",
              flex:1 ,
              fontSize:20,
              padding: 50
            },
            headerTitle: props => <ActionBarImage title= '      REGISTER' />,
            
          }}/>  
          <Stack.Screen name="Login" component={Login} options={{
            title: 'LOGIN',
            headerStyle: {
              backgroundColor: '#e23744',
            },
            headerLeft: null,
            headerTintColor: '#fff',
            headerTitleStyle: {
              textAlign:"center",
              flex:1 ,
              fontSize:20,
              padding: 50
            },
            headerTitle: props => <ActionBarImage title= '          LOGIN' />,


          }}/>
          <Stack.Screen name="SDT" component={Dash} options={{
            title: 'Welcome to SDT',
            headerStyle: {
              backgroundColor: '#e23744',
            },
            headerLeft: null,
            headerTintColor: '#fff',
            headerTitleStyle: {
              textAlign:"center",
              flex:1 ,
              fontSize:20,
              padding: 50,
            },
            headerTitle: props => <ActionBarImage title= '  Welcome to Zomato' />,

          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;