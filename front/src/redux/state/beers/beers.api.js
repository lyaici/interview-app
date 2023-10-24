import axios from "axios";

export const getBeers = () => axios.get(`/beers`);
export const postBeer = beer => axios.post(`/beers`, beer);
export const rateBeer = (uuid, score) => axios.post(`/beers/${uuid}/rate`, {
    "score": score
  });
