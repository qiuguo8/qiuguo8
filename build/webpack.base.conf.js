var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var webpack = require('webpack');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './entry.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    modules: [
      resolve('web'),
      resolve('resources'),
      resolve('node_modules')
    ],
    alias: {
      'vue$': 'vue/dist/vue.min.js',
      'web': resolve('web'),
      'resources': resolve('web/resources'),
      'modules': resolve('web/modules')
    }
  },
  externals: {
      'vue$':'window.Vue',
      'vue-router$':'window.VueRouter',
      'vue-resource$':'window.VueResource',
      'vuex$':'window.Vuex',
  },
  module: {
    rules: [
      // {
      //   test: /\.(js|vue)$/,
      //   loader: 'eslint-loader',
      //   enforce: "pre",
      //   include: [resolve('web'), resolve('test')],
      //   options: {
      //     formatter: require('eslint-friendly-formatter')
      //   }
      // },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      // {
      //   test: /muse-ui.src.*?.\.(js|vue)$/,
      //   use: [
      //     {loader:'babel-loader'},
      //     {loader:'vue-loader',options:vueLoaderConfig}
      //   ]
      // },
      {
        test: /\.js$/,
        include: [resolve('web')],
        loader: 'babel-loader',
        options: {
          //plugins: [require('babel-plugin-transform-vue-jsx'),require("babel-polyfill")]
          plugins: [require("babel-polyfill"),require('babel-plugin-transform-runtime')]
        }
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: [
                    'url-loader?limit=10000&'+utils.assetsPath('img/[name].[hash:7].[ext]'),
                    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack-loader?{pngquant:{quality: 65, speed: 4}, mozjpeg: {quality: 65},svgo:{quality:65},gifsicle:{quality:65}}'
                    ]
       /* query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }*/
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        loader: 'url-loader',
        include:[resolve('node_modules')],
        query: {
          limit: process.env.NODE_ENV === 'production'?10000:'',
          name: process.env.NODE_ENV === 'production'?'./fonts/[name].[hash:7].[ext]':''
        }
      },
      {test:/\.html$/,loader:"html-loader"}
    ]
  }
}
