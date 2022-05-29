import axios from 'axios';

import cache from '../utility/cache';

const apiClient = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1',
});

const get = apiClient.get;
apiClient.get = async (url, config) => {
  const response = await get(url, config);
  if (response.status === 200) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);
  return data ? {status: '200', data} : response;
};

export default apiClient;
