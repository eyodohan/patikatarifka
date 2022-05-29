import React from 'react';
import {Button, Text, StyleSheet} from 'react-native';

import mealsApi from '../api/meals';
import ActivityIndicator from '../components/ActivityIndicator';
import MealCard from '../components/MealCard';
import Screen from '../components/Screen';
import useApi from '../hooks/useApi';

function MealDetailScreen({route}) {
  const {item} = route.params;
  const id = item.idMeal;

  const {
    data: {meals},
    error,
    loading,
  } = useApi(() => mealsApi.getMealDetails(id));

  return (
    <Screen>
      {error && (
        <>
          <Text>Couldn't not retrieve the categories</Text>
          <Button title="Retry" />
        </>
      )}
      <ActivityIndicator visible={loading} />
      {meals && (
        <MealCard
          title={meals[0].strMeal}
          imageUrl={meals[0].strMealThumb}
          description={meals[0].strInstructions}
        />
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default MealDetailScreen;
