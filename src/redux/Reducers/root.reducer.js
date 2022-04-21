import { combineReducers } from "redux";
import cartReducers from "../Cart/cart.reducers";
import userReducer from "../User/user.reducer";
import shopReducer from "../Shop/shop.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const SET_CURRENT_USER = "SET_CURRENT_USER";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

export default persistReducer(
  persistConfig,
  combineReducers({
    user: userReducer,
    cart: cartReducers,
    shop: shopReducer,
  })
);
