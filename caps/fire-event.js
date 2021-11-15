'use strict';

const io = require('socket.io-client');

const host = 'http://localhost:3000';

const caps = io.connect(`${host}/caps`);

caps.emit('pickup', payload);
caps.emit('in-transit', payload);
caps.emit('delivered', payload);

