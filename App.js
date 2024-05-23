import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import FitnessScreen from './src/screens/FitnessScreen';
import MentalHealthScreen from './src/screens/MentalHealthScreen';
import ProductivityScreen from './src/screens/ProductivityScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Fitness" component={FitnessScreen} />
        <Stack.Screen name="Mental Health" component={MentalHealthScreen} />
        <Stack.Screen name="Productivity" component={ProductivityScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
