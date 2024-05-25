import React from 'react';
import { View, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ImageBackground 
      source={require('../../assets/images/landing/banner-home-fit.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.quadrant, styles.topLeft]}
          onPress={() => navigation.navigate('Fitness')}
        />
        <TouchableOpacity
          style={[styles.quadrant, styles.topRight]}
          onPress={() => navigation.navigate('Cooking & Nutrition')}
        />
        <TouchableOpacity
          style={[styles.quadrant, styles.bottomLeft]}
          onPress={() => navigation.navigate('Productivity')}
        />
        <TouchableOpacity
          style={[styles.quadrant, styles.bottomRight]}
          onPress={() => navigation.navigate('Mental Health')}
        />
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
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  quadrant: {
    width: '50%',
    height: '50%',
  },
  topLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  topRight: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  bottomLeft: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  bottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});

export default HomeScreen;

