import { useState } from "react";

const StatesInFbc = () => {
  //console.log(useState());
  let [state,setState] =useState("Hello");
  console.log(state);

  function changeData(){
    setState("Byee");
  }
    return (
        <div>
            <h1>Learn States in FBC    </h1>
            <h2>{state}</h2>
            <button onClick={changeData}>Click me</button>
        </div>
    );
};
export default StatesInFbc;