import { useMutation, useQueryClient } from 'react-query';
import beersApi, { POST, GET } from '../api/beers/beers';

const usePostRate = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (params) => beersApi({ method: POST.RATE, params }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [GET.BEERS] })
      },
      onError: (error) => {
        console.log(error);
      }
    }
  );

  return mutation;
};

export default usePostRate;