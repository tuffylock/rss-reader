React = require('react');

module.exports = React.createClass({
  render: function () {
    var title = this.props.article.title;
    var url = this.props.article.link;

    return (
      <li className="favorites-item">
        <a href={url}>{title}</a>
      </li>
    );
  }
});
