var path = require('path');

module.exports = {
    entry: {
        example: './src/app/modules/example',
        usersearch: './src/app/modules/usersearch',
        index: './src/app/index.jsx',
    },
    output: {
        path: path.join(__dirname, '../../dist'),
        filename: '[name].entry.js',
        publicPath: '/static/'
    },
    watch:true,
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
        },
        {
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader']
            
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    }
};