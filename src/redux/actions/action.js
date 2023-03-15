import { ActionTypes } from "../contants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProducts = (products) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: products,
  };
};

export const Add_Item = (price, product) => {
  return {
    type: ActionTypes.Add_Item,
    payload: price,
    product: product,
  };
};
export const Add_Item_To_Cart = (product) => {
  return {
    type: ActionTypes.Add_Item_To_Cart,
    payload: product,
  };
};
export const Delete_Items_From_Cart = (product) => {
  return {
    type: ActionTypes.Delete_Items_From_Cart,
    payload: product,
  };
};
export const REDUCE_PRICE = (product) => {
  return {
    type: ActionTypes.REDUCE_PRICE,
    payload: product,
  };
};
