var webpack = require('webpack');
module.exports = {
    context: __dirname + '/src',
    entry: {
        app: './index.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: "bundle.js"
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                // presets: ['@babel/preset-env']
              }
            }
          },
          {
            test: /\.css$/,
            use: [
                { loader: "style-loader" },
                { loader: "css-loader" },
              ],
          },
          {
            test: /\.(html)$/,
            use: {
              loader: 'html-loader',
              options: {
                attrs: [':data-src']
              }
            }
          }
        ]
      }
}