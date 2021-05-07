import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Nav from './Components/Nav/Nav';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
