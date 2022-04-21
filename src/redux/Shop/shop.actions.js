import { ShopActionTypes } from "./shop.actiontypes";


export const addToCart = (items) => {
    return {
      type: "ADD_TO_CART",
      payload: items,
    };
  };

export const getShopData = (shop) => {
    return {
        type: ShopActionTypes.GET_SHOP_DATA,
        payload: shop.data
    }
}