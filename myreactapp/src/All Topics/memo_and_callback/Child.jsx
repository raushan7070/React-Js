import React from 'react';
import {memo} from "react"

const Child = ({greet}) => {
    console.log("child");
    
  return (
    <div>
      <h1> Memo and Callback Child</h1>
    </div>
  )
}

export default memo(Child) ;
// The component to 
