const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const {BUILD_DIR, PROJECT_ROOT, SOURCE_DIR} = require("../constatnts");
const {merge} = require('webpack-merge');
//Common config
const getConfig = require('./webpack.common')

module.exports = () => {
    return merge(getConfig(),{
        mode: "none",
        devtool: false,
        // entry: [SOURCE_DIR],
        // module: {
        //     rules: [
        //         {
        //             test: /\.css$/,
        //             use: ['style-loader', 'css-loader']
        //         }
        //     ]
        // },
        plugins: [
            new CleanWebpackPlugin({
                root: PROJECT_ROOT,
                verbose: true,
                protectWebpackAssets: true,
                cleanAfterEveryBuildPatterns: BUILD_DIR
            })
        ]
    })
}