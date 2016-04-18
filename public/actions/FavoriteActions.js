var Dispatcher = require('../dispatcher/Dispatcher.js');

module.exports = {
  addFavorite: function(article) {
    Dispatcher.dispatch({
      actionType: "ADD_FAVORITE",
      article: article
    });
  }
}
