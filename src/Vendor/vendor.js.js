'use strict';

const events = require('../../event-pool');
const faker = require('faker');

setInterval(() => {
  let customerOrder = {
    store:'1-206-flowers',
    orderID: faker.datatype.uuid(),
    customer: faker.name.findName(),
    address: faker.address.streetAddress(),
};
  // we are calling, firing that event
  console.log('----------------------');
  // .emit is a method used t o fire event
  events.emit('pickup', customerOrder);
  console.log('----------------------');

},4000);

events.on('delivered', payload => {

  console.log(` VENDOR: Thank you for delivering  ${payload.orderID}`);
});

module.exports = events;