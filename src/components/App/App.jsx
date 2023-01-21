import React from 'react';
import axios from 'axios';
import './App.css';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, HashRouter } from 'react-router-dom';

//import components
import Feeling from './Feeling/Feeling';
import Understanding from './Understanding/Understanding';
import Support from './Support/Support';

function App() {
  //declare dispatch object
  const dispatch = useDispatch();

  //declare useEffect();

  //
  
  //add exact paths to components
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
        </header>
        <Route exact path= "/feeling">
          <Feeling />
        </Route>
        <Route exact path="/understanding">
          <Understanding />
        </Route>
        <Route  exact path="/support">
          <Support />
        </Route>
      </div>
    </Router>
  );
}

export default App;
