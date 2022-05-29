import React from 'react';
import {View, Pressable, Text, Image, StyleSheet} from 'react-native';

function CategoryCard({category, imageUrl, onPress}) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.imageContainer}>
            <Image source={{uri: imageUrl}} style={styles.image} />
          </View>
          <Text style={styles.category}>{category}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  category: {
    fontSize: 24,
  },
  container: {
    backgroundColor: 'orange',
    padding: 8,
  },
  innerContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: 50,
    height: 50,
  },
  imageContainer: {
    paddingHorizontal: 8,
    paddingRight: 24,
  },
});

export default CategoryCard;
