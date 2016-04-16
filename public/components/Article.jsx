var React = require('react')

module.exports = React.createClass({
  getInitialState: function () {
    return { favorite: false };
  },

  toggleFavorite: function () {
    this.setState({ favorite: !this.state.favorite });
  },

  extractImage: function () {
    var description = this.props.article.description;
    var imgRegexp = /<img src=(\S+)/;

    var image = imgRegexp.exec(description);

    if (image[1]) {
      return image[1];
    } else {
      return "#";
    }
  },

  render: function () {
    var title = this.props.article.title;
    var link = this.props.article.link;
    var description = this.props.article.description;

    var image = this.extractImage();
    console.log(image);

    var favorite = this.state.favorite ? "★" : "☆";
    return(
      <li className="article">
        <h2 className="article-title"><a href={link}>{title}</a></h2>
        <p>{description}</p>
        <img src={image} />
        <div
          className="favorite"
          onClick={this.toggleFavorite}
        >{favorite}</div>
      </li>
    );
  }
});
