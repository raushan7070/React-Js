import { useState } from "react";

const CounterInFbc = () => {

    let [count, setCount] = useState(0)
    
    let increment = () =>{
        setCount(count+1);
    };
    let decrement = () =>{
        setCount(count-1);
    };

    let [cart,setCart] = useState("Add to cart");
       

    let updateCartBtn =()=>{
        setCart("goto cart");
    }


    return (
        <div>
        <h1> Counter {count}</h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>

        <button onClick={updateCartBtn}>{cart}</button>

        </div>
    );
};
export default CounterInFbc;
