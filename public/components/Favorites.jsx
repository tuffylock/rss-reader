React = require('react');

FavoriteStore = require('../stores/FavoriteStore.js');

FavoritesItem = require('./FavoritesItem.jsx');

module.exports = React.createClass({
  getInitialState: function () {
    return { favorites: FavoriteStore.all() };
  },

  componentDidMount: function () {
    this.favoritesListener = FavoriteStore.addListener(this._favsChanged);
  },

  componentWillUnmount: function () {
    this.favoritesListener.remove();
  },

  _favsChanged: function () {
    var favorites = FavoriteStore.all();
    this.setState({ favorites: favorites });
  },

  render: function () {
    var favorites = this.state.favorites.map(function (article, index) {
      return <FavoritesItem key={index} article={article} />;
    });

    return (
      <div className="favorites">
        <h2>Favorites</h2>
        <ul>
          {favorites}
        </ul>
      </div>
    );
  }
});
