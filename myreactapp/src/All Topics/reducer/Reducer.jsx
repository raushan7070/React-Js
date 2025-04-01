import React ,{useReducer} from 'react'

    let initialState =0;
    let reducerFunction = (prevState,action) => {
        console.log("prev State was",prevState,action);
        
        switch (action){
            case "increment":
            return prevState + 1;
        }
    };

const Reducer = () => {
    let [state,dispatch] = useReducer(reducerFunction,initialState);
    console.log("new state",state);
    
    
  return (
    <div>
      <h1> Learn useReducer hook{state} </h1>
      <button onClick={()=> dispatch("increment")}>increment</button>
    </div>
  );
};

export default Reducer;
