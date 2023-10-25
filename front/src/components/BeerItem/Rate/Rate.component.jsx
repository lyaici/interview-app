import React from "react";
import { useDispatch } from "react-redux";
import { BeerActionTypes } from "../../../redux/state/beers";

import styles from "./Rate.module.scss";

function Rate({ beerUuid }) {
  const dispatch = useDispatch();

  const handleRateBeer = (score) => {
    dispatch({
      type: BeerActionTypes.BEERS_RATE,
      payload: { beerUuid, score },
    });
  };

  return (
    <>
      <div className={styles.rateText}>Rate it: </div>
      <div className={styles.rate}>
        <button
          type="button"
          className={styles.inLove}
          aria-label="love"
          onClick={() => handleRateBeer(10)}
        />
        <button
          type="button"
          className={styles.happy}
          aria-label="happy"
          onClick={() => handleRateBeer(5)}
        />
        <button
          type="button"
          className={styles.sad}
          aria-label="sad"
          onClick={() => handleRateBeer(1)}
        />
      </div>
    </>
  );
}

export default Rate;
