'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
//var SpritesmithPlugin = require('webpack-spritesmith');

var config = require('./_config'); //paths config..

module.exports = {

  entry: [
    config.build('js', 'src'), //JavaScript entry point
    config.build('css', 'src') //CSS entry point
  ],

  output: {
    path: config.js.dest.path,
    filename: config.js.dest.file //JavaScript end point
  },

  //quickest, webpack -d -p for production
  devtool: 'eval',

  module: {

    //test: which filetype?,
    //exclude: which folders to exclude

    loaders: [

      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint'
      },

      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!postcss!sass?outputStyle=expanded')
      }/*,

      {
        test: /\.png$/,
        loader: 'file?name=[path][name].[ext]'
      }

      /*
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }*/

    ]

  },

  postcss: function(){

    return [

      require('autoprefixer-core')({
        browsers: ['IE >= 9', 'last 2 version'],
        cascade: false
      })

    ];

  },

  //webpack plugins
  plugins: [

    new webpack.optimize.DedupePlugin(),

    //generate spritesheet
    /*new SpritesmithPlugin({

      src: {
        cwd: path.resolve(__dirname, 'img/sprite'),
        glob: '*.png'
      },

      target: {
        image: path.resolve(__dirname, 'img/sprite.png'),
        css: path.resolve(__dirname, '_scss/_sprite.scss')
      },

      apiOptions: {
        cssImageRef: '~sprite.png'
      }

    }),*/

    //extract CSS into seperate file
    new ExtractTextPlugin(
      config.build('css', 'dest')
    )

  ],

  resolve: {
    extensions: ['', '.json', '.js', '.css'],
    modulesDirectories: ['node_modules', 'assets']
  }

};
