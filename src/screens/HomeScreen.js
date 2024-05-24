import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ImageBackground 
      source={require('../../assets/images/landing/banner-home-fit.png')}
      style={styles.background}
    >

      <View style={styles.container}> 
        <View style={[styles.button, styles.fitnessButton]}>
          <Button
            title="Go to Fitness"
            onPress={() => navigation.navigate('Fitness')}
          />
        </View>
        <View style={[styles.button, styles.cookingButton]}>
          <Button
            title="Go to Cooking & Nutrition"
            onPress={() => navigation.navigate('Cooking & Nutrition')}
          />
        </View>
        <View style={[styles.button, styles.productivityButton]}>
          <Button
            title="Go to Productivity"
            onPress={() => navigation.navigate('Productivity')}
          />
        </View>
        <View style={[styles.button, styles.mentalHealthButton]}>
          <Button
            title="Go to Mental Health"
            onPress={() => navigation.navigate('Mental Health')}
          />
        </View>
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
  title: {
    top: 0,
    fontSize: 24,
    marginBottom: 16,
    color: 'gray',
    textAlign: 'center',
  },
  button: {
    position: 'absolute',
    
  },
  fitnessButton: {
    top: 150,
    left: 20,
    borderRadius: 80,
  },
  cookingButton: {
    top: 150,
    right: 20,
  },
  productivityButton: {
    bottom: 150,
    left: 20,
  },
  mentalHealthButton: {
    bottom: 150,
    right: 20,
  },
});

export default HomeScreen;
