import CartActionTypes from'../ActionTypes/cart.action.types';
import { addAnotherItem, removeItem } from '../../Utils/cart.utils';

const INITIAL_STATE = {
    hidden: true,
    items: []
};

const cartReducer = (state= INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                items: addAnotherItem(state.items, action.payload)  
            }
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id)
            }
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                items: removeItem(state.items, action.payload)
            }
        case CartActionTypes.EMPTY:
            return {
                ...state,
                items: []
            };
        default:
        return state;
    }
}

export default cartReducer;