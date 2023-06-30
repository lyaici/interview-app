import React, { memo } from 'react'
import PropTypes from 'prop-types'
import styles from './Rate.module.scss'

// This is a list of different level objects wich contains a name property for the level's name and a value property wich represent the rate value
const LEVELS = [
    {
        name: 'inLove',
        value: 9,
    },

    {
        name: 'happy',
        value: 6,
    },
    {
        name: 'sad',
        value: 3,
    },
]
const Rate = ({ onRate }) => {
    return (
        <div className={styles.rate}>
            {LEVELS.map(({ name, value }, index) => (
                <div
                    key={index}
                    className={styles[name]}
                    onClick={() => onRate(value)}
                />
            ))}
        </div>
    )
}
export default memo(Rate) // We use memo to avoid re-rendering the component if the props are the same for better performance
Rate.displayName = 'Rate'
Rate.propTypes = {
    onRate: PropTypes.func,
}
