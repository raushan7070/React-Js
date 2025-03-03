//named import
import { add as addition,subtract, useState } from "./function.js";
//default import
import multiply from "./function.js";
// let result =add(10,20);
// console.log(result);

let result1 =addition(10,20);
console.log(result1);//30

let result2 =subtract(50,20);//30
console.log(result2);

let [state,setState] =useState(10);
console.log(state);//10
console.log(setState);

let mul=multiply(4,3)
console.log(mul);//12