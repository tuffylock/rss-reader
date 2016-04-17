var ApiActions = require('../actions/ApiActions.js');

module.exports = {
  fetchRSS: function () {
    $.ajax({
      url: '/rss-feed.json',
      success: function (rss) {
        ApiActions.receiveRSS(rss);
      }
    });
  }
};
