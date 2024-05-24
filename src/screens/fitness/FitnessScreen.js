import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function FitnessScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Musculacion')}>
        <ImageBackground
          source={require('../../../assets/images/fitness/banner-ex.jpg')}
          style={styles.image}
        >
          <Text style={styles.text}>Musculación</Text>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity>
        <ImageBackground
          source={require('../../../assets/images/fitness/banner-ex.jpg')}
          style={styles.image}
        >
          <Text style={styles.text}>Elongación</Text>
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
  image: {
    width: '90%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
  },
});

export default FitnessScreen;
