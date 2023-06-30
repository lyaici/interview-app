import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './Button.module.scss'

const Button = ({ text, to, onClick, type = 'button', disabled = false }) => (
    <>
        {type === 'button' ||
            (type === 'submit' && (
                <button
                    onClick={onClick}
                    to={to}
                    type={type}
                    disabled={disabled}
                    className={styles.button}
                >
                    {text}
                </button>
            ))}
        {type === 'link' && (
            <Link
                to={to}
                onClick={onClick}
                type={type}
                disabled={disabled}
                className={styles.button}
            >
                {text}
            </Link>
        )}
    </>
)
export default memo(Button)
Button.displayName = 'Button'
Button.propTypes = {
    text: PropTypes.string,
    to: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string,
    disabled: PropTypes.bool,
}
