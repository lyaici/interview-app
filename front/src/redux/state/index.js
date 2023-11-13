import { combineReducers } from "redux";

import { beersReducer } from "./beers/beers.reducer.js";

export const rootReducer = combineReducers({
  beers: beersReducer
});

