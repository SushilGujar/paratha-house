import { createSelector } from "reselect";

const shop = state => state.shop;

export const collections = createSelector(
    [shop],
    shop => shop.collections
);

export const collection = collectionId => createSelector(
    [collections],
    collections => collections.find(collection => true)
);