import React, { useRef } from "react";

const RenderCounter = ({ name }) => {
    const renderCounter  = useRef(0);

    renderCounter.current = renderCounter.current + 1;

    console.log(`Renders ${name}: ${renderCounter.current}`)
    return <>Renders {name}: {renderCounter.current}</>;
};

export default RenderCounter;