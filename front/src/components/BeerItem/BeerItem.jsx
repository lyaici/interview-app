import React from "react";
import { useDispatch } from 'react-redux';

import styles from "./BeerItem.module.scss";
import { Rate } from "./Rate/Rate";
import { rateBeer } from "../../redux/state/beers/beers.actions";

export const BeerItem = ({ beer: { name, ibu, score, uuid } }) => {
  const dispatch = useDispatch();
  
  const handleRate = (uuid, rating) => {
    dispatch(rateBeer(uuid, rating));
  };

  return (
    <div className={styles.beerItem}>
      <div className={styles.name}>{name}</div>
      <div className={styles.ibu}>IBU: {ibu}</div>
      <div className={styles.score}>Score: {score.toPrecision(1)}</div>
      <div className={styles.rate}>
        <Rate uuid={uuid} onRate={handleRate}/>
      </div>
    </div>
  );
};
