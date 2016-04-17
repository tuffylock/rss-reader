var React = require('react');

var ApiUtil = require('../util/ApiUtil.js')
var RSSStore = require('../stores/RSSStore.js')

var Article = require('./Article.jsx');

module.exports = React.createClass({
  getInitialState: function () {
    return { articles: RSSStore.all() }
  },

  componentDidMount: function () {
    this.rssListener = RSSStore.addListener(this.rssChanged)
    ApiUtil.fetchRSS();
  },

  componentWillUnmount: function () {
    this.rssListener.remove();
  },

  rssChanged: function () {
    articles = RSSStore.all();
    this.setState({ articles: articles });
  },

  render: function () {
    var articles = this.state.articles.map(function (article, index) {
      return <Article key={index} article={article} />;
    });

    return (
      <div>
        <h1>The Onion</h1>
        <ul className="feed">{articles}</ul>
      </div>
    );
  }
});
