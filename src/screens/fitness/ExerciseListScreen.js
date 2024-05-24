import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ExerciseListScreen = () => {
  const [exercises, setExercises] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    // Cargar los datos del JSON utilizando require
    const exercisesData = require('../../../assets/json/fitness/exercises.json');
    setExercises(exercisesData);
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('ExerciseDetail', { exercise: item })}>
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.images[0] }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.difficulty}>{item.difficulty_level}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={exercises}
        renderItem={renderItem}
        keyExtractor={item => item.exercise_id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  difficulty: {
    fontSize: 14,
    color: 'gray',
  },
});

export default ExerciseListScreen;
