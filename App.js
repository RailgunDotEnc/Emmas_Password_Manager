import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import WelcomScreen from './App/assets/screens/WelcomScreen';
import ViewImageScreen from './App/assets/screens/ViewImageScreen';

const Stack =createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
        name="Login"
        style={{headerLeft: ()=> null,}}
        component={WelcomScreen}
        />
        <Stack.Screen
        name="Vault"
        component={ViewImageScreen}
        />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
