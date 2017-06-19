// webpack dependencies
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// helper libraries
var path = require('path');


// literally the thing
module.exports = {
  entry: {
		'app': path.resolve('./src/entry.js')

	},

	resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve('./src')

    }

  },

  module: {
    rules: [
			{
        test: /\.js$/,
        exclude: /(node_modules)/,

        use: {
          loader: 'babel-loader',

        }

      },

			{
        test: /\.vue$/,
        loader: 'vue-loader'

      }

    ]

  },

  plugins: [

    new HtmlWebpackPlugin({
      template: path.resolve('./src/index.html')

    })

  ]

};
