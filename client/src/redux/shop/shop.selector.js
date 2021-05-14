import { createSelector } from 'reselect';

const selectShop = state => state.shopData;

export const selectCollections = createSelector(
  [selectShop],
  shopData => shopData.collection
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collection =>collection? Object.keys(collection).map(key => collection[key]):[]
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collection=>collection? collection[collectionUrlParam]:null
  );
  export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
  );
  export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collection
  );