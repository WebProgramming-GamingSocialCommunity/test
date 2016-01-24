const React = require('react');
const { render } = require('react-dom');
const { Router } = require('react-router');
const routes = require('./routes');
const createBrowserHistory = require('history/lib/createBrowserHistory');
require('babel-core/polyfill');
const { createStore } = require('redux');
const { Provider } = require('react-redux');
require('../semantic/dist/semantic.min.css');
require('./components/style.css')
import configureStore from './store/configureStore';

const history = createBrowserHistory();
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
