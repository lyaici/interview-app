import React, { useEffect, useRef } from "react";

export const RenderCount = () => {
    const count = useRef(0);

    useEffect(() => {
        count.current += 1;
    });

    return (
        <div>Rendu {count.current} fois</div>
    )
}