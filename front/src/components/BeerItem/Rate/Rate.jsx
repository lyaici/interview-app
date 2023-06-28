import React from 'react'
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
export const Rate = ({ onRate }) => {
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
Rate.displayName = 'Rate'
Rate.propTypes = {
    onRate: PropTypes.func,
}
