const path =require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals =require('webpack-node-externals');

const config = {
    //Building bundle for node application 
    target: 'node',

    //tell webpack the root of file on server application

    entry: './src/index.js',

    //Tells webpack where to place output file

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')

    },

    externals:[webpackNodeExternals()]

};

module.exports = merge(baseConfig,config);