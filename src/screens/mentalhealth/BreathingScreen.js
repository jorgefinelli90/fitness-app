import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const BreathingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ejercicios de Respiración</Text>
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

export default BreathingScreen;
