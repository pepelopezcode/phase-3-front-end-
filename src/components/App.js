import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import Home from './Home';

import Login from './Login';


function App() {

  const [hideLogin, setHideLogin] = useState(false)
  let history = useHistory()
  const [currentUser, setCurrentUser] = useState(null)
  

  hideLogin ? history.push('/home') : history.push('/login')

    return (<>
      
      <Route exact path="/login">
        <Login handleClick={setHideLogin} setCurrentUser={setCurrentUser} />
      </Route>
      <Route path="/home">
        <Home currentUser={currentUser} />
      </Route>
      
      
    </>
      
    );
  }

  export default App;