import axios from 'axios';
import { useQuery, UseQueryResult } from 'react-query';


function useGetRequest<T>(name: string): UseQueryResult<T> {
  return useQuery(name, async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}${name}`
    );
    return data as T;
  });
}

export default useGetRequest;
