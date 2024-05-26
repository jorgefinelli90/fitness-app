import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const PersonalizedRoutineScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Rutinas Personalizadas</Text>
      {/* Implementar los componentes específicos de rutinas personalizadas */}
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default PersonalizedRoutineScreen;
