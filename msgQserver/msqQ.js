'use strict';


const PORT = process.env.PORT || 3000;
const io = require('socket.io')(PORT);
const caps = io.of('/caps');
const uuid = require('uuid').v4
const messageQueue = {
  Queue: {}
}

let time = new Date().toLocaleString();

caps.on('connection', (socket) => {
  console.log("CONNECTED to queue-server", socket.id);
  socket.on('pickup', payload => {
  console.log('EVENT:', {
      event: 'pickup',
      time: time,
      payload: payload,
  });
  console.log(`Driver: picked up ${payload.orderId}`);
  const id = uuid()
  messageQueue.Queue[id] = payload;
  console.log('after adding task Msg Q >>',  messageQueue);

  socket.emit('orderinQueue', payload)
  caps.emit('forPickup', { id:id, payload: messageQueue.Queue[id] });

  caps.emit('in-transit', payload)
  caps.emit('pickup', payload)

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
  caps.emit('delivered', payload);

})
socket.on('received', id => {
  delete messageQueue.Queue[id];
  console.log('after deleting the task from Msg Q >>', messageQueue);

});
socket.on('getAll',()=>{
  console.log('get all the Queue ');
  Object.keys(messageQueue.Queue).forEach(id=>{
      socket.emit('pickup',{id:id, payload: messageQueue.Queue[id]})
  })
})
})