import React from "react";

import styles from "./Rate.module.scss";

export const Rate = ({ uuid, onRate }) => (
  <div className={styles.rate}>
    <div className={styles.inLove} onClick={() => onRate(uuid, 10)} />
    <div className={styles.happy} onClick={() => onRate(uuid, 5)} />
    <div className={styles.sad} onClick={() => onRate(uuid, 1)} />
  </div>
);
