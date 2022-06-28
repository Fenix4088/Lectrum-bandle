/*
Настраиваем Dev Server через ноду
    1. Webpack 🕸
    2. webpack-dev-server (express + webpack-dev-middleware + a lot of helpers)
    3. webpack-hot-middleware - что бы работал hot reload
    4. конфигурация
    5. создать компайлер webpack
    6. запуск
* */

//Core
const webpack = require('webpack')
const DevServer = require('webpack-dev-server')
const hot = require('webpack-hot-middleware')
const chalk = require('chalk') // Пакет для раскрашивания консоли


//Config
const getConfig = require('./webpack.config')

//Constants
const {HOST, PORT} = require('./constatnts')
const {getPort} = require("./getPort");

const compiler = webpack(getConfig());


getPort(PORT).then(port => {
    if (port) {
        const server = new DevServer({
            host: HOST,
            port,
            historyApiFallback: true,
            open: true,
            onAfterSetupMiddleware: (devServer) => {
                devServer.app.use(hot(compiler, {
                    log: false
                }))
            },
            onListening: (devServer) => {
                console.log(`${chalk.greenBright('➡ Server listen on ')} ${chalk.blueBright(`http://${HOST}:${port}`)}`)
            },
            client: {
                overlay: true,
                logging: 'none',
                progress: true
            }
        }, compiler)

        server.start()
    }
})



