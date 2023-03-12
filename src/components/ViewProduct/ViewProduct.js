import React from "react"
import { useParams } from "react-router-dom"
import { ProductsData } from "../data/Products"
import { useEffect } from "react";
import { Container } from "../../styles/Container";
import FormatPrice from "../../Helpers/FormatPrice";
import AddToCart from "../AddToCart/AddToCart";
import { Wrapper } from "./ViewProductStyle";

const ViewProduct = () => {
  const { id } = useParams()
  // To get the single product
  const singleProduct = ProductsData.find((item) => item.id == id)
  const { name, image, price } = singleProduct
  return (
    <Wrapper>
      <Container className="container">
        <div className="view-product-listing">
          <h2>View Product Listing</h2>
        </div>
        <div className="grid grid-two-columns">
          <div className="product_images">
            <figure>
              <img src={image} alt={name} />
            </figure>
          </div>

          <div className="product-data">
            <h2>{name}</h2>

            <p className="product-data-price product-data-real-price">
              Price of the product: <FormatPrice price={price} />
            </p>
            <hr />
            <AddToCart product={singleProduct} />
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}

export default ViewProduct