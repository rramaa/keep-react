var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var config = (baseDir) => {
    var BUILD_DIR = path.resolve(baseDir, 'dist')
    var APP_DIR = path.resolve(baseDir, 'src/client')
    return {
        entry: APP_DIR + '/index.jsx',
        module: {
            rules: [{
                test: /\.html$/,
                use: ["html-loader"]
            }, {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: 'babel-loader'
            }, {
                test: /\.scss$/,
                include: APP_DIR,
                loader: ['style-loader', 'css-loader', 'sass-loader']
            }]
        },
        resolve: {
            extensions: ['.js', '.jsx', '.scss', '.css'],
            modules: ['node_modules', APP_DIR]
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
}

module.exports = config