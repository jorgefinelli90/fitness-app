import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

function PomodoroTimerScreen() {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [customTime, setCustomTime] = useState('25');
  const [pickerVisible, setPickerVisible] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTime(25 * 60);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleCustomTime = (value) => {
    setCustomTime(value);
    setTime(parseInt(value) * 60);
    setPickerVisible(false);
  };

  return (
    <ImageBackground 
      source={require('../../../assets/time.gif')}
      style={styles.background}
      resizeMode="cover" // Ajusta la imagen de fondo para cubrir toda la pantalla
    >
      <View style={styles.container}>
        <Text style={styles.timer}>{formatTime(time)}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => setTime(5 * 60)}>
            <Text style={styles.buttonText}>5min</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setTime(10 * 60)}>
            <Text style={styles.buttonText}>10min</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setTime(15 * 60)}>
            <Text style={styles.buttonText}>15min</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setTime(30 * 60)}>
            <Text style={styles.buttonText}>30min</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.customButton} onPress={() => setPickerVisible(!pickerVisible)}>
          <Text style={styles.buttonText}>Custom Time</Text>
        </TouchableOpacity>
        {pickerVisible && (
          <Picker
            selectedValue={customTime}
            style={styles.picker}
            onValueChange={(itemValue) => handleCustomTime(itemValue)}
          >
            {[...Array(61).keys()].map((num) => (
              <Picker.Item key={num} label={`${num} min`} value={`${num}`} />
            ))}
          </Picker>
        )}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.actionButton} onPress={toggleTimer}>
            <Text style={styles.actionButtonText}>{isActive ? "Pausar" : "Iniciar"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={resetTimer}>
            <Text style={styles.actionButtonText}>Reiniciar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.stopwatchContainer}>
        <Text style={styles.stopwatchTitle}>Cronómetro</Text>
        {/* Aquí puedes añadir el cronómetro */}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timer: {
    fontSize: 48,
    marginBottom: 20,
    color: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ff6347',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  customButton: {
    backgroundColor: '#4682b4',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  picker: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginTop: 20,
  },
  actionButton: {
    backgroundColor: '#32cd32',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  stopwatchContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  stopwatchTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
});

export default PomodoroTimerScreen;
