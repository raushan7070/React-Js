import React, { useState } from "react";
import PropsChild from "./PropsChild";
import PropsChild2 from "./PropsChild2";
import PropsChild3 from "./PropsChild3";

const PropsParent = () =>{
    let [state,setState] = useState("");
    let data1 = "Hello World";
    let data2 = [10,20,30];
    let data3 = { id:1, ename:"john"};
    let data4 = () => {
        console.log("Byee");
    };
    function getDataFromChild(val){
        console.log(val);
       setState(val);
    }
    return(
        <div>
            <h1>Props Parent Component {state}</h1>
            {/* <PropsChild prop1={{data1, data2, data3, data4 }}/>
            <PropsChild2 prop1={data1} prop2={data2} prop3={data3} prop4={data4}/> */}
            <PropsChild3 getDataFromChild={getDataFromChild}/>
        </div>
    );
};

export default PropsParent;