import React from "react";
import { useDispatch } from "react-redux";
import { BeerActionTypes } from "../../../redux/state/beers";

import styles from "./Rate.module.scss";

const Rate = ({ beerUuid }) => {
  const dispatch = useDispatch();

  const handleRateBeer = (score) => {
    dispatch({ type: BeerActionTypes.BEERS_RATE, payload: { beerUuid, score } });
  };

  return (
    <>
      <div className={styles.rateText}>Rate it: </div>
      <div className={styles.rate}>
        <div
          className={styles.inLove}
          onClick={() => handleRateBeer(10)}
        />
        <div
          className={styles.happy}
          onClick={() => handleRateBeer(5)}
        />
        <div
          className={styles.sad}
          onClick={() => handleRateBeer(1)}
        />
      </div>
    </>
  );
};

export default Rate;