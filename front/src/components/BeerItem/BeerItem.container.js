import { connect } from "react-redux";
import { setBeers } from "../../redux/state/beers";
import { BeerItem } from "./BeerItem";
import { allBeersSelector } from "../../redux/state/beers";

const mapStateToProps = state => {
  return {
    beers: allBeersSelector(state)
  };
};

const mapDispatchToProps = { setBeers };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerItem);
