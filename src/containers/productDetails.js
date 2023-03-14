import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const ProductDetails = () => {
  const selectedItem = useSelector((state) => state.selectedProduct);

  return (
    <div>
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
      <Link to={"/"}>Back</Link>
    </div>
  );
};

export default ProductDetails;
