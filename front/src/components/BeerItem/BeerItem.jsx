import React, { useCallback } from "react";

import styles from "./BeerItem.module.scss";
import { Rate } from "./Rate/Rate";
import { useRateBeer } from "../../services/beers/hooks";

export const BeerItem = ({ beer: { uuid, name, ibu, score } }) => {
  const { mutate: rateBeer } = useRateBeer();

  const onRate = useCallback((score) => {
    rateBeer({ uuid, score });
  }, [uuid, rateBeer]);

  return (
    <div className={styles.beerItem}>
      <div className={styles.name}>{name}</div>
      <div className={styles.ibu}>IBU: {ibu}</div>
      <div className={styles.score}>Score: {score.toPrecision(1)}</div>
      <div className={styles.rate}>
        <Rate onRate={onRate} />
      </div>
    </div>
  );
};
