import React, { memo } from 'react'
import PropTypes from 'prop-types'
import BeerItem from '../BeerItem/BeerItem'
import Loader from '../Loader/Loader'

import styles from './BeerList.module.scss'

const BeerList = ({ beers, isLoading, isError }) => {
    if (isLoading) return <Loader /> // display a loader while the data is loading for better UX
    if (isError) return <p>Something went wrong...</p> // display an error message if something went wrong for better UX
    if (!beers) return <p>No beers found</p> // display a message if there is no beers for better UX

    return (
        <div className={styles.Beerlist}>
            {beers.map((beer) => (
                <BeerItem key={beer.uuid} beer={beer} />
            ))}
        </div>
    )
}
export default memo(BeerList) // memoize the component to avoid re-rendering it if the props are the same
BeerList.displayName = 'BeerList'
BeerList.propTypes = {
    beers: PropTypes.array,
    isLoading: PropTypes.bool,
    isError: PropTypes.bool,
}
