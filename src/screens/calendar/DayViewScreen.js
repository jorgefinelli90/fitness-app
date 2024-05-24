import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

function DayViewScreen() {
  const route = useRoute();
  const { date } = route.params;
  const navigation = useNavigation();

  const [events, setEvents] = useState([]);
  const [menus, setMenus] = useState([]);
  const [mealPlans, setMealPlans] = useState([]);

  const addEvent = () => {
    // Lógica para agregar evento
  };

  const addMenu = () => {
    navigation.navigate('MenuList', { date });
  };

  const addMealPlan = () => {
    // Lógica para agregar plan de comida
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('EventDetail', { item })}>
      <Text style={styles.item}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.date}>{date}</Text>
      <Button title="Agregar Evento" onPress={addEvent} />
      <Button title="Agregar Menú" onPress={addMenu} />
      <Button title="Agregar Plan de Comida" onPress={addMealPlan} />
      <FlatList
        data={[...events, ...menus, ...mealPlans]}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  date: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default DayViewScreen;
