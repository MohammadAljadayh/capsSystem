'use strict';

const events = require('./event-pool'); 

//
require('./src/Vendor/vendor.js');
require('./src/Drivers/driver');


let time = new Date().toLocaleString();
events.on('pickup', payload => {
  console.log('EVENT:', {
      event: 'pickup',
      time: time,
      payload: payload,
  });
});


events.on('in-transit', payload => {
  console.log('EVENT:', {
      event: 'in-transit',
      time:time,
      payload: payload,

  });
});



events.on('delivered', payload => {
  console.log('EVENT:', {
      event: 'delivered',
      time:time,
      payload: payload,
    
  });
 
});