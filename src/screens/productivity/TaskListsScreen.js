import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const taskLists = [
  { id: '1', title: 'Trabajo' },
  { id: '2', title: 'Personal' },
  // Más listas...
];

function TaskListsScreen() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => navigation.navigate('TaskListDetail', { listId: item.id, title: item.title })}
    >
      <Text style={styles.listItemText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Button title="Crear Nueva Lista" onPress={() => { /* Lógica para crear una nueva lista */ }} />
      <FlatList
        data={taskLists}
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
  listItem: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  listItemText: {
    fontSize: 18,
  },
});

export default TaskListsScreen;
