export const beerItemsSelector = ({ beers: { items, updatedItem } }) =>
  items.map((item) => (item.uuid === updatedItem.uuid ? updatedItem : item));

export const allBeersSelector = (state) => [
  ...beerItemsSelector(state),
  ...state.beers.newItems,
];
