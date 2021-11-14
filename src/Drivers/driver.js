
'use strict';
const events = require('../../event-pool');

events.on('pickup', payload => {
    setTimeout(() => {
        console.log(`DRIVER: picked up ${payload.orderID}`);
        events.emit('in-transit', payload);
    }, 2000);

    setTimeout(() => {
        console.log(`DRIVER: delivered up ${payload.orderID}`);
        events.emit('delivered', payload);
    }, 3000);
});


module.exports = events;