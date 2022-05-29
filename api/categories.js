import apiClient from './client';

const endpoint = '/categories.php';

const getCategories = () => apiClient.get(endpoint);

export default {
  getCategories,
};
