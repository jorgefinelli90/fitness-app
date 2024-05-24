import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TaskContext } from '../../context/TaskContext';

function TaskListDetailScreen({ route }) {
  const { listId, title } = route.params;
  const { tasks, toggleComplete } = useContext(TaskContext);
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.taskItem}
      onPress={() => toggleComplete(item.id)}
    >
      <Text style={[styles.taskItemText, item.completed && styles.completed]}>{item.title}</Text>
    </TouchableOpacity>
  );

  const filteredTasks = tasks.filter(task => task.listId === listId);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Button
        title="Crear Nueva Tarea"
        onPress={() => navigation.navigate('NewTask', { listId })}
      />
      <FlatList
        data={filteredTasks}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  taskItem: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  taskItemText: {
    fontSize: 18,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#aaa',
  },
});

export default TaskListDetailScreen;
