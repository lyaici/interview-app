import axios from "axios";

export const getBeers = () => axios.get(`/beers`);
export const postBeer = beer => axios.post(`/beers`, beer);
export const rateBeerApi = (uuid, rating) => {
    const ratingData = {
        score: rating
    };
    return axios.put(`/beers/${uuid}`, ratingData);   
};