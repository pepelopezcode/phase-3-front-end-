import React, {useState, useEffect} from "react";


function Login({handleClick, setCurrentUser}){

  const [userName, setUserName] = useState('')
  const [userList, setUserList] = useState(null)
  // const [currentUser, setCurrentUser] = useState(null)


  useEffect(() => {
    fetch('http://localhost:9292/users')
      .then(resp => resp.json())
      .then(data => setUserList(data))
  },[])

  function postUser(){
    if(userList.find(x => x.name === userName) === undefined){
      fetch('http://localhost:9292/users',{
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({'name': userName})
    })
      .then(resp => resp.json())
      .then(data => setCurrentUser(data))
    }else {setCurrentUser(userList.find(x => x.name === userName))}
    }
    

  

  return (
      <div className="loginForm">
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
            <input type="submit" className="loginButton" />
          </label>
            </form>
            
        </div>
    )
}


export default Login;