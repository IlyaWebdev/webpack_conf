const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: {
        index: './src/js/index.js',
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    resolve: {
        alias: {
            //'vue$':'vue/dist/vue.esm.js',
            vue: 'vue/dist/vue.js',
            'vue-router': 'vue-router/dist/vue-router.js'
        }
    },
    optimization: {
        moduleIds: 'hashed',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },

            {
                test: /\.s[ac]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },

            {
                test: /\.(png|jpg|gif|jpeg)$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]'
                }
            },

            {
                test: /\.svg$/,
                loader: 'file-loader',
                options: {
                    name: 'icons/[name].[ext]'
                }
            },

            {
                test: /\.pug$/,
                oneOf: [
                    {
                        resourceQuery: /^\?vue/,
                        use: ['pug-plain-loader']                            
                    },
                    
                    {
                        loader: 'pug-loader',
                        options: {
                            preety: true,
                        }
                    },
                ]
            },

            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]'
                }
            },

            {
                test: /\.js$/,
                loader: 'babel-loader'
            },

            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ],
    },
};