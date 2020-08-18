const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.[contentHash].js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html"
    }),
    new HtmlWebpackInlineSVGPlugin(),
    new CopyPlugin({
      patterns: [
        { from: 'src/icons/*', to: 'icons', flatten: true },
        { from: 'assets/*', to: 'assets', flatten: true },
        //{ from: 'src/fonts/roboto-v20-latin/*', to: 'fonts', flatten: true },
      ]
    }),
    new webpack.DefinePlugin({
      "process.env.SO_ID": JSON.stringify(process.env.SO_ID),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'raw-loader',
          {
            loader:'sass-loader',
            options: {
              sassOptions:{
                includePaths: [path.resolve(__dirname, 'node_modules')]
              }
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
    ]
  },
  resolve: {
    alias: {
      Components: path.resolve(__dirname, 'src/components'),
      //Icons: path.resolve(__dirname, 'src/icons'),
      Fonts: path.resolve(__dirname, 'src/fonts'),
    }
  }
};


