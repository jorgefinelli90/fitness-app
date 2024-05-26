import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

const MeditationTimerScreen = ({ route, navigation }) => {
  const { duration } = route.params;
  const [seconds, setSeconds] = useState(duration * 60);
  const [isActive, setIsActive] = useState(false);
  const [sound, setSound] = useState();

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    if (seconds === 0 && isActive) {
      playSound();
      clearInterval(interval);
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require('../../../assets/sounds/meditation_end.mp3')
    );
    setSound(sound);
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setSeconds(duration * 60);
    setIsActive(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>{Math.floor(seconds / 60)}:{seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60}</Text>
      <Button onPress={toggle} title={isActive ? 'Pausar' : 'Iniciar'} />
      <Button onPress={reset} title="Reiniciar" />
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  timer: {
    fontSize: 48,
    marginBottom: 20,
  },
});

export default MeditationTimerScreen;
