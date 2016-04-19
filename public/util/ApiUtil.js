var ServerActions = require('../actions/ServerActions.js');

module.exports = {
  fetchRSS: function () {
    $.ajax({
      url: '/rss-feed.json',
      success: function (rss) {
        ServerActions.receiveRSS(rss);
      }
    });
  },

  fetchFavorites: function () {
    $.ajax({
      url: '/favorites.json',
      success: function (favorites) {
        ServerActions.receiveFavorites(favorites);
      }
    })
  },

  addFavorite: function (article) {
    $.ajax({
      url: '/favorites/add.json',
      type: 'POST',
      data: article,
      success: function (favorites) {
        ServerActions.receiveFavorites(favorites);
      }
    });
  },

  removeFavorite: function (article) {
    $.ajax({
      url: 'favorites/remove.json',
      type: 'POST',
      data: article,
      success: function (favorites) {
        ServerActions.receiveFavorites(favorites);
      }
    });
  }
};
