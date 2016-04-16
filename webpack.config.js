var path = require('path');

console.log("dirname: " + __dirname);
console.log(path.join(__dirname, 'public'));



module.exports = {
  context: __dirname,
  entry: "./public/rss.jsx",
  output: {
    path: path.join(__dirname, 'public'),
    filename: "bundle.js",
    devtoolModuleFilenameTemplate: '[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react']
        }
      }
    ]
  }
}
