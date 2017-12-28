const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const webpackConfig = {
	// context: path.join(__dirname, 'static'),
	entry: {
		app: './static/'
	},

	output: {
		filename: 'bundle.js',
		path: __dirname + '/static/build/'
		// publicPath: '/static/build'
		// library: '[name]'
	},

	resolve: {
		extensions: ['.js', '.jsx']
	},
	devtool: 'cheap-eval-source-map',

	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'eslint-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.jsx?$/,
				loader: "babel-loader",
				query: {
					presets: ['es2015', 'react', 'stage-0', 'stage-1']
				},
				exclude: [/node_modules/]
			},
			{
				test: /\.sass$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: ['css-loader', 'sass-loader']
				}),
				exclude: [/node_modules/]
			},
			{
				test: /\.json$/,
				loader: "json-loader"
			}
		]
	},
    devServer: {
        host: 'localhost',
        port: 8000,
		contentBase: './static/'
    },
	plugins: [
		new ExtractTextPlugin({
			filename: 'style.css',
			allChunks: true,
			disable: true
		})
	]
};
module.exports = webpackConfig;