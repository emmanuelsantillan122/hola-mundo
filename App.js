import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar, StyleSheet, View } from 'react-native';
import React from 'react';
import SPACING from './app/config/SPACING';
import colors from './app/config/colors';
import HomeScreen from './app/screens/HomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import CompanyScreen from './app/screens/CompanyScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <View
        style={{
          paddingHorizontal: SPACING * 2,
          flex: 1,
          backgroundColor: colors.black,
        }}
      >
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          {/* Add more screens as needed */}
        </Stack.Navigator>
        <StatusBar barStyle="light-content" />
      </View>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
