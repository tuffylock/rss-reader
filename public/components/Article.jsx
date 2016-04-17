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

    if (image) {
      return image[1];
    } else {
      return "#";
    }
  },

  extractExcerpt: function () {
    var description = this.props.article.description;
    var excerptRegexp = /<p>.+<\/p>/;

    var excerpt = excerptRegexp.exec(description);

    if (excerpt) {
      return excerpt[0] + "<br><p><b>Read more...</b></p>";
    } else {
      return "<p>Read more...</p>";
    }
  },

  render: function () {
    var title = this.props.article.title;
    var link = this.props.article.link;
    var excerpt = this.extractExcerpt();

    var image = { backgroundImage: 'url(' + this.extractImage() + ')' };

    var favorite = this.state.favorite ? "★" : "☆";

    return(
      <li className="article">
        <div className="headline-wrapper">
          <h2 className="article-title"><a href={link}>{title}</a></h2>

          <h2
            className="favorite"
            onClick={this.toggleFavorite}
          >{favorite}</h2>
        </div>

        <a href={link} className="image-wrapper" style={image}>
          <div
            className="excerpt"
            dangerouslySetInnerHTML={ { __html: excerpt } }
          />
        </a>
        <hr/>
      </li>
    );
  }
});
