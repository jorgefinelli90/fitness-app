import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

function MealPlanDetailScreen({ route }) {
  const { mealPlan } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: mealPlan.img }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{mealPlan.name}</Text>
        <Text style={styles.description}>{mealPlan.description}</Text>
        <Text style={styles.sectionTitle}>Meals</Text>
        {mealPlan.meals.map((meal, index) => (
          <View key={index} style={styles.meal}>
            <Text style={styles.mealTime}>{meal.time}</Text>
            <Text style={styles.mealName}>{meal.name}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  meal: {
    marginBottom: 10,
  },
  mealTime: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  mealName: {
    fontSize: 16,
  },
});

export default MealPlanDetailScreen;
