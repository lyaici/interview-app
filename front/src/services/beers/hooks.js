import { useMutation } from "@tanstack/react-query"
import { rateBeers } from "./api"
import { useDispatch } from "react-redux";
import { fetchBeers } from "../../redux/state/beers";

export const useRateBeer = () => {
    const dispatch = useDispatch();

    return useMutation((props) => rateBeers(props), {
        onSettled: () => {
            //Ici je choisi de refetch la liste des bieres,
            //Dans l'ideal il ne faudrai refetch que la biere concerné et la remplacé dans le store
            dispatch(fetchBeers());
        }
    });
}
