import React from "react";

import useBeers from "../../hooks/useBeers";
import { GET } from "../../api/beers/beers";
import { BeerList } from "../../components/BeerList";
import { Button } from "../../components/Button";
import styles from "./List.module.scss";

export const List = () => {
  const { data: beers = [], isLoading: loading } = useBeers({ method: GET.BEERS });

  return (
    <div>
      <div className={styles.list}>
        <BeerList beers={beers} loading={loading} />
      </div>
      <div className={styles.addBeer}>
        <Button type="link" to="/new/" text="Add a beer" />
      </div>
    </div>
  );
};
