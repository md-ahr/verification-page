const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
	entry: {
		'bundle.min.css': [
			path.resolve(__dirname, './src/css/main.scss')
		],
		'bundle.min.js': [
			path.resolve(__dirname, './src/js/script.js')
		]
	},
	output: {
		filename: '[name]',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loder']
				})
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					use: [
						'css-loader',
						{
							'loader': 'sass-loader',
							options: {
								outputStyle: 'compressed'
							}
						}
					]
				})
			},
			{
	            test: /\.(png|jpg|gif|svg|eot|ttf|otf|woff|woff2|json|xml|ico)$/,
	            use: [{loader: 'file-loader'}]
	        }
		]
	},
	plugins: [
		new ExtractTextPlugin("bundle.min.css")
	]
};

module.exports = config;