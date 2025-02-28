import React from "react";
import "./Card.css"
import AddToCart from "../AddToCard/AddToCart";
import"../AddToCard/AddToCart.css";

const Card = (props) => {
  return (
    <div id={props.category} className="card">
      <img src={props.img} alt="" />
      <div className="card-content">
        <h6>{props.title}</h6>
        <p>{props.description}</p>
      </div>
      <div className="card-footer">
        <div className="price">
          {props.new ? (
            <div className="price-container">
              <span className="old-price">${props.price}</span>
              <span className="new-price">${props.new}</span>
            </div>
          ) : (
            <span>${props.price}</span>
          )}
        </div>
        <AddToCart
          item={props.item}
          cart={props.cart}
          setCart={props.setCart}
          setWarning={props.setWarning}
        />
      </div>
    </div>
  );
};

export default Card;
