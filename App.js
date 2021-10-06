import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/screens/Home';
import Login from './components/screens/Login';

const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer
        style={styles.container}
      >
        <Stack.Navigator
          initialRouteName={Login}
          screenOptions={{
            headerTitleAlign: 'center',
            headerTintColor: 'darkcyan',
            headerStyle: {
              backgroundColor: 'lightblue'
            }
          }}
          >
          <Stack.Screen
            name='Login'
            component={Login}
          />
          <Stack.Screen
            name='Home'
            component={Home}
          />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 30
  }
})

export default App;