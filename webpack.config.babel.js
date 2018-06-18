import path from 'path';

export default {
    entry: './client.js',

    output: {
        path: path.resolve(__dirname, 'build'),
        libraryTarget: 'umd',
        library: 'websockets'
    },

    mode: process.env.NODE_ENV || 'development',

    module: {
        rules: [ {
            test: /\.js$/,
            loader: 'babel-loader'
        } ]
    }
};
