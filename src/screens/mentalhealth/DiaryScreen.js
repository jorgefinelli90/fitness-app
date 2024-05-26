import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DiaryScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Diario de Sentimientos</Text>
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

export default DiaryScreen;
