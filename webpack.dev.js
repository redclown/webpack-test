const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    search: './src/search.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },{
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },{
        test: /\.(js|jsx)$/,
        use: [
          'babel-loader'
        ]
      },{
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  "plugins": [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
      filename: 'index.html',
      chunks: ['index'],
      inject: true,
      minify: {
        html5: true,
        collapseWhitespace: true,
        preserveLineBreaks: false,
        minifyCSS: true,
        minifyJS: true,
        removeComments: false
      }
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/search.html'),
      filename: 'search.html',
      chunks: ['search'],
      inject: true,
      minify: {
        html5: true,
        collapseWhitespace: true,
        preserveLineBreaks: false,
        minifyCSS: true,
        minifyJS: true,
        removeComments: false
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new FriendlyErrorsWebpackPlugin()
    // new HtmlWebpackPlugin({
    //   title: 'Output Management'
    // })
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
    open: {
      app: ['Google Chrome', '--incognito', '--other-flag']
    }
  }
}