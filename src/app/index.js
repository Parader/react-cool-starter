import React from 'react';
import { renderRoutes } from 'react-router-config';
import Helmet from 'react-helmet';
import { hot } from 'react-hot-loader';

import config from '../config';
// Global styles
import 'normalize.css/normalize.css'; // eslint-disable-line import/first
import styles from './styles.scss';

const App = route => (
  <div className={styles.App}>
    <Helmet {...config.app} />
    <div className={styles.header}>
      <img src={require('./assets/logo.svg')} alt="Logo" role="presentation" />
      <h1>{config.app.title}</h1>
    </div>
    {renderRoutes(route.routes)}
  </div>
);

export default hot(module)(App);