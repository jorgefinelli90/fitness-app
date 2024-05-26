import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MeditationDetailScreen = ({ route, navigation }) => {
  const { meditation } = route.params;

  const startMeditation = () => {
    if (meditation && meditation.duration) {
      navigation.navigate('MeditationTimer', { duration: meditation.duration });
    } else {
      Alert.alert("Error", "La duración de la meditación no está definida.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{meditation.title}</Text>
      <Text style={styles.duration}>Duración: {meditation.duration} minutos</Text>
      <Text style={styles.theme}>Tema: {meditation.theme}</Text>
      <Button title="Iniciar Meditación" onPress={startMeditation} />
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  duration: {
    fontSize: 18,
    marginBottom: 10,
  },
  theme: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default MeditationDetailScreen;
