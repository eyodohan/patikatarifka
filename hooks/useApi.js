import {useState, useEffect} from 'react';

export default useApi = apiFunc => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    request();
  }, []);

  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    if (response.status !== 200) return setError(true);

    setError(false);
    setData(response.data);
  };

  return {data, error, loading};
};
