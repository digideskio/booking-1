var path = require('path');
var webpack = require('webpack');
var pkg = require('./package.json');
var  buildPath = path.resolve(__dirname, 'build');
module.exports = {
  devtool: 'eval',
  // entry: {
  //   app: [
  //     "webpack-dev-server/client?http://0.0.0.0:8080",
  //     "webpack/hot/only-dev-server",
  //     "./src/scripts/main.js"
  //   ]
  // },
  entry: [
    "webpack-hot-middleware/client",
    "./src/scripts/main.js"
  ],
  output: {
    path: buildPath,
    filename: "bundle.js",
    publicPath: '/build'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'root.jQuery': 'jquery'
    }),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.bundle.js', Infinity)
  ],
  resolve: {
    modulesDirectories: ['node_modules']
  },
  externals: {
    "mobile-detect": 'MobileDetect'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "react-hot!babel",
        exclude: /node_modules/
      },

      {
        test: /\.scss$/,
        loader: "style!css!sass?indentedSyntax=false&outputStyle=expanded"
      },

      {
        test: /bootstrap\/js\//,
        loader: 'imports?jQuery=jquery'
      },

      {
        test: /\.(ttf|eot|svg)$/,
        loader: 'file-loader'
      },

      {
        test: /\.(woff|woff2|ttf|eot)$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff'
      },

      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'url-loader?limit=8192'
      },

      {
        test: /\.html$/,
        loader: "file?name=[path][name].[ext]&context=./src"
      }
    ]
  }
};
