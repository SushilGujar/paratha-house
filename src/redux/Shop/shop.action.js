export const addToCart = (items) => {
  return {
    type: "ADD_TO_CART",
    payload: items,
  };
};
