var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/Dispatcher.js');
var RSSStore = new Store(Dispatcher);

var _rss = [];

function extractExcerpt (description) {
  var excerptRegexp = /<p>.+<\/p>/;

  var excerpt = excerptRegexp.exec(description);

  if (excerpt) {
    return excerpt[0] + "<br><p><b>Read more...</b></p>";
  } else {
    return "<p>Read more...</p>";
  }
}

function extractImage (description) {
  var imgRegexp = /<img src=(\S+)/;

  var image = imgRegexp.exec(description);

  if (image) {
    return image[1];
  } else {
    return "#";
  }
}

function resetRSS(newRSS) {
  rss = newRSS.item.map(function (article) {
    return {
      pubdate: new Date(article.pubDate).toDateString(),
      title: article.title,
      url: article.link,
      img: extractImage(article.description),
      description: extractExcerpt(article.description),
      guid: article.guid.content
    }
  })

  _rss = rss;
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
