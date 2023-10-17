import React from "react";

import styles from "./BeerItem.module.scss";
import { Rate } from "./Rate/Rate";
import RenderCounter from "../RenderCount";
export const BeerItem = React.memo(
  ({ beer: { name, ibu, score, uuid, nbRate }, onRate }) => (
    <div className={styles.beerItem}>
      <div className={styles.name}>{name}</div>
      <div className={styles.ibu}>IBU: {ibu}</div>
      <div className={styles.score}>
        Score: {Number.isInteger(score) ? String(score) : score.toPrecision(1)}
        <span>({nbRate} votes)</span>
      </div>

      <div className={styles.rate}>
        <Rate onRate={onRate} beerId={uuid} />
      </div>
      <RenderCounter />
    </div>
  )
);
