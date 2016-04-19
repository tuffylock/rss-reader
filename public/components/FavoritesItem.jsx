React = require('react');

ClientActions = require('../actions/ClientActions.js');

module.exports = React.createClass({
  removeFavorite: function () {
    ClientActions.removeFavorite(this.props.article);
  },

  render: function () {
    var title = this.props.article.title;
    var url = this.props.article.url;
    var description = this.props.article.description

    return (
      <li className="favorites-item">
        <span
          className="remove-favorite"
          onClick={this.removeFavorite}
          title="Remove Favorite"
          >X</span>
        <a
          href={url}
          className="favorites-link"
          title={description}
        >{title}</a>
      </li>
    );
  }
});
