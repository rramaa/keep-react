var webpack = require('webpack')
var baseConfig = require('./_base')

module.exports = function (baseDir) {
  var webpackConfig = baseConfig({baseDir, isDev: true})
  webpackConfig.devtool = 'inline-source-map'
  webpackConfig.plugins = [
    ...webpackConfig.plugins,
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
  return webpackConfig
}
