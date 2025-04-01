
import React, { useState,useMemo, useCallback } from 'react';

import Child from './Child'

const Parent = () => {
    console.log("parent");

    // function multiply(){
    //     console.log("multiply");
    //     return val *10;
        
    //}

    let [state,setState] = useState(0);
    let [val,setVal] = useState(5);

    let multiply = useMemo(()=> {
        console.log("multiply");
        return val * 10;
        
    },[val]);

    // memoized function return 
    let greet = useCallback(()=>{
        console.log("Welcome");
        
    },[])
    
  return (
    <div>
      <h1> Memo and Callback Parent {state} </h1>
      <button onClick={() => setState(state+1)}>Update</button>
      <h2> Multiplication{multiply} </h2>
      <button onClick={()=> setVal(val+5)}>Multiply</button>
      <Child greet={greet}/>
    </div>
  )
}

export default Parent
