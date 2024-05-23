import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a FitnessApp</Text>
      <Button
        title="Go to Fitness"
        onPress={() => navigation.navigate('Fitness')}
      />
      <Button 
        title="Go to Mental Health"
        onPress={() => navigation.navigate('Mental Health')}
      />
      <Button
        title ="Go to Productivity"
        onPress={() => navigation.navigate('Productivity')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
});

export default HomeScreen;
