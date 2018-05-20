import React from 'react';
import Helmet from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

import config from '../config';
// Global styles
import 'normalize.css/normalize.css'; // eslint-disable-line import/first
import './../theme/styles.scss';

const App = () => (
  <div className="App">
    <Helmet {...config.app} />
    <div className="header">
      <img src={require('./assets/logo.svg')} alt="Logo" role="presentation" />
      <h1>{config.app.title}</h1>
    </div>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="*" component={NotFound} />
    </Switch>
  </div>
);

export default App;
