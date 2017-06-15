// helper libraries
var path = require('path');

// webpack dependencies
var HtmlWebpackPlugin = require('html-webpack-plugin');


// literally the thing
module.exports = {
 entry: path.resolve('./src/app/app.js'),

 output: {
  path: path.resolve('./dist'),
  filename: '[name].bundle.js'

 },

 module: {
	 rules: [
     {
       test: /\.js$/,
       exclude: /(node_modules)/,

       use: {
         loader: 'babel-loader',

         options: {
           presets: ['env']

         }

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
