import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

function MenuListScreen() {
  const route = useRoute();
  const { date } = route.params;
  const navigation = useNavigation();

  const [recipes, setRecipes] = useState([
    // Datos de ejemplo
    { id: '1', title: 'Receta 1' },
    { id: '2', title: 'Receta 2' },
  ]);

  const handleSelectRecipe = (recipe) => {
    // Lógica para guardar la receta en la fecha
    navigation.navigate('DayView', { date });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSelectRecipe(item)}>
            <Text style={styles.item}>{item.title}</Text>
          </TouchableOpacity>
        )}
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
  item: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default MenuListScreen;
