import "./App.css";
import { createContext, useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WeatherHome from "./weather/WeatherHome";
import Navbar from "./Navbar";
import Pizza from "./pizza/Pizza";
import PizzaCart from "./pizza/PizzaCart";

import { initialState, productReducer } from "./Reducer";

const PizzaCartContext = createContext();

function App() {
  const [cartState, dispatch] = useReducer(productReducer, initialState);

  return (
    <PizzaCartContext.Provider
      value={{ cartState: cartState, cartDispatch: dispatch }}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<WeatherHome />} />
          <Route path="/pizza" element={<Pizza />} />
          <Route path="/pizza-cart" element={<PizzaCart />} />
        </Routes>
      </Router>
    </PizzaCartContext.Provider>
  );
}

export default App;

export { PizzaCartContext };
