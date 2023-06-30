import React from 'react'
import { useQuery } from 'react-query'
import BeerList from '../../components/BeerList/BeerList.component'
import Button from '../../components/Button/Button.component'
import { getBeers } from '../../utils/helper'
import styles from './List.module.scss'

const List = () => {
    const { data: beers, isLoading, isError } = useQuery('beers', getBeers)
    return (
        <div>
            <div className={styles.list}>
                <BeerList beers={beers} loading={isLoading} error={isError} />
            </div>
            <div className={styles.addBeer}>
                <Button type="link" to="/new/" text="Add a beer" />
            </div>
        </div>
    )
}
List.displayName = 'BeerList'
export default List
