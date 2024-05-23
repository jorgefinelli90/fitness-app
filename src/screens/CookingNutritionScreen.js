import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function CookingNutritionScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => navigation.navigate('Recetas Destacadas')}
      >
        <ImageBackground
          source={require('../../assets/recetas-destacadas.png')}
          style={styles.image}
        >
          <Text style={styles.text}>Recetas Destacadas</Text>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => navigation.navigate('Planes de Comida')}
      >
        <ImageBackground
          source={require('../../assets/planes-comida.png')}
          style={styles.image}
        >
          <Text style={styles.text}>Planes de Comida</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    marginBottom: 2,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default CookingNutritionScreen;

