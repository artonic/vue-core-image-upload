const webpack = require( 'webpack' );
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path');
const fse = require('fs-extra');

fse.copySync('./src', './dist');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    'index': './vue-core-image-upload.vue',
    'dist/lib/canvas-helper': './lib/canvas-helper.js',
    'dist/lib/helper': './lib/helper.js',
    'dist/lib/drag': './lib/drag.js',
    'dist/lib/resize': './lib/resize.js',
    'dist/lib/xhr': './lib/xhr.js',
    'dist/lib/loading-gif': './lib/loading-gif.js',
    'dist/props': './props',
    'dist/props': './props',

  },
  output: {
    path: path.resolve(__dirname),
    filename: '[name].js',
    library: 'VueCoreImageUpload',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
            loader: 'babel-loader',
        }],
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        use: {
            loader: 'vue-loader'
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ],
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new UglifyJsPlugin( {
      uglifyOptions: {
        minimize : true,
        sourceMap : false,
        mangle: true,
        compress: {
          drop_console: true
        }
      }
    } )
  ],
}
