import React, { useEffect, useRef } from 'react';
// import styles from "./RenderCount.module.scss";

function useRenderCount() {
    const renderCountRef = useRef(0);
  
    useEffect(() => {
      renderCountRef.current++;
    });
  
    return renderCountRef.current;
}

export const RenderCount = () => {
  const renderCount = useRenderCount(); 
  return (
    <span>Render Count : { renderCount } </span>
  )
}
