/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-25 17:36:26
 * @LastEditTime: 2019-08-27 23:43:35
 * @LastEditors: Please set LastEditors
 */
'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')

const vueLoaderConfig = require('./vue-loader.conf')
let isCompess = null;
if (process.env.NODE_ENV === 'production') {
  // isCompess =  [{
  //   loader: 'url-loader',
  //   options: {
  //     limit: 10000,
  //     name: utils.assetsPath('img/[name].[hash:7].[ext]')
  //   }
  // }, {
  //   loader: 'image-webpack-loader',// 压缩图片
  //   options: {
  //     bypassOnDebug: true,
  //   }
  // }]
  isCompess = [{
    loader: 'url-loader',
    options: {
      limit: 10000,
      name: utils.assetsPath('img/[name].[hash:7].[ext]')
    }
  }]
} else {
  isCompess = [{
    loader: 'url-loader',
    options: {
      limit: 10000,
      name: utils.assetsPath('img/[name].[hash:7].[ext]')
    }
  }]
}

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}



module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production' ?
      config.build.assetsPublicPath : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  }, // 添加代码
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig,
        include: [resolve('src')],
        exclude: /node_modules\/(?!(autotrack|dom-utils))|vendor\.dll\.js/
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        // exclude: /(node_modules)/
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(mp3)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          name: utils.assetsPath('assets/[name].[hash:7].[ext]')
        },
        include: [resolve('src')],
        exclude: [resolve('static')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: isCompess
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        },
        include: [resolve('src')],
        exclude: [resolve('static')]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
