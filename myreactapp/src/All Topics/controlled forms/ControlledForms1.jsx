import React, { useState } from 'react'

const ControlledForms1 = () => {

    let [Username,setUsername] = useState("");
    let [email,setEmail] = useState("");
    let [password,setPassword] = useState("");

    function handleUsername (e) {
        setUsername(e.target.value);
    }
    function handleEmail (e) {
        setEmail(e.target.value);
    }
    function handlePassword (e) {
        setPassword(e.target.value);
    }
    function formSubmit (e) {
        e.preventDefault();
        console.log("Form Submitted");
        let user = {
            Username,
            email,
            password,
        };
        console.log(user);

        // Clearing input field
        setUsername("");
        setEmail("");
        setPassword("");
    }
  return (
    <div>
      <h1>Controlled Forms 1</h1>
      <form onSubmit={formSubmit}>
        <label>Username : </label>
        <input type="text" value={Username} onChange={handleUsername}/>

        <br />

        <label>Email : </label>
        <input type="email" value={email} onChange={handleEmail}/>

        <br />

        <label>Password : </label>
        <input type="password" value={password} onChange={handlePassword} />

        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ControlledForms1;
