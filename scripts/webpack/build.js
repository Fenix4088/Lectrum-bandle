//Core
const webpack = require('webpack')
const chalk = require('chalk') // Пакет для раскрашивания консоли

//Config
const getConfig = require('./config/webpack.prod')

const compiler = webpack(getConfig());

compiler.hooks.beforeRun.tap({name: 'start'}, () => {
    console.log('=> compilation started')
})

compiler.hooks.done.tap({name: 'start'}, () => {
    console.log('=> compilation completed')
})

compiler.run((error, stats) => {
    if (error) {
        // ошибка конфигурации
        console.error(error.stack || error);
        if (error.details) {
            console.error(error.details)
        }

        return null
    }

    const info = stats.toString({
        hash: true,
        colors: true,
        version: true,
        env: true,
        modules: false,
        entrypoints: false
    })

    console.log(chalk.greenBright('✅ Build completed'))
    console.log(info)

    if (stats.hasErrors()) {
        //ошибка во время компиляции
        console.log(chalk.redBright('⛔ Error'))
        console.error(info)
    }

    if (stats.hasWarnings()) {
        //варнинг во время компиляции
        console.log(chalk.yellowBright('⚠ Warning'))
        console.warn(info)
    }
});