import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Book from './Book';
import Done from './Done';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <React.Fragment>
      <Route path="/" exact component={App} />
      <Route path="/book/" component={Book} />
      <Route path="/done/" component={Done} />
    </React.Fragment>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
