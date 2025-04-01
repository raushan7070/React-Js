import React from 'react'
import {Link, NavLink} from "react-router-dom";
import styles from "./navbar2.module.css";
const Navbar2 = () => {
  return (
    <nav>
      <li>
        <NavLink className={({ isActive }) =>(isActive ? styles.active : "")} to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) =>(isActive  ? styles.active : "")} to="/">Profile</NavLink>
      </li>
      <li>
      <NavLink className={({ isActive }) =>(isActive  ? styles.active : "")}to="/cart">Cart</NavLink>
      </li>
      <hr/>
    </nav>
  )
}

export default Navbar2
