import { createSelector } from "reselect";

const productsSelector = (state) => state.products.data;
export const getProducts = createSelector([productsSelector], (state) => state);
