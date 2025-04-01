import React from "react";

const InlineCss = () => {
    let headingCSS={
        backgroundColor:"red",
        color: "white",
    };
    return(
        <div>
            <h1 style={headingCSS}>InlineCss Example 1</h1>
            <h1 style={{backgroundColor:"black",
        color: "white"}}>InlineCss Example 2</h1>
        </div>
    );

};
export default InlineCss;