import { combineReducers } from 'redux';
import cartReducer from './cart/cart.reducer';
import userReducer from './user/user.reducer';
import directoryReducer from './directory/directory.reducer';
import shopDataRecducer from './shop/shop.reducer';

import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const rootReducer= combineReducers({
  user: userReducer,
  cart:cartReducer,
  directory:directoryReducer,
  shopData:shopDataRecducer
}); 

export default persistReducer(persistConfig,rootReducer);