const net = require('net')
const server = net.createServer();

//TODO: modify this custom util to ask user about port changing

let PORT;

async function checkServer(port) {
    server.once('error',  (err) => {
        if(err.code === 'EADDRINUSE') {
            checkServer(port + 1)
        }
    })
    server.once('listening', function() {
        PORT = port;
        server.close();
    });

    server.listen(port)
}

async function getPort(port) {
    await checkServer(port)

    return PORT
}

module.exports = {getPort}