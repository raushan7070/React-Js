//named export
function add(n1,n2){
    return n1+n2;
}

function subtract(n1,n2){
    return n1-n2;
}

function useState(val){
    return[val,() => {}];
}

export{add,subtract,useState};
//default export

function multiply(n1,n2){
    return n1*n2;
}

export default multiply;