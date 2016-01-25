const React = require('react');
const { render } = require('react-dom');
const { Router } = require('react-router');
const routes = require('./routes');
require('babel-core/polyfill');
const { createStore } = require('redux');
const { Provider } = require('react-redux');
require('../semantic/dist/semantic.min.css');
require('./components/style.css')
import configureStore from './store/configureStore';
import history from './history';
let store = configureStore();

if (module.hot) {
    module.hot.accept();
}

render(
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>,
    document.getElementById('root')
);
