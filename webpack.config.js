'use strict'

const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const BaseConfig = {
    mode: 'production',
    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/dist/'
    },
    optimization: {
      minimize: true,
      minimizer: [
        new UglifyJsPlugin({
          parallel: true
        })
      ]
    }
};

var AppConfig = Object.assign({}, BaseConfig, {
  entry: {
    app: './static/js/app.js',
    vendors: ['vue', 'vue-material']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }]
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  resolve: {
    alias: {
      vue: path.resolve(__dirname, 'node_modules/vue/dist/vue.esm.js'),
      source: path.resolve(__dirname, 'static/js'),
      components: path.resolve(__dirname, 'static/js/components'),
    }
  }
});

// var ServiceWorkerConfig = Object.assign({}, BaseConfig,{
//     entry: {
//       'service-worker': './jcdin/static/js/service-worker.js'
//     },
//     output: {
//       path: path.join(__dirname, 'jcdin/static/js/'),
//       filename: 'sw.js'
//     },
// });

module.exports = [
    // AppConfig, ServiceWorkerConfig,
    AppConfig
];