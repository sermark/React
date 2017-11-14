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
		path: __dirname + '/static/build'
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
				test: /\.jsx?$/,
				exclude: [/node_modules/],
				loader: "babel-loader",
				query: {
					presets: ['es2015', 'react', 'stage-0', 'stage-1']
				}
			},
			{
                test: /\.sass$/,
				use: ExtractTextPlugin.extract({
        			fallback: 'style-loader',
        			use: [
					{
						loader: "css-loader", options: {
							sourceMap: true
						}
					}, {
						loader: "sass-loader", options: {
							sourceMap: true
						}
					}]
      			})
            }
		]
	},
    devServer: {
        host: 'localhost',
        port: 8080,
		contentBase: './static/build',
		hot: true,
		watchContentBase: true
    },
	plugins: [
		new ExtractTextPlugin('style.css', {
			allChunks: true
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new CleanWebpackPlugin(['./static/build/!index.html'], {
			verbose: true, 
			dry: false
		})
	]
};
module.exports = webpackConfig;