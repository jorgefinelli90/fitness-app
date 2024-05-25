import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Importa Picker desde el nuevo paquete
import { useNavigation } from '@react-navigation/native';

// Define el mapeo de imágenes aquí directamente
const imageMap = {
  "fitness/ejercicio1.jpg": require('../../../assets/images/fitness/ejercicio1/example.jpg'),
  // Añade más imágenes según sea necesario
};

const ExerciseListScreen = () => {
  const [exercises, setExercises] = useState([]);
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [selectedMuscle, setSelectedMuscle] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    // Cargar los datos del JSON utilizando require
    const exercisesData = require('../../../assets/json/fitness/exercises.json');
    setExercises(exercisesData);
  }, []);

  const toggleSelectExercise = (exercise) => {
    setSelectedExercises((prevSelected) => {
      if (prevSelected.includes(exercise)) {
        return prevSelected.filter((item) => item !== exercise);
      } else {
        return [...prevSelected, exercise];
      }
    });
  };

  const calculateTotalTime = () => {
    return selectedExercises.reduce((total, exercise) => {
      const [duration, unit] = exercise.duration.split(' ');
      const durationInMinutes = unit.includes('min') ? parseInt(duration) : parseInt(duration) / 60;
      return total + durationInMinutes;
    }, 0);
  };

  const filteredExercises = exercises.filter((exercise) => {
    return (
      (selectedDifficulty === '' || exercise.difficulty_level === selectedDifficulty) &&
      (selectedMuscle === '' || exercise.muscles_targeted.includes(selectedMuscle))
    );
  });

  const renderItem = ({ item }) => (
    <View style={[styles.itemContainer, selectedExercises.includes(item) && styles.selected]}>
      <TouchableOpacity style={styles.detailsContainer} onPress={() => navigation.navigate('ExerciseDetail', { exercise: item })}>
        <Image source={imageMap[item.images[0]]} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.difficulty}>{item.difficulty_level}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.selectButton} onPress={() => toggleSelectExercise(item)}>
        <Text style={styles.selectButtonText}>
          {selectedExercises.includes(item) ? 'Quitar de la rutina' : 'Agregar a la rutina'}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedDifficulty}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedDifficulty(itemValue)}
      >
        <Picker.Item label="Seleccionar Dificultad" value="" />
        <Picker.Item label="Principiante" value="Principiante" />
        <Picker.Item label="Intermedio" value="Intermedio" />
        <Picker.Item label="Avanzado" value="Avanzado" />
      </Picker>
      <Picker
        selectedValue={selectedMuscle}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedMuscle(itemValue)}
      >
        <Picker.Item label="Seleccionar Músculo" value="" />
        <Picker.Item label="Cuádriceps" value="Cuádriceps" />
        <Picker.Item label="Glúteos" value="Glúteos" />
        <Picker.Item label="Pectorales" value="Pectorales" />
        {/* Añade más músculos según sea necesario */}
      </Picker>
      <FlatList
        data={filteredExercises}
        renderItem={renderItem}
        keyExtractor={item => item.exercise_id}
      />
      {selectedExercises.length > 0 && (
        <View style={styles.totalTimeContainer}>
          <Text style={styles.totalTimeText}>
            Tiempo Total: {calculateTotalTime()} minutos
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  selected: {
    backgroundColor: '#d3f9d8',
  },
  detailsContainer: {
    flex: 1,
    flexDirection: 'row',
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
  selectButton: {
    backgroundColor: '#007bff',
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
  },
  selectButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  totalTimeContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#f8f8f8',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    alignItems: 'center',
  },
  totalTimeText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ExerciseListScreen;
