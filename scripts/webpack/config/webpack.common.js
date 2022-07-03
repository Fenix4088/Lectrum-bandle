const HtmlWebpackPlugin = require('html-webpack-plugin')
const {BUILD_DIR, SOURCE_DIR} = require("../constatnts");
const webpack = require("webpack");

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
            filename: "bundle.js"
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: {
                        loader: 'babel-loader'
                    },
                },
                { //TODO: refactor styles loader
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./static/template.html",
                title: "Learn Webpack",
                favicon: ""
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('development')
            })
        ]
    }
}