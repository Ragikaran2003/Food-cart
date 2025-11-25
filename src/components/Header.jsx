import React, { useContext } from "react";
import { Link } from "react-router-dom";
import '../css/Header.css'
import { cartContext } from "../context/cartContext";
const Header = () => {
  const {cart} = useContext(cartContext);
  return (
    <div className="navbar">
      <div className="logo">Food Cart</div>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/cart"}><span className="cart-count">{cart.length}</span> View Cart</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
