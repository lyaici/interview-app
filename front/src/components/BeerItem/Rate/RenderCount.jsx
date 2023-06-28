import React, { forwardRef } from 'react'

const RenderCount = forwardRef((props, ref) => {
    return (
        <div>
            <span>{ref.current}</span>
        </div>
    )
})
export default RenderCount
