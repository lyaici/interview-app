import React, { useRef } from "react";

import styles from "./RenderCount.module.scss";

export const RenderCount = ({
  parentComponentName = "Parent component",
  ...rest
}) => {
  const renderCount = useRef(0);
  renderCount.current += 1;

  return (
    <p className={styles.renderCount} {...rest}>
      {parentComponentName} re-render {renderCount.current} times.
    </p>
  );
};
