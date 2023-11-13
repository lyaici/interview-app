import React from "react";
import usePostRate from "../../../hooks/usePostRate";
import styles from "./Rate.module.scss";

export const Rate = ({ uuid }) => {
  const mutation = usePostRate();

  const handleRate = (score) => {
    mutation.mutate({ uuid, score });
  }

  return (
    <div className={styles.rate}>
      <div className={styles.inLove} onClick={() => handleRate(10)} />
      <div className={styles.happy} onClick={() => handleRate(5)} />
      <div className={styles.sad} onClick={() => handleRate(1)} />
    </div>
  );
}
