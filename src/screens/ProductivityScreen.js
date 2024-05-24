import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function ProductivityScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('TaskLists')}>
        <Image source={require('../../../fitness-app/assets/prod-1.png')} style={styles.image} />
        <Text style={styles.cardText}>Listas de tareas y recordatorios</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('TimeManagement')}>
        <Image source={require('../../../fitness-app/assets/prod-2.png')} style={styles.image} />
        <Text style={styles.cardText}>Técnicas de gestión del tiempo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('GoalsTracking')}>
        <Image source={require('../../../fitness-app/assets/prod-3.png')} style={styles.image} />
        <Text style={styles.cardText}>Metas y seguimiento de objetivos</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
});

export default ProductivityScreen;
