import React from 'react';

import './App.css';
import Register from './components/register';
import Login from './components/login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
function App() {
  return (
    <div >
       <Router>
        <Route exact path="/" component={Register} />
        <Route exact path="/login" component={Login} />
       </Router>
    </div>
  );
}

export default App;
