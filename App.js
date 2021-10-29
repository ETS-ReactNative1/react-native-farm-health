import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
} from './src/screens'

import  Goats from  './src/screens/Goats'
import  CattleNav from  './src/screens/CattleNav'
import  Support from  './src/screens/Support'
import  Poultry from  './src/screens/Poultry'

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
          <Stack.Screen
            name="Cattle"
            component={CattleNav}
          />
          <Stack.Screen
            name="Goats"
            component={Goats}
          />
          <Stack.Screen
            name="Poultry"
            component={Poultry}
          />
          <Stack.Screen
            name="Support"
            component={Support}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
