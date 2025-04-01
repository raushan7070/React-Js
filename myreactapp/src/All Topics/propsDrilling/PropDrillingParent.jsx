import React from "react";
import PropsDrillingChild1 from "./PropDrillingChild1";

const PropsDrillingParent = () => {
    let data1 = "Hello Child2"
    return(
        <div>
        <h1>PropsDrilling Parent</h1>

        <PropsDrillingChild1 data1={data1}/>
        </div>
    );
};

export default PropsDrillingParent;