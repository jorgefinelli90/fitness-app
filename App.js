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
import TaskListsScreen from './src/screens/productivity/TaskListsScreen';
import TaskListDetailScreen from './src/screens/productivity/TaskListDetailScreen';
import NewTaskScreen from './src/screens/productivity/NewTaskScreen';
import TimeManagementScreen from './src/screens/productivity/TimeManagementScreen';
import GoalsTrackingScreen from './src/screens/productivity/GoalsTrackingScreen';
import PomodoroTimerScreen from './src/screens/productivity/PomodoroTimerScreen';
import CalendarScreen from './src/screens/calendar/CalendarScreen';
import DayViewScreen from './src/screens/calendar/DayViewScreen';
import MenuListScreen from './src/screens/calendar/MenuListScreen';
import ExerciseListScreen from './src/screens/fitness/ExerciseListScreen';
import ExerciseDetailScreen from './src/screens/fitness/ExerciseDetailScreen';
import MeditationScreen from './src/screens/mentalhealth/MeditationScreen';
import MeditationDetailScreen from './src/screens/mentalhealth/MeditationDetailScreen';
import MeditationTimerScreen from './src/screens/mentalhealth/MeditationTimerScreen';
import DiaryScreen from './src/screens/mentalhealth/DiaryScreen';
import BreathingScreen from './src/screens/mentalhealth/BreathingScreen';
import MindfulnessScreen from './src/screens/mentalhealth/MindfulnessScreen';
import EducationScreen from './src/screens/mentalhealth/EducationScreen';
import PersonalizedRoutineScreen from './src/screens/mentalhealth/PersonalizedRoutineScreen';
import { TaskProvider } from './src/context/TaskContext';

const Stack = createStackNavigator();

function App() {
  return (
    <TaskProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Fitness" component={FitnessScreen} />
          <Stack.Screen name="Mental Health" component={MentalHealthScreen} />
          <Stack.Screen name="Productivity" component={ProductivityScreen} />
          <Stack.Screen name="Cooking & Nutrition" component={CookingNutritionScreen} />
          <Stack.Screen name="Recetas Destacadas" component={FeaturedRecipesScreen} />
          <Stack.Screen name="Planes de Comida" component={MealPlansScreen} />
          <Stack.Screen name="Recetas" component={RecipeDetailScreen} />
          <Stack.Screen name="MealPlanDetail" component={MealPlanDetailScreen} />
          <Stack.Screen name="TaskLists" component={TaskListsScreen} />
          <Stack.Screen name="TaskListDetail" component={TaskListDetailScreen} />
          <Stack.Screen name="NewTask" component={NewTaskScreen} />
          <Stack.Screen name="TimeManagement" component={TimeManagementScreen} />
          <Stack.Screen name="GoalsTracking" component={GoalsTrackingScreen} />
          <Stack.Screen name="PomodoroTimer" component={PomodoroTimerScreen} />
          <Stack.Screen name="Calendar" component={CalendarScreen} />
          <Stack.Screen name="DayView" component={DayViewScreen} />
          <Stack.Screen name="MenuList" component={MenuListScreen} />
          <Stack.Screen name="Musculacion" component={ExerciseListScreen} />
          <Stack.Screen name="ExerciseDetail" component={ExerciseDetailScreen} />
          <Stack.Screen name="MentalHealth" component={MentalHealthScreen} />
          <Stack.Screen name="Meditation" component={MeditationScreen} />
          <Stack.Screen name="MeditationDetail" component={MeditationDetailScreen} />
          <Stack.Screen name="MeditationTimer" component={MeditationTimerScreen} />
          <Stack.Screen name="Diary" component={DiaryScreen} />
          <Stack.Screen name="Breathing" component={BreathingScreen} />
          <Stack.Screen name="Mindfulness" component={MindfulnessScreen} />
          <Stack.Screen name="Education" component={EducationScreen} />
          <Stack.Screen name="PersonalizedRoutine" component={PersonalizedRoutineScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </TaskProvider>
  );
}

export default App;
