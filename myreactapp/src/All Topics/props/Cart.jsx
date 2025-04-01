import { useState } from "react";
import Nav from "./Nav";

const Cart = () => {
    let [items,seItems] = useState(0);

    let addItems = () => seItems(items+1);
    return (
        <div>
            <Nav props={items}/>
            <h1>Cart component </h1>
            <button onClick={addItems}>add to cart</button>
        </div>
    );
};

export default Cart;