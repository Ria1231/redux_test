import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { createStore, applyMiddelWare } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { fetchBooks } from './actions/book.actions.js';

const store  = createStore(rootReducer,applyMiddelWare(thunk));
store.dispatch(fetchBooks());


export const history = createBrowserHistory({forceRefresh:true});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
  <Router>
    <App />
  </Router>
  </Provider>
    
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
