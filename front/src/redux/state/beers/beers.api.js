import axios from "axios";

export const getBeers = () => axios.get(`/beers`);
export const postBeer = beer => axios.post(`/beers`, beer);
export const postBeerRate = (uuid, rate) => axios.post(`/beers/${uuid}/rate`, rate)