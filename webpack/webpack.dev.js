const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const path = require('path');


module.exports = merge(common, {
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/pug/index.pug',
            filename: 'index.html'
        }),
        new CleanWebpackPlugin(),
    ],
    output: {
        filename: '[name].js',
        path: path.resolve('./', 'public'),
    },
    devtool: 'inline-source-map',
});