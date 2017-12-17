var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var config
if(process.env.NODE_ENV === 'production'){
	config = require('./webpack/prod')(__dirname)
} else {
	config = require('./webpack/dev')(__dirname)
}

module.exports = config