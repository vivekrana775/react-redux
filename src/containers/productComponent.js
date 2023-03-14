import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { selectedProducts } from "../redux/actions/action";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const selectedItem = useSelector((state) => state.selectedProduct);
  const dispatch = useDispatch();

  const renderList = products.map((product) => {
    return (
      <div key={product.id}>
        <Link
          onClick={() => dispatch(selectedProducts(product))}
          to={`/product/${selectedItem.id}`}
        >
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={product.image} alt="" />
              </div>
              <div className="context">
                <div className="header">{product.title}</div>
                <div className="meta price"> ${product.price}</div>
                <div className="meta">{product.category}</div>
              </div>
            </div>
          </div>
          <button>GO</button>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
