import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Search from './component/search'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/loan" component={App} />
      <Route exact path="/search" component={Search} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

