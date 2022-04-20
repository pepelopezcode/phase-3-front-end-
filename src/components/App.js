import React from 'react';
import { Route } from "react-router-dom";
import Home from './Home';

function App() {
    return (
      <Route path="/">
        <Home />
      </Route>
    );
  }

  export default App;