import apiClient from './client';

const mealsEndpoint = '/filter.php?c=';
const mealDetailsEndpoint = '/lookup.php?i=';

const getMeals = id => apiClient.get(`${mealsEndpoint}${id}`);

const getMealDetails = id => apiClient.get(`${mealDetailsEndpoint}${id}`);

export default {
  getMeals,
  getMealDetails,
};
