import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const ExerciseDetailScreen = () => {
  const route = useRoute();
  const { exercise } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{exercise.name}</Text>
      <Image source={{ uri: exercise.images[0] }} style={styles.image} />
      <Text style={styles.sectionTitle}>Descripción</Text>
      <Text style={styles.description}>{exercise.description}</Text>
      <Text style={styles.sectionTitle}>Instrucciones</Text>
      {exercise.instructions.map((instruction, index) => (
        <Text key={index} style={styles.instruction}>{instruction}</Text>
      ))}
      <Text style={styles.sectionTitle}>Consejos</Text>
      {exercise.tips.map((tip, index) => (
        <Text key={index} style={styles.tip}>{tip}</Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  instruction: {
    fontSize: 16,
    marginBottom: 5,
  },
  tip: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default ExerciseDetailScreen;
