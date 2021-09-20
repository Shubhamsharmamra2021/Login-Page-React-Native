import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginUserScreen from '../screens/LoginUserScreen'
import AfterLoginScreen from '../screens/AfterLoginScreen'

const AppStack = createStackNavigator();
export default function NavigationApp() {
  return (
<NavigationContainer>
    <AppStack.Navigator screenOptions={{ headerShown: false }} >
    <AppStack.Screen name="LoginUserScreen" component={LoginUserScreen}  options={{ title: 'LoginUserScreen' }}/>
    <AppStack.Screen name="AfterLoginScreen" component={AfterLoginScreen}  options={{ title: 'AfterLoginScreen' }}/>

    </AppStack.Navigator>

    </NavigationContainer>
  );
}
 