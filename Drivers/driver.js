
'use strict';

const io = require('socket.io-client');
const host = 'http://localhost:3000';
const connectionToCaps = io.connect(`${host}/caps`);

connectionToCaps.emit('getAll');

connectionToCaps.on('pickup', payload => {

 
    connectionToCaps.emit('received', payload.orderId);
    console.log(`DRIVER: will get the order :${payload.orderID}`);

    setTimeout(() => {
        console.log(`DRIVER: picked up ${payload.orderID}`);
        connectionToCaps.emit('in-transit', payload);
    }, 2000);

    setTimeout(() => {
        console.log(`DRIVER: delivered up ${payload.orderID}`);
        connectionToCaps.emit('delivered', payload);
    }, 3000);
});


