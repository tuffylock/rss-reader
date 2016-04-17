var React = require('react');

var Article = require('./Article.jsx');

module.exports = React.createClass({
  getInitialState: function () {
    return { articles: [] }
  },

  componentDidMount: function () {
    var that = this;
    $.ajax({
      url: '/rss-feed.json',
      success: function (feed) {
        that.updateArticles(feed)
      }
    });
  },

  updateArticles: function (feed) {
    console.log(feed);
    articles = feed.item;
    this.setState({ articles: feed.item });
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
