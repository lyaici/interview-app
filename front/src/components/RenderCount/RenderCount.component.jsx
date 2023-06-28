import React, { useRef } from "react";

import styles from "./RenderCount.module.scss";

const RenderCount = () => {
  const renderCounter  = useRef(0);
  renderCounter.current = renderCounter.current + 1;

  return (
    <span className={styles.render}>
      Render: {renderCounter.current}
    </span>
  )
};

export default RenderCount
