import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Add_Item, Add_Item_To_Cart } from "../redux/actions/action";

import { Link } from "react-router-dom";
import Cart from "./cart";
import {
  Delete_Items_From_Cart,
  REDUCE_PRICE,
} from "./../redux/actions/action";

const ProductDetails = () => {
  const selectedItem = useSelector((state) => state.selectedProduct);
  const total_price = useSelector((state) => state.allProducts.total_price);
  const items_in_cart = useSelector((state) => state.allProducts.items_in_cart);
  const count = useSelector((state) => state.allProducts.count);
  const dispatch = useDispatch();
  const my_function = (x, y) => {
    dispatch(Add_Item(x));
    dispatch(Add_Item_To_Cart(y));
  };
  const reduce_the_price_and_delete_from_list = (selectedItem) => {
    let if_deleted = false;
    const delete_from_item_list = (selectedItem) => {
      const new_list = [];

      let count = 0;

      for (let i of items_in_cart) {
        if (count === 0 && i.id === selectedItem.id) {
          if_deleted = true;
          count += 1;
          continue;
        }
        new_list.push(i);
      }
      console.log(new_list);

      return new_list;
    };
    dispatch(Delete_Items_From_Cart(delete_from_item_list(selectedItem)));

    if (if_deleted == true) {
      dispatch(REDUCE_PRICE(selectedItem));
    }
  };

  return (
    <div>
      <h1 className="total_price_details">Total Price {total_price}</h1>
      <div className="ui link cards">
        <div className="card">
          <div className="image">
            <img src={selectedItem.image} alt="" />
          </div>
          <div className="context">
            <div className="header">{selectedItem.title}</div>
            <div className="meta price"> ${selectedItem.price}</div>
            <div className="meta">{selectedItem.category}</div>
          </div>
        </div>
      </div>
      <div>
        <h1> {count} items</h1>
        <button
          onClick={() => {
            my_function(selectedItem.price, selectedItem);
          }}
        >
          Add to Cart
        </button>
        <button
          onClick={() => {
            reduce_the_price_and_delete_from_list(selectedItem);
          }}
        >
          Reduce Item By 1
        </button>
      </div>

      <Link to={"/"}>Back</Link>
    </div>
  );
};

export default ProductDetails;
