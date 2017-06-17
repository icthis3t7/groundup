// webpack dependencies
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// helper libraries
var path = require('path');


// literally the thing
module.exports = {
  entry: {
		'app': path.resolve('./src/app/app.js')

	},

  module: {
    rules: [{
        test: /\.js$/,
        exclude: /(node_modules)/,

        use: {
          loader: 'babel-loader',

        }

      }

    ]

  },

  plugins: [

    new HtmlWebpackPlugin({
      template: path.resolve('./src/index.html')

    })

  ]

};
