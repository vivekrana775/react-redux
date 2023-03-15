import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ProductComponent from "./productComponent";
import { setProducts } from "../redux/actions/action";
import Cart from "./cart";
import { Link } from "react-router-dom";
const ProductListing = () => {
  const total_price = useSelector((state) => state.allProducts.total_price);
  const count = useSelector((state) => state.allProducts.count);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });

    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="ui grid container">
      <h1 className="total_Price">Total price is {total_price}</h1>

      <Link to={`product/:Id/${total_price}`}>
        <img
          className="cart_img"
          src="https://i.pinimg.com/originals/25/43/d6/2543d694cf62a4cd1c038f3215fa28be.jpg"
          alt=""
        />
      </Link>

      <h1>Your Cart has {count >= 0 ? count : 0} Items</h1>

      <ProductComponent />
    </div>
  );
};

export default ProductListing;
