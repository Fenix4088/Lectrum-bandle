const {resolve} = require('path')
const  {path: PROJECT_ROOT} = require('app-root-path')

const BUILD_DIR = resolve(PROJECT_ROOT, './build')
const SOURCE_DIR = resolve(PROJECT_ROOT, './src')
const HOST = 'localhost'
const PORT = 3000

module.exports = {
    BUILD_DIR,
    PROJECT_ROOT,
    SOURCE_DIR,
    HOST,
    PORT
}