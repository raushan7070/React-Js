import  { useContext } from 'react'
import {myContext} from "./Parent";

const Child2 = () => {
  //step 3
  let data1 = useContext(myContext);
  console.log(data1);
  let data2 = useContext(myContext);
  console.log(data2);
  
  return (
    <div>
      <h1> Child2 Component</h1>
      <h2>{data1}</h2>
    </div>
  )
}

export default Child2
