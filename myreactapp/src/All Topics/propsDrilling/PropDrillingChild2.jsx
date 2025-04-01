import React from "react";

const PropsDrillingChild2 = ({data1}) => {
    console.log(data1); // Hello Child2
    return(
        <div>
            <h1>Props Drilling Child2{data1}</h1>
        </div>
    );
};
export default PropsDrillingChild2;