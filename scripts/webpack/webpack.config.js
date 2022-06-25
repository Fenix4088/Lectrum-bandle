const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const {BUILD_DIR, PROJECT_ROOT, SOURCE_DIR} = require("./constatnts");

/*
    Типы конфигов
    - Object
    - Function
    - Promise
*/
module.exports = () => {
    return {
        mode: "none",
        devtool: false,
        entry: SOURCE_DIR,
        output: {
            path: BUILD_DIR,
            filename: "bundle.js"
        },
        module: {
            rules: [
                {
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
            new CleanWebpackPlugin({
                root: PROJECT_ROOT,
                verbose: true,
                protectWebpackAssets: true,
                cleanAfterEveryBuildPatterns: BUILD_DIR
            })
        ]
    }
}