// webpack dependencies
var webpackMerge = require('webpack-merge');

// helper libraries
var path = require('path');

// app dependencies
var coreConfig = require('./webpack.core.config.js');


// production build bundle rules
module.exports = webpackMerge(coreConfig, {
	output: {
		path: path.resolve('./dist'),
		filename: '[name].bundle.js'

	}


});
