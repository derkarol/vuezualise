const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// let CleanWebpackPlugin = require('clean-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let extractPlugin = new ExtractTextPlugin({
  filename: 'main.css'
});

module.exports = {
  externals: {
    'THREE': 'THREE' //THREE is external npm run dev
  },
  entry: [
    './src/js/app.js',
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080'
  ],
  output: {
    path: path.resolve(__dirname+'/dist'),
    publicPath: '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
          use: extractPlugin.extract({
            // fallbackLoader:'style-loader',
            use: ['css-loader', 'sass-loader'],
            publicPath: '/dist'
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {

          loader: 'babel-loader',
            options: {
              presets: ['es2015']

            },
          query:{
            presets:['es2015']}
          }
        }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '33Dconfigurator',
      minify: {
        collapseWhitespace: true
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    extractPlugin
    // new ExtractTextPlugin({
    //   filename: 'style.css',
    //   disabled: false,
    //   allChunks: true
    // })
  ]
}
