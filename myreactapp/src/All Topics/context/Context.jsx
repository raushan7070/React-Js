import {createContext} from 'react';

export let GlobalContext = createContext();


const Context = (x) => {
    console.log(x); //{children :{$type:..}}

    let data = [10,20,30,40];
    
  return (
    <GlobalContext.Provider value={data}>
        {x.children}
        </GlobalContext.Provider>
  );
};


export default Context
