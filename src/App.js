import "./App.css";
import Header from "./containers/header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Component } from "react";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/productDetails";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductListing />} />
          <Route exact path="product/:Id" element={<ProductDetails />} />
          <Route>404 NOT FOUND!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
