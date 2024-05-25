import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function FeaturedRecipesScreen() {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        const recipesData = require('../../../assets/json/cooking/recipes.json');
        setRecipes(recipesData.recipes);
        setFilteredRecipes(recipesData.recipes);
      } catch (error) {
        console.error('Error loading recipes:', error);
      }
    };

    loadRecipes();
  }, []);

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  useEffect(() => {
    if (selectedTags.length === 0) {
      setFilteredRecipes(recipes);
    } else {
      setFilteredRecipes(
        recipes.filter(recipe =>
          selectedTags.every(tag => recipe.tags.includes(tag))
        )
      );
    }
  }, [selectedTags, recipes]);

  const renderRecipe = ({ item }) => (
    <TouchableOpacity style={styles.recipeCard} onPress={() => navigation.navigate('Recetas', { recipe: item })}>
      <Image source={{ uri: item.img }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.subtitle}>{item.subtittle}</Text>
      </View>
    </TouchableOpacity>
  );

  const allTags = [...new Set(recipes.flatMap(recipe => recipe.tags))];

  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.tagContainer}>
        {allTags.map((tag, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.tag, selectedTags.includes(tag) && styles.selectedTag]}
            onPress={() => toggleTag(tag)}
          >
            <Text style={styles.tagText}>{tag}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <FlatList
        data={filteredRecipes}
        renderItem={renderRecipe}
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
  tagContainer: {
    flexDirection: 'row',
    marginVertical: 5,
    height: 50,
  },
  tag: {
    backgroundColor: '#E0E0E0',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 5,
    height: 40, // Altura fija para todos los tags
  },
  selectedTag: {
    backgroundColor: '#FFC107',
    height: 40, // Mantener la altura fija para los tags seleccionados
  },
  tagText: {
    fontSize: 14,
  },
  recipeCard: {
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

export default FeaturedRecipesScreen;
