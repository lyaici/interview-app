import React from "react";

import styles from "./Rate.module.scss";
export const Rate = ({ onRate, beerId }) => (
  <div className={styles.rate}>
    <div className={styles.inLove} onClick={() => onRate(beerId, 10)} />
    <div className={styles.happy} onClick={() => onRate(beerId, 5)} />
    <div className={styles.sad} onClick={() => onRate(beerId, 3)} />
  </div>
);
