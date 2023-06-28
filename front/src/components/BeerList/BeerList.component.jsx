import React from 'react'
import PropTypes from 'prop-types'
import { BeerItem } from '../BeerItem'
import { Loader } from '../Loader'

import styles from './BeerList.module.scss'

// this component is refactored to apply the early return pattern for avoiding performance issues
export const BeerList = ({ beers, loading }) => {
    if (loading) return <Loader />
    return (
        <div className={styles.Beerlist}>
            {beers.map((beer) => (
                <BeerItem key={beer.uuid} beer={beer} />
            ))}
        </div>
    )
}
BeerList.displayName = 'BeerList'
BeerList.propTypes = {
    beers: PropTypes.array,
    loading: PropTypes.bool,
}
