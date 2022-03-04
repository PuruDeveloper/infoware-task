import React, { useContext } from "react";
import "./Pizza.css";
import PizzaNav from "./PizzaNav";

import { PizzaCartContext } from "../App";

function Pizza() {
  const { cartState, cartDispatch } = useContext(PizzaCartContext);

  const addPizzaToCart = (e, link) => {
    e.preventDefault();
    cartDispatch({
      type: "ADD",
      link: link,
      size: "M",
    });
  };
  return (
    <div className="pizza">
      <div className="pizza-navbar">
        <PizzaNav />
      </div>
      <div className="pizza-home">
        <h2 className="secondary-blue">Best Pizza Restaurants</h2>
        <div className="explore">
          <h3>Explore Menu</h3>
          <div className="explore-links">
            <a href="#">
              <img src="https://dominos.co.in/store-locations/img/12c16582-96eb-486c-a258-2a315b4e2ae1/veg-pizza.webp" />
              <p>Veg Pizza</p>
            </a>
            <a href="#">
              <img src="https://dominos.co.in/store-locations/img/b01bf8b9-ff16-4aeb-a4e0-9c6c5a3a66d7/pizza-mania.webp" />
              <p>Pizza Mania</p>
            </a>
            <a href="#">
              <img src="https://dominos.co.in/store-locations/img/a8e2b946-f840-4627-8863-ed51c0225006/sides.webp" />
              <p>Sides</p>
            </a>
            <a href="#">
              <img src="https://dominos.co.in/store-locations/img/bab53662-7fdf-4fc5-aded-e666e51cfdd8/non-veg-pizza.webp" />
              <p>Non-Veg Pizza</p>
            </a>
            <a href="#">
              <img src="https://dominos.co.in/store-locations/img/92b74f91-84fd-4e6e-9dba-4a6df1a4ff9d/beverages.webp" />
              <p>Beverages</p>
            </a>
            <a href="#">
              <img src="https://dominos.co.in/store-locations/img/ae9c5473-f895-4cd6-bb8b-c7988f597084/desserts.webp" />
              <p>Desserts</p>
            </a>
          </div>
          <div className="products">
            <div className="product">
              <img src="https://dominos.co.in/store-locations/img/12c16582-96eb-486c-a258-2a315b4e2ae1/veg-pizza.webp" />
              <div>
                <button
                  onClick={(e) =>
                    addPizzaToCart(
                      e,
                      "https://dominos.co.in/store-locations/img/12c16582-96eb-486c-a258-2a315b4e2ae1/veg-pizza.webp"
                    )
                  }
                  className="red-button"
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="product">
              <img src="https://dominos.co.in/store-locations/img/b01bf8b9-ff16-4aeb-a4e0-9c6c5a3a66d7/pizza-mania.webp" />
              <div>
                <button
                  onClick={(e) =>
                    addPizzaToCart(
                      e,
                      "https://dominos.co.in/store-locations/img/b01bf8b9-ff16-4aeb-a4e0-9c6c5a3a66d7/pizza-mania.webp"
                    )
                  }
                  className="red-button"
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="product">
              <img src="https://dominos.co.in/store-locations/img/a8e2b946-f840-4627-8863-ed51c0225006/sides.webp" />
              <div>
                <button
                  onClick={(e) =>
                    addPizzaToCart(
                      e,
                      "https://dominos.co.in/store-locations/img/a8e2b946-f840-4627-8863-ed51c0225006/sides.webp"
                    )
                  }
                  className="red-button"
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="product">
              <img src="https://dominos.co.in/store-locations/img/bab53662-7fdf-4fc5-aded-e666e51cfdd8/non-veg-pizza.webp" />
              <div>
                <button
                  onClick={(e) =>
                    addPizzaToCart(
                      e,
                      "https://dominos.co.in/store-locations/img/bab53662-7fdf-4fc5-aded-e666e51cfdd8/non-veg-pizza.webp"
                    )
                  }
                  className="red-button"
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="product">
              <img src="https://dominos.co.in/store-locations/img/92b74f91-84fd-4e6e-9dba-4a6df1a4ff9d/beverages.webp" />
              <div>
                <button
                  onClick={(e) =>
                    addPizzaToCart(
                      e,
                      "https://dominos.co.in/store-locations/img/92b74f91-84fd-4e6e-9dba-4a6df1a4ff9d/beverages.webp"
                    )
                  }
                  className="red-button"
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="product">
              <img src="https://dominos.co.in/store-locations/img/ae9c5473-f895-4cd6-bb8b-c7988f597084/desserts.webp" />
              <div>
                <button
                  onClick={(e) =>
                    addPizzaToCart(
                      e,
                      "https://dominos.co.in/store-locations/img/ae9c5473-f895-4cd6-bb8b-c7988f597084/desserts.webp"
                    )
                  }
                  className="red-button"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pizza;
