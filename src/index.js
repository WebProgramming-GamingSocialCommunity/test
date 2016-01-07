import 'babel-core/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import GameCommunity from './containers/GameCommunity';
import configureStore from './store/configureStore';

const store = configureStore();

render(
  <Provider store={store}>
    <GameCommunity /> 
  </Provider>,
    document.getElementById('root')
) ;
