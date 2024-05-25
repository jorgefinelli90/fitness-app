import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

function RecipeDetailScreen({ route }) {
  const { recipe } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: recipe.img }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{recipe.name}</Text>
        <View style={styles.tagsContainer}>
          {recipe.tags.map((tag, index) => (
            <Text key={index} style={styles.tag}>{tag}</Text>
          ))}
        </View>
        <Text style={styles.sectionTitle}>Ingredientes</Text>
        {recipe.ingredients.map((ingredient, index) => (
          <Text key={index} style={styles.text}>{ingredient}</Text>
        ))}
        <Text style={styles.sectionTitle}>Preparación</Text>
        {recipe.preparation.map((step, index) => (
          <Text key={index} style={styles.text}>{step}</Text>
        ))}
        <Text style={styles.sectionTitle}>Calorias</Text>
        <Text style={styles.text}>{recipe.calorias}</Text>
        <Text style={styles.sectionTitle}>Comentarios</Text>
        <Text style={styles.text}>{recipe.coments}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  tag: {
    backgroundColor: '#E0E0E0',
    borderRadius: 15,
    padding: 5,
    marginRight: 5,
    marginBottom: 5,
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default RecipeDetailScreen;
