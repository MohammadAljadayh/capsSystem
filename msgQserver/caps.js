'use strict';

const PORT = process.env.PORT || 3000;
const io = require('socket.io')(PORT);
const caps = io.of('/caps');


let time = new Date().toLocaleString();

caps.on('connection', (socket) => {

  socket.on('pickup', payload => {
  console.log('EVENT:', {
      event: 'pickup',
      time: time,
      payload: payload,
  });
  
});


socket.on('in-transit', payload => {
  console.log('EVENT:', {
      event: 'in-transit',
      time:time,
      payload: payload,

  });

});



socket.on('delivered', payload => {
  console.log('EVENT:', {
      event: 'delivered',
      time:time,
      payload: payload,
    
  });
  
})
});

module.exports = caps