import React from "react";
import PropsDrillingChild2 from "./PropDrillingChild2";

const PropsDrillingChild1 = ({ data1}) => {
    return(
        <div>
            <h1>Props Drilling Child1</h1>
            <PropsDrillingChild2 data1={data1}/>
        </div>
        
    );
};
export default PropsDrillingChild1;