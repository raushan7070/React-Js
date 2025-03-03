import { Fragment } from "react";
import{createRoot } from "react-dom/client" ;
import App from "./App";

let div = document.getElementById("root")

// createRoot(div).render(
//   <>
//     <h2>HEllo</h2>
//     <h1> Hii</h1>
//   </>

// );
// createRoot(div).render(
//     <Fragment>
//       <h2>HEllo</h2>
//       <h1> Hii</h1>
//     </Fragment>
  
//   );

//createRoot(div).render(App()); js rule call
createRoot(div).render(<App></App>);  //React rule call

  //! Fragments are used to wrap other elements as a parent element without creating an extra node
  //Way1-> <> </>
  //Way2-> <Fragment></Fragment>
