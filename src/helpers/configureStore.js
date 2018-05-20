import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

export default (history, initialState = {}) => {
  const middlewares = [
    thunk,
    routerMiddleware(history)
    // Add other middlewares here
  ];
  // Use Redux DevTools Extension in development
  const composeEnhancers =
    (__DEV__ &&
      typeof window === 'object' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
  const enhancers = composeEnhancers(
    applyMiddleware(...middlewares)
    // Add other enhancers here
  );
  const store = createStore(rootReducer, initialState, enhancers);

  return store;
};
