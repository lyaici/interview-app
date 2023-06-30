import React, { memo } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import styles from './Input.module.scss'

const classnamesCx = classnames.bind(styles)

const Input = ({
    value,
    valid,
    autoCapitalize,
    name,
    type,
    placeholder,
    defaultValue,
    disabled,
    onChange,
    onBlur,
    onFocus,
}) => {
    const underlineClasses = classnamesCx({
        underline: true,
        valid: valid && value.length > 0,
        invalid: !valid && value.length > 0,
    })

    return (
        <div className={styles.container}>
            <input
                type={type}
                autoCapitalize={autoCapitalize ? 'sentences' : 'off'}
                name={name}
                value={value}
                placeholder={placeholder}
                defaultValue={defaultValue}
                disabled={disabled}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
            />
            <label>{placeholder}</label>
            <span className={underlineClasses} />
        </div>
    )
}
export default memo(Input)
Input.displayName = 'Input'
Input.propTypes = {
    value: PropTypes.string,
    valid: PropTypes.bool,
    autoCapitalize: PropTypes.bool,
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
}
