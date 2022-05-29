import React from 'react';
import {ScrollView, View, Image, Text, StyleSheet} from 'react-native';

function MealCard({title, imageUrl, description}) {
  return (
    <ScrollView style={styles.container}>
      <Image source={{uri: imageUrl}} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.seperator}></View>
      <Text>{description}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
    paddingVertical: 10,
  },
  seperator: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    marginBottom: 10,
  },
});

export default MealCard;

// {
//     "strMeal": "Baked salmon with fennel & tomatoes",
//     "strMealThumb": "https://www.themealdb.com/images/media/meals/1548772327.jpg",
//     "idMeal": "52959"
//     },
