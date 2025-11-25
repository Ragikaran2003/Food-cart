import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import ViewCart from "./components/ViewCart";
import {  useState } from "react";
import { cartContext } from "./context/cartContext";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <cartContext.Provider value={{cart,setCart}}>
        <Header/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/cart"
              element={<ViewCart/>}
            />
          </Routes>
        </div>
      </cartContext.Provider>
    </>
  );
}

export default App;
