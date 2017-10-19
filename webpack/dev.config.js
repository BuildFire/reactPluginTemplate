const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const WebpackConfig = {

  // Source map type
  // @see https://webpack.js.org/configuration/devtool/
  devtool: 'eval-source-map',

  resolve: {
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat'
    }
  },

  entry: {
    'control/content/content': [
      'webpack-hot-middleware/client',
      path.join(__dirname, '../src/control/content/index.js')
    ],
    'control/design/design': [
      'webpack-hot-middleware/client',
      path.join(__dirname, '../src/control/design/index.js')
    ],
    'control/settings/settings': [
      'webpack-hot-middleware/client',
      path.join(__dirname, '../src/control/settings/index.js')
    ],
    'widget/widget': [
      'webpack-hot-middleware/client',
      path.join(__dirname, '../src/widget/index.js'
      )]
  },

  output: {
    path: path.join(__dirname, '../'),
    filename: '[name].js',
    publicPath: '/'
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
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
      to: path.join(__dirname, '../control'),
    }, {
      from: path.join(__dirname, '../src/widget'),
      to: path.join(__dirname, '../widget'),
    }, {
      from: path.join(__dirname, '../src/resources'),
      to: path.join(__dirname, '../resources'),
    }], {
      ignore: ['*.js', '*.html', '*.md']
    }),
    new CopyWebpackPlugin([{
      from: path.join(__dirname, '../../../styles'),
      to: path.join(__dirname, '../styles'),
    }, {
      from: path.join(__dirname, '../../../scripts'),
      to: path.join(__dirname, '../scripts'),
    }, {
      from: path.join(__dirname, '../../../fonticons'),
      to: path.join(__dirname, '../fonticons'),
    }])
  ],

  devServer: {
    hot: true,
    port: 8080,
    host: '0.0.0.0',
    contentBase: path.join(__dirname, '../'),
    publicPath: '/',
    quiet: false,
    noInfo: true,
    disableHostCheck: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }

};

module.exports = WebpackConfig;
