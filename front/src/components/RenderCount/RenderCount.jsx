import React, { useEffect, useRef } from 'react';

function RenderCount() { 
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div>
      <p>Parent Component Re-renders: {renderCount.current}</p>
    </div>
  );
}

export default RenderCount;
