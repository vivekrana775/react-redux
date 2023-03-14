import { ActionTypes } from "../contants/action-types";
const initalState = {
  products: [],
};

export const productReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
      break;

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
