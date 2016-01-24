import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/user';
import createLogger from 'redux-logger';

export default function configureStore(initialState) {
  //const store = createStore(rootReducer, initialState);
  const logger =createLogger();
  const store = applyMiddleware(thunk, logger)(createStore)(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
