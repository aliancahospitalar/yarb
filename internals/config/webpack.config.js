var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        example: './src/app/modules/example',
        usersearch: './src/app/modules/usersearch',
        index: './src/app/index.jsx',
    },
    output: {
        path: path.join(__dirname, '../../dist'),
        filename: '[name].[chunkhash].entry.js',
        publicPath: '/static/'
    },
    watch: true,
    devServer: {
        historyApiFallback: true
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react', 'stage-0'],
                //babelrc: './internals/config/.babelrc',
                babelrc: false,
            }
        }, {
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader']

        }, {
            test: /\.html$/,
            loader: 'html-loader'
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/app/index.html'
        })
    ]
};