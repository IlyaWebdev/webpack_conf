const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/pug/index.pug',
            filename: 'index.html'

        }),
        new CleanWebpackPlugin(),
    ],
    output: {
        filename: '[name].[hash].js',
        path: path.resolve('./', 'public')
    }
    //devtool: 'source-map'
})