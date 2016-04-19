var React = require('react')

var ClientActions = require('../actions/ClientActions.js');
var FavoriteStore = require('../stores/FavoriteStore.js');

module.exports = React.createClass({
  getInitialState: function () {
    return { favorite: false };
  },

  componentDidMount: function () {
    this.checkFavorite();
  },

  checkFavorite: function () {
    favorites = FavoriteStore.all();

    for (var i = favorites.length - 1; i >= 0; i--) {
      if (favorites[i].guid === this.props.article.guid) {
        this.setState({ favorite: true });
      }
    }
  },

  toggleFavorite: function () {
    if (this.state.favorite) {
      ClientActions.removeFavorite(this.props.article);
    } else {
      ClientActions.addFavorite(this.props.article);
    }
    this.setState({ favorite: !this.state.favorite });
  },

  render: function () {
    var title = this.props.article.title;
    var url = this.props.article.url;
    var description = this.props.article.description;

    var image = { backgroundImage: 'url(' + this.props.article.img + ')' };

    var favorite = this.state.favorite ? "★" : "☆";

    return(
      <li className="feed-item">
        <div className="headline-wrapper">
          <div></div>
          <h3 className="article-title">
            <a href={url} title={url}>{title}</a>  
          </h3>
          <h3
            className="favorite"
            onClick={this.toggleFavorite}
            title="Favorite"
          >{favorite}</h3>
        </div>

        <a href={url} className="image-wrapper" style={image}>
          <div
            className="excerpt"
            title="Read More"
            dangerouslySetInnerHTML={ { __html: description } }
          />
        </a>
      </li>
    );
  }
});
