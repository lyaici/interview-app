import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import PropTypes from 'prop-types'
import styles from './BeerItem.module.scss'
import { Rate } from './Rate/Rate'
import { rateBeer } from '../../utils/helper'

export const BeerItem = ({ beer }) => {
    const { name, ibu, score, uuid } = beer // Change destructuring location for better readability
    const queryClient = useQueryClient() // access to the queryClient instance
    const { mutate, isLoading } = useMutation(rateBeer, {
        onSuccess: (data) => {
            const { name, nbRate } = data
            alert(
                `${name} has been rated successfully, you are the ${nbRate}th rater`
            )
        },
        onError: () => {
            alert('Something went wrong')
        },
        onSettled: () => {
            queryClient.invalidateQueries('beers') // invalidate the beers query to refetch the data
        },
    })

    if (isLoading) return 'Rating in process...' // display a loader while the mutation is in progress

    return (
        <div className={styles.beerItem}>
            <div className={styles.name}>{name}</div>
            <div className={styles.ibu}>IBU: {ibu}</div>
            <div className={styles.score}>Score: {score.toPrecision(1)}</div>
            <div className={styles.rate}>
                <Rate
                    onRate={(value) => mutate({ beerId: uuid, score: value })}
                />
            </div>
        </div>
    )
}
BeerItem.displayName = 'BeerItem'
BeerItem.propTypes = {
    beer: PropTypes.object,
}
