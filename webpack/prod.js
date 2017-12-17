var webpack = require('webpack')
var baseConfig = require('./_base')
var UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = function (baseDir) {
    var webpackConfig = baseConfig(baseDir)
    webpackConfig.plugins = [
        ...webpackConfig.plugins,
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
    return webpackConfig
}