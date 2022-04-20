import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';

import Login from './Login';


function App() {
    return (<><Router>
      <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/home">
        <Home />
      </Route></Switch></Router>
      
      
    </>
      
    );
  }

  export default App;