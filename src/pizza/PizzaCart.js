import React, { useContext, useEffect, useState } from "react";
import PizzaNav from "./PizzaNav";

import { PizzaCartContext } from "../App";

const sizeOptions = [
  {
    label: "Medium",
    value: "M",
  },
  {
    label: "Large",
    value: "L",
  },
  {
    label: "Small",
    value: "S",
  },
];

const toppingsOptions = [
  {
    label: "Extra Cheese",
    value: "",
  },
  {
    label: "Corn",
    value: "",
  },
  {
    label: "",
    value: "",
  },
];

function PizzaCart() {
  let [delivered, setDelivered] = useState(false);
  const { cartState, cartDispatch } = useContext(PizzaCartContext);
  const [cart, setCart] = useState([]);
  const [prize, setPrize] = useState(0);

  const deleteFromCart = (e, index) => {
    e.preventDefault();
    console.log(cart[index]);
    cartDispatch({
      type: "DELETE",
      index: index,
    });
  };

  const showModal = (e) => {
    e.preventDefault();
    if (prize > 0) {
      setDelivered(true);
      setTimeout(() => {
        setDelivered(false);
      }, 3000);
    }
  };

  const handleChangeSize = (e, index) => {
    const size = e.target.value;
    cartDispatch({
      type: "UPDATE_SIZE",
      index: index,
      size,
    });
  };

  useEffect(() => {
    setCart([...cartState.products.links]);
    let prize = 0;
    for (let i in cartState.products.sizes) {
      if (cartState.products.sizes[i] == "S") {
        prize = prize + 100;
      } else if (cartState.products.sizes[i] == "M") {
        prize = prize + 200;
      } else {
        prize = prize + 300;
      }
    }
    setPrize(prize);
  }, [cartState]);
  return (
    <div className="pizza-cart">
      <div className="pizza-navbar">
        <PizzaNav />
      </div>
      <div className="pizza-cart-home">
        <div>
          <div>
            {cart ? (
              <div>
                {cart.map((item, index) => {
                  return (
                    <div className="product" key={index}>
                      <img src={item} alt="" />

                      <div className="select-size">
                        <p>Size :</p>
                        <select
                          value={cartState.products.sizes[index]}
                          onChange={(e) => handleChangeSize(e, index)}
                        >
                          {sizeOptions.map((option) => (
                            <option value={option.value}>{option.label}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <button
                          onClick={(e) => deleteFromCart(e, index)}
                          className="red-button"
                        >
                          Remove from cart
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div className="prize">
          <div className="prize-sec">
            <p>Subtotal</p>
            <p>${prize}</p>
          </div>
          <div className="prize-sec">
            <p>Discount</p>
            <p>${0}</p>
          </div>
          <div className="prize-sec">
            <p>Taxes and Charges</p>
            <p>${55.95}</p>
          </div>
          <div className="prize-sec">
            <h4>Grand Total</h4>
            <h4>${prize + 55.95}</h4>
          </div>
        </div>
        <div className="checkout-section">
          <button className="red-button" onClick={(e) => showModal(e)}>
            Deliver
          </button>
        </div>
      </div>
      {delivered ? (
        <div className="delivered-modal">...Booking Confirmed</div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default PizzaCart;
