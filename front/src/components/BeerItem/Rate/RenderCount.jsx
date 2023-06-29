import React, { forwardRef } from 'react'

const RenderCount = forwardRef((props, ref) => {
    return (
        <div style={{ fontSize: 14 }}>
            <span>Render:</span>
            <span>{ref.current}</span>
        </div>
    )
})
export default RenderCount
