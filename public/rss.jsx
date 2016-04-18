var React = require('react');
var ReactDOM = require('react-dom');

var RSSReader = require('./components/RSSReader.jsx')

document.addEventListener('DOMContentLoaded', function () {
  root = document.getElementById('root');

  ReactDOM.render(<RSSReader />, root);
});
