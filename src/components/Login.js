import React, {useState} from "react";


function Login({handleClick}){

  const [userName, setUserName] = useState('')
  

  function postUser(){

  
    fetch('http://localhost:9292/users',{
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({'name': userName})
    })
    
    

    

  }

  

  return (
      <div>
        <form onSubmit={e =>{
          e.preventDefault();
          postUser()
          handleClick(true)} } >
          <label>User Name:
            <input
            type="text"
            placeholder="Insert desired name"
            onChange={e => setUserName(e.target.value)}
            />
          </label>
          <label>
            <input type="submit" />
          </label>
            </form>
            <link to="/home" />
        </div>
    )
}


export default Login;