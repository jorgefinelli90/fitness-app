import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function GoalsTrackingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Metas y seguimiento de objetivos</Text>
      {/* Aquí agregarás el contenido para metas y seguimiento de objetivos */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default GoalsTrackingScreen;

