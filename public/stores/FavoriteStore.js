var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/Dispatcher.js');
var FavoriteStore = new Store(Dispatcher);

var _favorites = [];

function resetFavorites(favorites) {
  _favorites = favorites;
}

FavoriteStore.all = function () {
  return _favorites;
};

FavoriteStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
  case "FAVORITES_RECEIVED":
    resetFavorites(payload.favorites);
    break;
  }

  FavoriteStore.__emitChange();
};

module.exports = FavoriteStore;
