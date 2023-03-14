import { combineReducers } from "redux";
import { productReducer, selectedReducer } from "./reducers";

export const rootReducers = combineReducers({
  allProducts: productReducer,
  selectedProduct: selectedReducer,
});
