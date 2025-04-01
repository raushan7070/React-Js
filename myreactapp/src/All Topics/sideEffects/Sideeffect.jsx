import React, { useEffect, useState } from 'react'

const Sideeffect = () => {
    let [state,setState] = useState(0);

    useEffect(() => {
        console.log("welcome");
        },[]);

    useEffect (()=>{
        console.log("state updated");
        
    },[state]);


    useEffect(()=>{
        return()=>{   //clen up function
        console.log("Bye");
        }; 
    },[]);
  return ( 
    <div>
      <h1> Learn useEffect {state}</h1>
      <button onClick={()=>setState(state+1)}>updated</button>
    </div>
  )
}

export default Sideeffect;

