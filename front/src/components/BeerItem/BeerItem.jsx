import React, { useState } from "react";
import axios from "axios";

import styles from "./BeerItem.module.scss";
import { Rate } from "./Rate/Rate";
// import { store } from "../../redux";
// import { setBeers } from "../../redux/state/beers";

export const BeerItem = ({ beer }) => {
  const [newBeer, setNewBeer] = useState(beer)

  const onRate = async () => {
    try {
      const { data } = await axios.post(`/beers/${beer.uuid}/rate`, newBeer)
      /**
       * Version 1 with redux to update beers store
       * Update imports in BeerList.component.jsx and current file
       */
      // const idx = beers.findIndex(b => b.uuid === beer.uuid)
      // const newBeers = [...beers]
      // newBeers[idx] = data
      // store.dispatch(setBeers(newBeers))

      /**
       * Version 2 with current state
       */
      setNewBeer(data)
    } catch (error) {
      console.log({ error });
    }
  }

  return (
    <div className={styles.beerItem}>
      <div className={styles.name}>{newBeer.name}</div>
      <div className={styles.ibu}>IBU: {newBeer.ibu}</div>
      <div className={styles.score}>Score: {newBeer.score.toPrecision(1)}</div>
      <div className={styles.nbRate}>Nb. rate: {newBeer.nbRate}</div>
      <div className={styles.rate}>
        <Rate onRate={onRate} />
      </div>
    </div>
  )
}
