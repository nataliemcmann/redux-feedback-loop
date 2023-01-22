import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';

//import components
import Feeling from './Feeling/Feeling';
import Understanding from './Understanding/Understanding';
import Support from './Support/Support';
import Comment from './Comment/Comment';
import Review from './Review/Review';
import Success from './Success/Success';
import Admin from './Admin/Admin';

//import MUI components
import { createTheme } from '@mui/material/styles';

function App() {
  //create global theme to fix CardAction alignment
  const theme = createTheme({
    components: {
      // Name of the component
    MuiCardActions: {
    styleOverrides: {
        // Name of the slot
        root: {
        // Some CSS
        display: 'flex',
        justifyContent: 'center',
        },
    },
    },
},
});

  const [progress, setProgress] = useState(0);
  
  //add exact paths to components
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
        </header>
        <Route exact path= "/">
          <Feeling 
            theme={theme} 
            progress={progress} 
            setProgress={setProgress}
          />
        </Route>
        <Route exact path="/understanding">
          <Understanding 
            theme={theme} 
            progress={progress} 
            setProgress={setProgress}
          />
        </Route>
        <Route  exact path="/support">
          <Support 
            theme={theme} 
            progress={progress} 
            setProgress={setProgress}
          />
        </Route>
        <Route exact path="/comment">
          <Comment 
            theme={theme}
            progress={progress} 
            setProgress={setProgress}
          />
        </Route>
        <Route exact path="/review">
          <Review theme={theme}/>
        </Route>
        <Route exact path="/success">
          <Success theme={theme}/>
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
      </div>
    </Router>
  );
}

export default App;
