import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function MealPlansScreen() {
  const [mealPlans, setMealPlans] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const mealPlansData = require('../../../assets/mealPlans.json');
    setMealPlans(mealPlansData.mealPlans);
  }, []);

  const renderMealPlan = ({ item }) => (
    <TouchableOpacity style={styles.mealPlanCard} onPress={() => navigation.navigate('MealPlanDetail', { mealPlan: item })}>
      <Image source={{ uri: item.img }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.subtitle}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={mealPlans}
        renderItem={renderMealPlan}
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
  mealPlanCard: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
  },
  textContainer: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
  },
});

export default MealPlansScreen;
