import React from 'react';
import {View, Pressable, Image, Text, StyleSheet} from 'react-native';

function MealCard({imageUrl, title, onPress}) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: imageUrl}} />
          <View style={styles.box} />
          <View style={styles.textContainer}>
            <Text style={styles.text}>{title}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    padding: 10,
  },
  image: {
    width: '100%',
    height: 200,
  },
  imageContainer: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  box: {
    position: 'absolute',
    bottom: 0,
    opacity: 0.5,
    backgroundColor: '#F7768F',
    width: '100%',
    height: 50,
  },
  text: {
    padding: 10,
    color: 'white',
    textAlign: 'right',
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 0,
    right: 10,
    zIndex: 1,
  },
  textContainer: {
    width: '100%',
    flex: 1,
  },
});

export default MealCard;

// {
//     "strMeal": "Cajun spiced fish tacos",
//     "strMealThumb": "https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg",
//     "idMeal": "52819"
//     },
