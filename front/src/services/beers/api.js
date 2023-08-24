import axios from "axios";

export const rateBeers = ({ uuid, score }) => axios.post(`/beers/${uuid}/rate`, { score });