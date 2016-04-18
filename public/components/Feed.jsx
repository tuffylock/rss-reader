var React = require('react');

var ApiUtil = require('../util/ApiUtil.js')
var RSSStore = require('../stores/RSSStore.js')

var FeedItem = require('./FeedItem.jsx');
var Favorites = require('./Favorites.jsx');

module.exports = React.createClass({
  getInitialState: function () {
    return { articles: RSSStore.all() }
  },

  componentDidMount: function () {
    this.rssListener = RSSStore.addListener(this._rssChanged);
    ApiUtil.fetchRSS();
  },

  componentWillUnmount: function () {
    this.rssListener.remove();
  },

  _rssChanged: function () {
    articles = RSSStore.all();
    this.setState({ articles: articles });
  },

  render: function () {
    var articles = [];
    var lastPub;

    this.state.articles.forEach(function (article, index) {
      if (article.pubDate !== lastPub) {
        lastPub = article.pubDate;
        articles.push(<li key={article.pubDate}>{article.pubDate}</li>);
      }
      articles.push(<FeedItem key={index} article={article} />);
    });

    return (
      <div>
        <ul className="feed">{articles}</ul>
      </div>
    );
  }
});
