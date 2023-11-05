import { BeerActionTypes } from "./beers.model";

export const fetchBeersIfNot = () => ({
  type: BeerActionTypes.BEERS_FETCH_IF_NOT
});
export const fetchBeers = () => ({
  type: BeerActionTypes.BEERS_FETCH
});

export const setBeers = beers => ({
  type: BeerActionTypes.BEERS_SET,
  beers
});

export const fetchBeersSuccess = () => ({
  type: BeerActionTypes.BEERS_FETCH_SUCCESS
});

export const fetchBeersFailure = () => ({
  type: BeerActionTypes.BEERS_FETCH_FAILURE
});

export const createBeer = beer => ({
  type: BeerActionTypes.BEERS_CREATE,
  beer
});

export const setNewlyCreatedBeer = beer => ({
  type: BeerActionTypes.BEERS_SET_NEW,
  beer
});

export const rateBeer = (uuid, rating) => ({
  type: BeerActionTypes.BEER_RATE,
  payload: { uuid, rating }
});

export const rateBeerSuccess = (beer) => ({
  type: BeerActionTypes.BEER_RATE_SUCCESS,
  payload: beer
});

export const rateBeerFailure = (error) => ({
  type: BeerActionTypes.BEER_RATE_FAILURE,
  payload: error
});