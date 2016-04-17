var React = require('react');
var ReactDOM = require('react-dom');

var Feed = require('./components/Feed.jsx')

document.addEventListener('DOMContentLoaded', function () {
  root = document.getElementById('root');

  ReactDOM.render(<Feed />, root);
});
