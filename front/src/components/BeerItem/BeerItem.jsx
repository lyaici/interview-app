import React from "react";

import styles from "./BeerItem.module.scss";
import { Rate } from "./Rate/Rate";
import RenderCounter from "./RenderCount/RenderCount";

export const BeerItem = ({ beer: { name, ibu, score, uuid } }) => {

  return (
    <div className={styles.beerItem}>
      <RenderCounter name={'BeerItem'} />
      <div className={styles.name}>{name}</div>
      <div className={styles.ibu}>IBU: {ibu}</div>
      <div className={styles.score}>Score: {score.toPrecision(1)}</div>
      <div className={styles.rate}>
        <Rate uuid={uuid} />
      </div>
    </div>
  );
};
