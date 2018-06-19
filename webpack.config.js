const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	mode: 'development',
	entry: './src/Index.tsx',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: {minimize: true}
					}
				]
			},
			{
				test: /\.tsx?$/,
				loader: 'awesome-typescript-loader'
			},

			{
				test: /\.scss$/,
				use: [{
					loader: 'style-loader'
				}, {
					loader: 'css-loader'
				}, {
					loader: 'sass-loader'
				}]
			},
			{
				test: /\.css$/,
				use: [{
					loader: 'style-loader'
				}, {
					loader: 'css-loader'
				}]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: path.resolve(__dirname, 'src', 'index.html'),
			filename: './index.html'
		}),
	]
};

