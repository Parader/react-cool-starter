import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import { renderRoutes } from 'react-router-config';
import { loadComponents } from 'loadable-components';

import configureStore from './helpers/configureStore';
import routes from './routes';

// Get the initial state from server-side rendering
const initialState = window.__INITIAL_STATE__;
const history = createHistory();
const store = configureStore(history, initialState);

const render = Routes => {
  hydrate(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        {renderRoutes(Routes)}
      </ConnectedRouter>
    </Provider>,
    document.getElementById('react-view')
  );
};

// Load all components needed before starting rendering (loadable-components setup)
loadComponents().then(() => {
  render(routes);
});
