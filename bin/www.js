require('dotenv').config()
const http = require('http');
const debug = require('debug')('node-app:server');
const app = require('../app');
class Server {
    constructor() {
        this.port = this._normalizePort(process.env.PORT || '3000');
        this.app = app;
        this.app.set('port', this.port);
        this.server = http.createServer(this.app);
    }
    start() {
        this.server.listen(this.port);
        this.server.on('error', this._onError.bind(this));
        this.server.on('listening', this._onListening.bind(this));
        console.log(`Server is running on port ${this.port}`);
    }
    _normalizePort(val) {
        const port = parseInt(val, 10);
        if (isNaN(port)) {
            return val;
        }
        if (port >= 0) {
            return port;
        }
        return false;
    }
    _onError(error) {
        if (error.syscall !== 'listen') {
            throw error;
        }
        const bind = typeof this.port === 'string' ?
            'Pipe ' + this.port :
            'Port ' + this.port;
        switch (error.code) {
            case 'EACCES':
                console.error(bind + ' requires elevated privileges');
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(bind + ' is already in use');
                process.exit(1);
                break;
            default:
                throw error;
        }
    }
    _onListening() {
        const addr = this.server.address();
        const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
        debug('Listening on ' + bind);
    }
}
const server = new Server();
server.start();