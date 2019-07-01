const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, '../examples/src/index.ts'),
    },
    output: {
        filename: '[name].[hash:7].js',
        path: path.resolve(__dirname, '../dist'),
    },
    resolve: {
        extensions: ['.js', '.vue', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            appendTsSuffixTo: [/\.vue$/],
                            transpileOnly: true,
                        },
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../examples/index.html'), // 引用的模板
            filename: 'index.html', // 打包后的命名
            inject: true, // 是否自动引入打包的js文件
        }),
        new VueLoaderPlugin(),
    ],
    devServer: {
        clientLogLevel: 'warning',
        historyApiFallback: true,
        hot: true, // 是否开启热加载替换
        compress: true,
        host: '0.0.0.0', // 设置为localhost时，不能用本地ip访问
        port: 8080,
        open: true, // 是否自动浏览器打开
    },
};
