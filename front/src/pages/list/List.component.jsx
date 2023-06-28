import React from 'react'
import { useQuery } from 'react-query'
import { BeerList } from '../../components/BeerList'
import { Button } from '../../components/Button'
import { getBeers } from '../../utils/helper'
import styles from './List.module.scss'

const List = () => {
    const { data: beers, isLoading: loading } = useQuery('beers', getBeers)
    return (
        <div>
            <div className={styles.list}>
                <BeerList beers={beers} loading={loading} />
            </div>
            <div className={styles.addBeer}>
                <Button type="link" to="/new/" text="Add a beer" />
            </div>
        </div>
    )
}
List.displayName = 'BeerList'
export default List
