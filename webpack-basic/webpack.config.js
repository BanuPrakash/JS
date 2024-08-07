let webpack = require('webpack'); //installed
let path = require('path'); // nodejs built-in

// configuration
module.exports = {
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
      }
}