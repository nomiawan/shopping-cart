import React, { useState } from "react";
import { ProductsData } from "../data/Products";
import { NavLink } from "react-router-dom";
import FormatPrice from "../../Helpers/FormatPrice";
import { Button } from "../../styles/Button";
import ProductList from "./ProductList";
import { Wrapper } from "./ProductStyle";

const Products = () => {

  // Load the products
  const [productData] = useState(ProductsData)

  return (
    <Wrapper className="section">
      <div className="container product-heading">
        <h2>Product Listing</h2>
      </div>
      <div className="container grid grid-three-columns">
        {productData.length > 0 ? (
          productData.map((curElem) => {
            return (
              <div className="grid-three-columns" key={curElem.id}>
                <ProductList {...curElem} />
              </div>
            );
          })
        ) : (
          <div className="m-auto">
            <p>No Product Found</p>
          </div>
        )}
      </div>
    </Wrapper>
  )
}

export default Products