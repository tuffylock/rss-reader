var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/Dispatcher.js');
var FavoriteStore = new Store(Dispatcher);

var _favorites = [];

function addFavorite(article) {
  _favorites.push(article);
}

FavoriteStore.all = function () {
  return _favorites;
};

FavoriteStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
  case "ADD_FAVORITE":
    addFavorite(payload.article);
    break;
  }

  FavoriteStore.__emitChange();
};

module.exports = FavoriteStore;
