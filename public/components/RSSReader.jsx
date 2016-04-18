var React = require('react');

var Favorites = require('./Favorites.jsx');
var Feed = require('./Feed.jsx');

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <Favorites />
        <Feed />
      </div>
    )
  }
})
