import React from "react";

import styles from "./Rate.module.scss";

export const Rate = ({ uuid, onRate }) => {

  const ratings = {
    'inLove': 5,
    'happy': 3,
    'sad': 1
  };

  return (
    <div className={styles.rate}>
      <button className={styles.inLove} onClick={() => onRate(uuid, ratings['inLove'])} />
      <button className={styles.happy} onClick={() => onRate(uuid, ratings['happy'])} />
      <button className={styles.sad} onClick={() => onRate(uuid, ratings['sad'])} />
    </div>
  );

};


