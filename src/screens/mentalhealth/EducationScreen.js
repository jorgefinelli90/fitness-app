import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const EducationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contenido Educativo</Text>
      {/* Implementar los componentes específicos de contenido educativo */}
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

export default EducationScreen;
