import React from "react";

const PropsChild2 =({prop1, prop2, prop3,prop4}) => {
    console.log(prop1);
    console.log(prop2);
    console.log(prop3);
    console.log(prop4);
    return(
        <div>
            <h1>Props Child2 Component</h1>
        </div>
    );
};
export default PropsChild2;