import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import Home from './Home';

import Login from './Login';


function App() {

  const [hideLogin, setHideLogin] = useState(false)
  let history = useHistory()

  

  hideLogin ? history.push('/home') : history.push('/login')

    return (<>
      
      <Route exact path="/login">
        <Login handleClick={setHideLogin} />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      
      
    </>
      
    );
  }

  export default App;