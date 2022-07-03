const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BUILD_DIR, SOURCE_DIR } = require('../constatnts');
const webpack = require('webpack');
const env = require('postcss-preset-env')

/*
    Типы конфигов
    - Object
    - Function
    - Promise
*/
module.exports = () => {
  return {
    entry: [SOURCE_DIR],
    output: {
      path: BUILD_DIR,
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              compact: true // уберает лишние пробелы в js бандле
            },
          },
        },
        {
          //TODO: refactor styles loader
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[local]--[hash:base64:5]',
                },
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    // postcss plugins chain
                    env({
                      stage: 0, //default stage:2
                    }),
                  ],
                },
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './static/template.html',
        title: 'Learn Webpack',
        favicon: '',
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development'),
      }),
    ],
  };
};
