var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var BUILD_DIR = path.resolve(__dirname, 'dist')
var APP_DIR = path.resolve(__dirname, 'src/client')

var config = {
	entry: APP_DIR + '/index.jsx',
	devtool: 'source-map',
	module: {
		rules: [{
			test: /\.html$/,
			use: ["html-loader"]
		}, {
			test : /\.jsx?/,
			include : APP_DIR,
			loader : 'babel-loader'
		}, {
			test : /\.scss$/,
			include : APP_DIR,
			loader : ['style-loader', 'css-loader', 'sass-loader']
		}]
	},
	output: {
		path: BUILD_DIR,
		filename: 'app.js'
	},
	plugins: [new HtmlWebpackPlugin({
		title: "React App",
		template: APP_DIR + "/index.html"
	})]
}

module.exports = config