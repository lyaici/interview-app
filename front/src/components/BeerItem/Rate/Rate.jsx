import React from "react";

import styles from "./Rate.module.scss";

const RateLevels = [{
  score: 3,
  className: styles.inLove,
},{
  score: 2,
  className: styles.happy,
},{
  score: 1,
  className: styles.sad,
}]

export const Rate = ({ id, onRate }) => (
  <div className={styles.rate}>
    {RateLevels.map(({ score, ...props }) => {
      return <div key={score} onClick={() => onRate(score)} {...props} />
    })}
  </div>
);