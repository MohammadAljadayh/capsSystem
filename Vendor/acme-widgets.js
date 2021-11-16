'use strict';


const faker = require('faker');
const io = require('socket.io-client');
const host = 'http://localhost:3000';
const connectionToCaps = io.connect(`${host}/caps`);



setInterval(() => {
  let customerOrder = {
    store:'acme-widgets',
    orderID: faker.datatype.uuid(),
    customer: faker.name.findName(),
    address: faker.address.streetAddress(),
};
 
  console.log('----------------------');

  connectionToCaps.emit('pickup', customerOrder);
  console.log('----------------------');

},4000);

connectionToCaps.on('delivered', payload => {

  console.log(` VENDOR: Thank you for delivering  ${payload.orderID}`);
});

connectionToCaps.on('orderinQueue',payload=> {

  console.log(`VENDOR: Order in Queue : ${payload.orderID} `);

});

module.exports = connectionToCaps;