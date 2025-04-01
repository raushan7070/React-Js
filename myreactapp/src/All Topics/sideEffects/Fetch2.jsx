import React ,{useEffect} from 'react'
import axios from "axios";

const Fetch2 = () => {

    useEffect(()=>{
        async function getUsers() {
            let {data:{users}} = axios.get("https://fakestoreapi.com/docs#tag/Users");
            console.log(users);
            
        }
        getUsers();

    },[]);
  return (
    <div>
      <h1> Learn axios</h1>
    </div>
  )
}

export default Fetch2;
