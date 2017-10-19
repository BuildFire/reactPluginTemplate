const path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ZipWebpackPlugin = require('zip-webpack-plugin');

const WebpackConfig = {

  // Disable source maps on production builds
  devtool: false,

  resolve: {
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat'
    }
  },

  entry: {
    // Plugin entry points
    'control/content/content': path.join(__dirname, '../src/control/content/index.js'),
    'control/design/design': path.join(__dirname, '../src/control/design/index.js'),
    'control/settings/settings': path.join(__dirname, '../src/control/settings/index.js'),
    'widget/widget': path.join(__dirname, '../src/widget/index.js'),
  },

  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js'
  },

  externals: {
    buildfire: 'buildfire'
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [['env', { modules: false }], 'react']
        }
      }
    }]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'control/content/index.html',
      inject: true,
      minify: { removeComments: true, collapseWhitespace: true },
      template: path.join(__dirname, '../src/control/content/index.html'),
      chunks: ['control/content/content']
    }),
    new HtmlWebpackPlugin({
      filename: 'control/design/index.html',
      inject: true,
      minify: { removeComments: true, collapseWhitespace: true },
      template: path.join(__dirname, '../src/control/design/index.html'),
      chunks: ['control/design/design']
    }),
    new HtmlWebpackPlugin({
      filename: 'control/settings/index.html',
      inject: true,
      minify: { removeComments: true, collapseWhitespace: true },
      template: path.join(__dirname, '../src/control/settings/index.html'),
      chunks: ['control/settings/settings']
    }),
    new HtmlWebpackPlugin({
      filename: 'widget/index.html',
      inject: true,
      minify: { removeComments: true, collapseWhitespace: true },
      template: path.join(__dirname, '../src/widget/index.html'),
      chunks: ['widget/widget']
    }),
    new CopyWebpackPlugin([{
      from: path.join(__dirname, '../src/control'),
      to: path.join(__dirname, '../dist/control'),
    }, {
      from: path.join(__dirname, '../src/widget'),
      to: path.join(__dirname, '../dist/widget'),
    }, {
      from: path.join(__dirname, '../src/resources'),
      to: path.join(__dirname, '../dist/resources'),
    }, {
      from: path.join(__dirname, '../plugin.json'),
      to: path.join(__dirname, '../dist/plugin.json'),
    }
    ], {
      ignore: ['*.js', '*.html', '*.md']
    }),
    new ZipWebpackPlugin({
      path: path.join(__dirname, '../'),
      filename: `plugin.zip`
    })
  ]

};

module.exports = WebpackConfig;
