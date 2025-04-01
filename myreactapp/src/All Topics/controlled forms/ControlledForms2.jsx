import React, { useState } from 'react'

const ControlledForms2 = () => {
    let [userData,setUserData] = useState({
      username:"",
      email:"",
      password:"",
    });
    

    function handleUsername(e) {
      console.log(e);
      setUsername(e.target.value);
    }
    function handleEmail(e){
      //console.log(e);
      setEmail(e.target.value);
    }
    function handlePassword(e){
      //console.log(e);
      setPassword(e.target.value);
    }

    
    function handleChange(e){
        let {name,value} = e.target;
        setUserData({...userData,[name]:value});
    }
    function formSubmit(e) {
        e.preventDefault();
        console.log(userData);

        setUserData({
          username:"",
          email:"",
          password:"",
        });
    }
  return (
    <div>
      <h1>Controlled Forms 2</h1>
       <br />
      <form onSubmit={formSubmit}>
        <lebel>Username</lebel>
        <input
        type="text"
        name="username"
        value={userData.username}
        onChange={handleChange}
        />

        <br /> <br />
        <lebel>Email</lebel>
        <input type="email"
         name="email"
          value={userData.email} 
          onChange={handleChange} />

        <br /> <br />
        <label>Password</label>
        <input type="password" 
         name="password" 
         value={userData.password } 
         onChange={handleChange}/>

        <br /><br />
        <button type="submit">submit</button>


      </form>
    </div>
  )
}

export default ControlledForms2;
