let webpack = require('webpack'); //installed
let path = require('path'); // nodejs built-in
const HtmlWebpackPlugin = require('html-webpack-plugin');

// configuration
module.exports = {
    "devtool": "cheap-module-source-map",
    "entry": './src/index.js',
    "output": {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.[contenthash:8].js'
    },
    module: {
     rules : [
        {
            test : /\.js(x)?$/,
            use: 'babel-loader'
        },
        // {
        //     'test' : /\.png$/,
        //     use: 'file-loader'
        // }
    ]
    },
    resolve: {
        extensions: [
          '.tsx',
          '.ts',
          '.jsx',
          '.js'
        ]
      },
      devServer: {
        port: 9000
      },
      plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public/index.html")
      })],
}