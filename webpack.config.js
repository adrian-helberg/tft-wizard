const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'out/'),
        publicPath: '/',
        clean: true
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({title: 'Development'}),
    ],
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        compress: true,
        open: true,
        port: 8080,
        publicPath: 'http://localhost:8080/',
        clientLogLevel: 'none',
        contentBase: (__dirname, './out'),
        watchContentBase: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    },
};