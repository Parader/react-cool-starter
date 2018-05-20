import React from 'react';
import Helmet from 'react-helmet';
import { hot } from 'react-hot-loader';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

import config from '../config';
// Global styles
// import 'normalize.css/normalize.css'; // eslint-disable-line import/first
// import '../theme/styles.scss';

const App = () => (
  <div className="App">
    <Helmet {...config.app} />
    <div className="Header">
      <img src={require('./assets/logo.svg')} alt="Logo" role="presentation" />
      <h1>{config.app.title}</h1>
    </div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default hot(module)(App);
