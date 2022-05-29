import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import MealsScreen from '../screens/MealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Categories" component={CategoriesScreen} />
    <Stack.Screen name="Meals" component={MealsScreen} />
    <Stack.Screen name="MealDetail" component={MealDetailScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
