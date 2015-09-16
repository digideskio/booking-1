require('bootstrap-webpack');
require('../assets/styles/style.sass');

var App = require('./components/App.js');
var Index = require('./components/Index.js');
var Home = require('./components/Home.js');
var React = require('react');
var MobileDetect = require('mobile-detect');

// TODO: Require assets here.
// require('../assets/images/product.png');
// import App from './components/App.js';
// import React from 'react';

var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var routes = (
  <Route handler={App} path="/">
    <DefaultRoute handler={Index}/>
    <Route name="home" path="home/:userName" handler={Home}/>
  </Route>
);

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root/>, document.body);
});

// React.render(<App />, document.getElementById('main'));