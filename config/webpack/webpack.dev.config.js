// webpack dependencies
var webpackMerge = require('webpack-merge');

// helper libraries
var path = require('path');

// app dependencies
var coreConfig = require('./webpack.core.config.js');


// dev bundle rules
module.exports = webpackMerge(coreConfig, {
	devtool: '#inline-source-map',

	output: {
		path: path.resolve('./dist'),
		publicPath: 'http://localhost:8080/dist/',
		filename: '[name].bundle.js'

	},

	devServer: {
		headers: {
			'Access-Control-Allow-Origin': '*'

		},

		historyApiFallback: true,
		stats: 'minimal',
		inline: true

	}

});
