var Dispatcher = require('../dispatcher/Dispatcher.js');

module.exports = {
  receiveRSS: function (rss) {
    Dispatcher.dispatch({
      actionType: "RSS_RECEIVED",
      rss: rss
    });
  },

  receiveFavorites: function (favorites) {
    Dispatcher.dispatch({
      actionType: "FAVORITES_RECEIVED",
      favorites: favorites
    });
  }
};
