const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const setMPA = () => {
  const entry = {};
  const htmlWebpackPlugin = [];

  const entryFiles = glob.sync(path.resolve(__dirname, './src/*/index.js'));

  Object.keys(entryFiles).map((index) => {
    const entryFile = entryFiles[index];
    const match = entryFile.match(/src\/(.*)\/index\.js/);
    const pathName = match && match[1];
    
    entry[pathName] = entryFile;
    htmlWebpackPlugin.push(
      new HtmlWebpackPlugin({
        template: path.join(__dirname, `src/index/index.html`),
        filename: `${pathName}.html`,
        chunks: [pathName],
        inject: true,
        minify: {
          html5: true,
          collapseWhitespace: true,
          preserveLineBreaks: false,
          minifyCSS: true,
          minifyJS: true,
          removeComments: false
        }
      })
    )
  })

  return {
    entry,
    htmlWebpackPlugin
  }
}

const {entry, htmlWebpackPlugin} = setMPA();

module.exports = {
  mode: 'development',
  entry: entry,
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
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new FriendlyErrorsWebpackPlugin()
    // new HtmlWebpackPlugin({
    //   title: 'Output Management'
    // })
  ].concat(htmlWebpackPlugin),
  devServer: {
    contentBase: './dist',
    hot: true,
    open: {
      app: ['Google Chrome Canary', '--incognito', '--other-flag']
    }
  },
  devtool: 'source-map'
}