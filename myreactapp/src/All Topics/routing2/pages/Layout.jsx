import React from "react"
import {Outlet} from "react-router-dom";
import Navbar2 from "../Navbar2";


const Layout = () => {
  return (
    <div>
      <Navbar2/>
      <Outlet/>
        {/* It is used to render children routes on Ui */}

    </div>
  )
}

export default Layout;
