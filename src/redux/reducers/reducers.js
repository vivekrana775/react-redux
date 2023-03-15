import { ActionTypes } from "../contants/action-types";
const initalState = {
  products: [],
  items_in_cart: [],
  total_price: 0,
  count: 0,
};

export const productReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
      break;
    case ActionTypes.Add_Item:
      return {
        ...state,
        total_price: state.total_price + payload,
        count: state.items_in_cart.length + 1,
      };
      break;

    case ActionTypes.Add_Item_To_Cart:
      // console.log(state.items_in_cart);
      return { ...state, items_in_cart: [...state.items_in_cart, payload] };
      break;
    case ActionTypes.Delete_Items_From_Cart:
      // console.log(state.items_in_cart);
      return {
        ...state,
        items_in_cart: payload,
        count: state.items_in_cart.length - 1,
      };
      break;
    case ActionTypes.REDUCE_PRICE:
      return { ...state, total_price: state.total_price - payload.price };

    default:
      return state;
      break;
  }
};

export const selectedReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    default:
      return state;
      break;
  }
};
