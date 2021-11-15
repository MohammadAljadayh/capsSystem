'use strict';

const socket = require('../caps/caps');

let payload = {
    store: '1-206-flowers',
    orderID: 'cd673a0c-14a2-417d-bec3-ee75009b74d8',
    customer: 'Willie Rutherford',
    address: '18662 Mollie Ridge'
};

jest.useFakeTimers();

describe('caps System test', () => {

    it('caps pickup ', () => {
        const caps = require('../caps');
       socket.emit('pickup', payload);
        expect(socket.emit('pickup', payload)).toEqual(true);
    });

    it('caps in-transit', () => {
        const caps = require('../caps');
        socket.emit('in-transit', payload);
        expect( socket.emit('in-transit', payload)).toEqual(true);
    });

    it('caps delivered', () => {
        const caps = require('../caps');
        socket.emit('delivered', payload);
        expect(socket.emit('delivered', payload)).toEqual(true);
    });


});

