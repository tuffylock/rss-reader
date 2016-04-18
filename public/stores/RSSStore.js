var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/Dispatcher.js');
var RSSStore = new Store(Dispatcher);

var _rss = [];

function resetRSS(newRSS) {
  _rss = newRSS.item;
}

RSSStore.all = function () {
  return _rss;
};

RSSStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
  case "RSS_RECEIVED":
    resetRSS(payload.rss);
    break;
  }

  RSSStore.__emitChange();
};

module.exports = RSSStore;
