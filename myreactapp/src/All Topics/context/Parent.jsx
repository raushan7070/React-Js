import {createContext} from 'react'
import Child1 from './Child1'

//step 1 :-> Create context
export let myContext =createContext();
const Parent = () => {

    //console.log(myContext); 
    // Context object -> {Provider: $$typeof:Symbol(react.context)}
   let data1 = "Hello world";
   let data2 = [10,20,30];
  return (
    <div>
      <h1> Parent Component</h1>
      {/* step 2 */}
      <myContext.Provider value={{data1,data2}}>
      <Child1/>
      </myContext.Provider>
      
    </div>
  )
}

export default Parent;
