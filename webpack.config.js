require('http-proxy-middleware');
var webpack = require('webpack');
var path = require('path');

module.exports = {

    entry: {
        main: [path.join(__dirname, './src/main.js')],
        chunk: ['vue', 'bootstrap/dist/css/bootstrap.min.css', 'vue-router', 'vuex', 'lodash', 'iscroll/build/iscroll-probe.js']
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js',
        publicPath: "/dist/"
    },
    devServer: {
        contentBase: path.join(__dirname),
        compress: true,
        port: 3333,
        host: '192.168.1.62',
        publicPath: "/dist/",
        proxy: {
            '/api': {
                target: "http://news-at.zhihu.com",
                changeOrigin: true,
                pathRewrite: {
                    '^/api/(.*)': '/api/4/$1'
                }
            },
            '/pic': {
                target: 'http://pic4.zhimg.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/pic/(.*)': '/$1'
                }
            }
        }
    },
    module: {
        loaders: [{
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            },

            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                use: [
                    { loader: 'vue-loader' }
                ]
            },
            { test: /\.html$/, loader: 'html-loader' },
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    {
                        loader: 'sass-loader',
                        query: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg)$/,
                use: [{
                    loader: 'url-loader',
                    query: {
                        limit: 8192
                    }
                }]
            },
            {
                test: /\.(svg|ttf|eot|woff|woff2)$/,
                use: [{
                    loader: 'file-loader',
                    query: {
                        name: 'fonts/[name].[ext]'
                    }
                }]
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin('chunk')
    ],
    devtool: "#cheap-module-source-map",
    resolve: {
        extensions: ['.js', '.json', '.scss', '.css', '.vue'],
        alias: {
            'vue': 'vue/dist/vue.js',
            '@': path.resolve('src'),
            '@components': path.resolve('src/components'),
            '@views': path.resolve('src/views'),
            '@static': path.resolve('src/static'),
            '@directives': path.resolve('src/directives'),
            "iscroll": 'iscroll/build/iscroll-probe.js'
        }
    }
};