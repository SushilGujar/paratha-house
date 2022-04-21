export const addAnotherItem = (items, newItem) => {
  const existingCartItem = items.find((item) => item.id === newItem.id);

  if (existingCartItem) {
    return items.map((item) =>
      item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...items, { ...newItem, quantity: 1 }];
};

export const removeItem = (items, removedItem) => {
  const existingCartItem = items.find((item) => item.id === removedItem.id);

  if (existingCartItem.quantity === 1) {
    return items.filter((item) => item.id !== removedItem.id);
  }
  return items.map((item) =>
    item.id === removedItem.id ? { ...item, quantity: item.quantity - 1 } : item
  );
};
