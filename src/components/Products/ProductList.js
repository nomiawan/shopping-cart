import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../../Helpers/FormatPrice";

const ProductList = ({ id, name, image, price }) => {
    return (
        <NavLink to={`/view-product/${id}`}>
            <div className="card">
                <figure>
                    <img src={image} alt={name} />
                </figure>
                <div className="card-data">
                    <div className="card-data-flex">
                        <h3>{name}</h3>
                        <p className="card-data--price">{<FormatPrice price={price} />}</p>
                    </div>
                </div>
            </div>
        </NavLink>
    );
};

export default ProductList;
