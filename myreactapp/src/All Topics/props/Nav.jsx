import React from "react";

const Nav = (x) => {
    console.log(x); // {props:0}
    return(
        <div>
            <li>
            cart<sup>{x.props}</sup>
            </li>
        </div>
    );
};
export default Nav;