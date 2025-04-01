import {useRef} from 'react'

const UncontrolledForms = () => {

    //console.log(useRef()); //{current: undefined}
    let emailRef =useRef();
    let passwordRef=useRef();

    function formSubmit(e) {
        e.preventDefault();  
        console.log("form submited");
        
       if(
        emailRef.current.value.trim() !== "" &&
        passwordRef.current.value.trim() !== "" 
    )
    {
        let user = {
            email :emailRef.current.value,
            password : passwordRef.current.value,
        };
        console.log(user);
    }else{
        alert
    }
        

        emailRef.current.value = "";    
        passwordRef.current.value = "";
    }
    
  return (
    <div>
      <h1> Uncontrolled Forms </h1>
      <form onSubmit={formSubmit}>
        <lebel>Email: </lebel>
        <input type="email" ref={emailRef}/>

        <br />
        <br />

        <lebel>Password</lebel>
        <input type="password" ref={passwordRef}/>

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default UncontrolledForms;
