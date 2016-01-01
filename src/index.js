const React = require('react') ;
const {render} = require('react-dom') ;
const {createStore} = require('redux') ;
const {Provider} = require('react-redux') ;
const GameCommunity = require('./GameCommunity') ;


render(
    <GameCommunity />, 
    document.getElementById('root')
) ;
