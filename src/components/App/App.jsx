import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

//import components
import Feeling from './Feeling/Feeling';
import Understanding from './Understanding/Understanding';
import Support from './Support/Support';
import Comment from './Comment/Comment';
import Review from './Review/Review';
import Success from './Success/Success';
import Admin from './Admin/Admin';

function App() {
  
  //add exact paths to components
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
        </header>
        <Route exact path= "/">
          <Feeling />
        </Route>
        <Route exact path="/understanding">
          <Understanding />
        </Route>
        <Route  exact path="/support">
          <Support />
        </Route>
        <Route exact path="/comment">
          <Comment />
        </Route>
        <Route exact path="/review">
          <Review />
        </Route>
        <Route exact path="/success">
          <Success />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
      </div>
    </Router>
  );
}

export default App;
