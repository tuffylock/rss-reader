var React = require('react');

var ClientActions = require('../actions/ClientActions.js')
var RSSStore = require('../stores/RSSStore.js')

var FeedItem = require('./FeedItem.jsx');
var Favorites = require('./Favorites.jsx');

module.exports = React.createClass({
  getInitialState: function () {
    return { articles: RSSStore.all() }
  },

  componentDidMount: function () {
    this.rssListener = RSSStore.addListener(this._rssChanged);
    ClientActions.fetchRSS();
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
      if (article.pubdate !== lastPub) {
        lastPub = article.pubdate;
        articles.push(<li key={article.pubdate}>{article.pubdate}</li>);
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
