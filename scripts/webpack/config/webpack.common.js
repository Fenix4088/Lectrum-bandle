const HtmlWebpackPlugin = require('html-webpack-plugin')
const {BUILD_DIR, SOURCE_DIR} = require("../constatnts");

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
        ]
    }
}