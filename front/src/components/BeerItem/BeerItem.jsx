import React, { useCallback, useRef, memo } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import PropTypes from 'prop-types'
import styles from './BeerItem.module.scss'
import Rate from './Rate/Rate'
import { rateBeer } from '../../utils/helper'
import RenderCount from './Rate/RenderCount'

const BeerItem = ({ beer }) => {
    const { name, ibu, score, uuid } = beer // Change destructuring location for better code readability

    const renderCount = useRef(0) // Create a ref to store the render count, we choose to use a ref instead of a state because we don't want to trigger a re-render when the render count is updated
    renderCount.current++ // Increment the render count on each render

    const queryClient = useQueryClient() // access to the queryClient instance
    const { mutate, isLoading } = useMutation(rateBeer, {
        onSuccess: (data) => {
            const { name, nbRate } = data
            alert(
                `${name} has been rated successfully, you are the ${nbRate}th rater`
            )
        },
        onError: () => {
            alert('Something went wrong') // display an error message if something went wrong for better UX
        },
        onSettled: () => {
            queryClient.invalidateQueries('beers') // invalidate the beers query to refetch the data and update the UI
        },
    })

    const handleRate = useCallback(
        (value) => {
            mutate({ beerId: uuid, score: value })
        },
        [uuid, mutate]
    ) // we use useCallback to avoid re-creating the function on each render, the function identity is stable during the time

    if (isLoading) return 'Rating in process...' // display a loader while the mutation is in progress for better UX

    return (
        <div className={styles.beerItem}>
            <div className={styles.name}>{name}</div>
            <div className={styles.ibu}>IBU: {ibu}</div>
            <div className={styles.score}>Score: {score.toPrecision(1)}</div>
            <div className={styles.rate}>
                <Rate onRate={handleRate} />
            </div>
            <RenderCount ref={renderCount} />
        </div>
    )
}
export default memo(BeerItem) // memoize the component to avoid re-rendering it if the props are the same
BeerItem.displayName = 'BeerItem'
BeerItem.propTypes = {
    beer: PropTypes.shape({
        name: PropTypes.string,
        ibu: PropTypes.number,
        score: PropTypes.number,
        uuid: PropTypes.string,
    }),
}
