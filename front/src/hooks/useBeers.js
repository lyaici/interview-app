import { useQuery } from 'react-query';
import api from '../api/beers/beers';

const useGetQuery = ({ method, params, headers = {}, queryKey = [], ...rest}, options) => {
    const { data, ...queries } = useQuery(
        [method, ...queryKey], 
        () => api({
            method,
            params,
            headers,
            ...rest,
        }),
        options
    );
    return { data, ...queries };
}

export default useGetQuery;