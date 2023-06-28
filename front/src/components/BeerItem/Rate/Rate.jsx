import React from "react";

import styles from "./Rate.module.scss";

export const Rate = ({ onRate }) => (
  <div className={styles.rate}>
    <div className={styles.inLove} onClick={onRate} />
    <div className={styles.happy} onClick={onRate} />
    <div className={styles.sad} onClick={onRate} />
  </div>
);
