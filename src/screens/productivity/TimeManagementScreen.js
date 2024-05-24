import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function TimeManagementScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('PomodoroTimer')}>
        <ImageBackground source={require('../../../assets/prod-3.png')} style={styles.image}>
          <Text style={styles.text}>Pomodoro Timer</Text>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('TaskCalendar')}>
        <ImageBackground source={require('../../../assets/prod-1.png')} style={styles.image}>
          <Text style={styles.text}>Calendario de Tareas</Text>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('PriorityTaskList')}>
        <ImageBackground source={require('../../../assets/prod-2.png')} style={styles.image}>
          <Text style={styles.text}>Lista de Tareas Prioritarias</Text>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('TimeBlocking')}>
        <ImageBackground source={require('../../../assets/prod-1.png')} style={styles.image}>
          <Text style={styles.text}>Bloques de Tiempo</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  option: {
    width: '100%',
    height: '25%',
    marginBottom: 10,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 5,
  },
});

export default TimeManagementScreen;
