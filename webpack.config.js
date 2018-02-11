
let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
// let CleanWebpackPlugin = require('clean-webpack-plugin');
// let ExtractTextPlugin = new require('extract-text-webpack-plugin');
// let extractPlugin = new ExtractTextPlugin({
//   filename: "style.css"
// });
module.exports = {
  externals: {
    'THREE': 'THREE' //THREE is external
  },
  entry: [
    './src/js/app.js',
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080'
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    path: path.resolve(__dirname+'/dist'),
    publicPath: '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: "style-loader!css-loader"},
      {test: /\.js$/, loader: "babel-loader", exclude: /node_modules/, query:{ presets:['es2015']}}
    ]
  }
  // ,
  // plugins: [
  //   new webpack.ProvidePlugin({
  //     THREE: 'three'
  //   })
    // ,
    // extractPlugin,
    // new HtmlWebpackPlugin({
    //   template: './index.html'
    // }),
    // new CleanWebpackPlugin(['dist'])
  // ]
};
