var React = require('react');
var ReactDOM = require('react-dom');
var Route = require('react-router').Route;
var Router = require('react-router').Router;

var Feed = require('./components/Feed.jsx')

document.addEventListener('DOMContentLoaded', function () {
  root = document.getElementById('root');

  ReactDOM.render((
    <Router>
      <Route path="/" component={Feed} />
    </Router>
  ), root);
});
