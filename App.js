import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import FitnessScreen from './src/screens/FitnessScreen';
import MentalHealthScreen from './src/screens/MentalHealthScreen';
import ProductivityScreen from './src/screens/ProductivityScreen';
import CookingNutritionScreen from './src/screens/CookingNutritionScreen';
import FeaturedRecipesScreen from './src/screens/cooking/FeaturedRecipesScreen';
import MealPlansScreen from './src/screens/cooking/MealPlansScreen';
import RecipeDetailScreen from './src/screens/cooking/RecipeDetailScreen';
import MealPlanDetailScreen from './src/screens/cooking/MealPlanDetailScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Fitness" component={FitnessScreen} />
        <Stack.Screen name="Mental Health" component={MentalHealthScreen} />
        <Stack.Screen name="Productivity" component={ProductivityScreen} />
        <Stack.Screen name="Cooking & Nutrition" component={CookingNutritionScreen} />
        <Stack.Screen name="Recetas Destacadas" component={FeaturedRecipesScreen} />
        <Stack.Screen name="Planes de Comida" component={MealPlansScreen} />
        <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} />
        <Stack.Screen name="MealPlanDetail" component={MealPlanDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
