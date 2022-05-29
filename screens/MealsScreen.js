import React from 'react';
import {Text, Button, FlatList, StyleSheet} from 'react-native';

import ActivityIndicator from '../components/ActivityIndicator';
import mealsApi from '../api/meals';
import Screen from '../components/Screen';
import useApi from '../hooks/useApi';
import MealsCard from '../components/MealsCard';

function MealsScreen({navigation, route}) {
  const {id} = route.params;
  const {
    data: {meals},
    error,
    loading,
  } = useApi(() => mealsApi.getMeals(id));

  const renderMealDetail = ({item}) => (
    <MealsCard
      imageUrl={item.strMealThumb}
      title={item.strMeal}
      onPress={() => navigation.navigate('MealDetail', {item})}
    />
  );

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
        data={meals}
        keyExtractor={item => item.idMeal}
        renderItem={renderMealDetail}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default MealsScreen;
