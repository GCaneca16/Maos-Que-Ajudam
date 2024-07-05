import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import login from '../../app/login';
import SignupScreen from '../../app/criar_conta';
import criar_conta from '../../app/criar_conta';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={login} />
        <Stack.Screen name="Criar_Conta" component={criar_conta}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

