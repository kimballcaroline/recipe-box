const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
}, 
  module:{
     rules: [
    {
      // test: /\.jsx?/,
      test: /.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env','@babel/preset-react'], 
        }
      }
    },
    {
      // test: /\.scss$/i,
      test: /.(css|scss)$/,
      exclude: [/node_modules/, /client\/stylesheets\/modules/],
      use: ["style-loader", "css-loader", "sass-loader"],
    },
    {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource'
    }
  ]
} ,
devServer: {
    static: {
      directory: path.resolve(__dirname, './dist'),
    },
    // devMiddleware:{publicPath: '/'},
    host: 'localhost',
    port: 8080,
    hot: true,
    proxy: {
      // '/': 'http://localhost:3000/',
    '/api/**': 'http://localhost:3000/',
    // '/recipe/**': 'http://localhost:3000/',
  },
    headers: {'Access-Control-Allow-Origin': '*'},
},
plugins: [
  new HtmlWebpackPlugin({
    template: "./client/index.html",
  }),
],
}