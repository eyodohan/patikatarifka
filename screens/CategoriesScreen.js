import React from 'react';
import {Button, FlatList, Text, StyleSheet} from 'react-native';

import ActivityIndicator from '../components/ActivityIndicator';
import CategoryCard from '../components/CategoryCard';
import Screen from '../components/Screen';
import useApi from '../hooks/useApi';
import categoriesApi from '../api/categories';

function CategoriesScreen({navigation}) {
  const renderItem = ({item}) => {
    const id = item.strCategory;

    return (
      <CategoryCard
        category={item.strCategory}
        imageUrl={item.strCategoryThumb}
        onPress={() => navigation.navigate('Meals', {id})}
      />
    );
  };
  const {
    data: {categories},
    error,
    loading,
  } = useApi(categoriesApi.getCategories);
  return (
    <Screen>
      {error && (
        <>
          <Text>Couldn't not retrieve the categories</Text>
          <Button title="Retry" />
        </>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={categories}
        keyExtractor={item => item.idCategory}
        renderItem={renderItem}
      />
    </Screen>
  );
}

export default CategoriesScreen;
