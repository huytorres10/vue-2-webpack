const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.css$/,
				use: ['vue-style-loader', 'css-loader'],
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
	},
	devServer: {
		static: false,
		compress: true,
		port: 8080,
	},
	devtool: 'source-map',
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			template: './index.html',
			inject: true,
		}),
	],
};
