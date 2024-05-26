import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const MentalHealthScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Meditation')}>
        <Image source={require('../../assets/images/health/landing/meditacion.jpg')} style={styles.image} />
        <View style={styles.overlay}>
          <Text style={styles.text}>Meditación</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Diary')}>
        <Image source={require('../../assets/images/health/landing/diario.jpg')} style={styles.image} />
        <View style={styles.overlay}>
          <Text style={styles.text}>Diario</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Breathing')}>
        <Image source={require('../../assets/images/health/landing/respiracion.jpg')} style={styles.image} />
        <View style={styles.overlay}>
          <Text style={styles.text}>Respiración</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Mindfulness')}>
        <Image source={require('../../assets/images/health/landing/mindfulness.jpg')} style={styles.image} />
        <View style={styles.overlay}>
          <Text style={styles.text}>Mindfulness</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Education')}>
        <Image source={require('../../assets/images/health/landing/educacion.jpg')} style={styles.image} />
        <View style={styles.overlay}>
          <Text style={styles.text}>Educación</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('PersonalizedRoutine')}>
        <Image source={require('../../assets/images/health/landing/instructor.jpg')} style={styles.image} />
        <View style={styles.overlay}>
          <Text style={styles.text}>Rutinas Personalizadas</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  item: {
    position: 'relative',
    marginBottom: 20,
  },
  image: {
    width: width,
    height: 200,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default MentalHealthScreen;
