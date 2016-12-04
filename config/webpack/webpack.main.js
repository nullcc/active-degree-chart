var path = require('path');
var PATH = require("./build_path");

module.exports = {
    entry: {
        index: [path.join(PATH.ROOT_PATH, 'index.js')]
    },
    output: {
        path: PATH.ASSET_PATH,
        filename: '[name]_[hash:8].js'
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['es2015', 'react', 'stage-0']
          }
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)\??.*$/,
          loader: 'url-loader?limit=8192&name=[name].[ext]'
        },
        {
          test: /\.(jpe?g|png|gif|svg)\??.*$/,
          loader: 'url-loader?limit=8192&name=[name].[ext]'
        },
        {
          test: /\.css$/, loader: 'style!css!postcss'
        },
        {
          test: /\.scss$/, loader: 'style!css!postcss!sass'
        }
      ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
