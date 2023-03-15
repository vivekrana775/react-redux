import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Delete_Items_From_Cart, REDUCE_PRICE } from "../redux/actions/action";

const Cart = () => {
  const dispatch = useDispatch();
  const cart_arr = useSelector((state) => state.allProducts.items_in_cart);
  //   console.log(cart_arr);
  const items_in_cart = useSelector((state) => state.allProducts.items_in_cart);

  let cart_obj = new Map();
  for (let i of cart_arr) {
    if (!cart_obj.get(i)) cart_obj.set(i, 0);
    cart_obj.set(i, cart_obj.get(i) + 1);
  }

  let cart_arrr = [];
  for (const [key, value] of cart_obj.entries()) {
    cart_arrr.push([key, value]);
  }

  const reduce_the_price_and_delete_from_list = (selectedItem) => {
    let if_deleted = false;
    const delete_from_item_list = (selectedItem) => {
      const new_list = [];

      let count = 0;

      for (let i of items_in_cart) {
        if (count === 0 && i.id === selectedItem.id) {
          count += 1;
          if_deleted = true;
          continue;
        }
        new_list.push(i);
      }
      //   console.log(new_list);

      return new_list;
    };
    dispatch(Delete_Items_From_Cart(delete_from_item_list(selectedItem)));
    if (if_deleted == true) {
      dispatch(REDUCE_PRICE(selectedItem));
    }
  };
  if (items_in_cart.length == 0) {
    return (
      <>
        <br />
        <br />
        <h1>There is No Item in Your Cart ! PLease add items into Cart</h1>
      </>
    );
  }

  const render_list = cart_arrr.map((product) => {
    return (
      <div key={product[0].id}>
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img src={product[0].image} alt="" />
            </div>
            <div className="context">
              <div className="header">{product[0].title}</div>
              <div className="meta price"> ${product[0].price}</div>
              <div className="meta">{product[0].category}</div>
            </div>
          </div>
        </div>
        <button
          className="reduce_item_by_1"
          onClick={() => {
            reduce_the_price_and_delete_from_list(product[0]);
          }}
        >
          Reduce Item By 1
        </button>
        <h1 className="items_value">These are {product[1]} in your cart</h1>
      </div>
    );
  });

  return (
    <>
      {render_list}
      <Link to={"/"}>Back</Link>
    </>
  );
};

export default Cart;
