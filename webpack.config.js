var webpack = require('webpack')
var path = require('path')

module.exports = {
  context: __dirname + '/app',
  entry: {
    app: './app.js',
    vendor: ['angular']
  },
  output: {
    path: __dirname + '/public/scripts',
    filename: 'potluck.bundle.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor",/* filename= */"vendor.bundle.js")
  ],
  loaders: [
    {test: /\.html$/, loader: "html"},
    {test: /\.css$/, loader: "style!css"},
  ]
}
