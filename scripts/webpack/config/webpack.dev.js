const {merge} = require('webpack-merge');
//Common config
const getConfig = require('./webpack.common')

module.exports = () => {
    return merge(getConfig(),{
        mode: "none",
        devtool: false, //TODO: configure source maps
        entry: ['webpack-hot-middleware/client?reload=true&quite=true'],
        // module: {
        //     rules: [
        //         {
        //             test: /\.css$/,
        //             use: ['style-loader', 'css-loader']
        //         }
        //     ]
        // },
        plugins: []
    })
}