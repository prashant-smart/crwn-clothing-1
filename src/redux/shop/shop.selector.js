import { createSelector } from 'reselect';

const selectShop = state => state.shopData;

export const selectCollections = createSelector(
  [selectShop],
  shopData => shopData.collection
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collection => Object.keys(collection).map(key => collection[key])
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
  );
