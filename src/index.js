import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
//import REDUX
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//make reducers
const feeling = (state = 0, action) => {
    if (action.type === 'SET_FEELING') {
        return state + action.payload;
    }
    return state;
}

const understanding = (state = 0, action) => {
    if (action.type === 'SET_UNDERSTANDING') {
        return state + action.payload;
    }
    return state;
}

const support = (state = 0, action) => {
    if (action.type === 'SET_SUPPORT') {
        return state + action.payload;
    }
    return state;
}

const comments = (state = [], action) => {
    if (action.type === 'SET_COMMENT') {
        return [action.payload];
    }
    return state;
}

//make the store
const reduxStore = createStore(combineReducers({

}), applyMiddleware(logger));

//wrap App in boilerplate
ReactDOM.render(
    <React.StrictMode>
        <Provider store={reduxStore}>
            <App />, 
        </Provider>
    </React.StrictMode>
, document.getElementById('root'));
registerServiceWorker();
