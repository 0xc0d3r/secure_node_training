// Import events module
const EventEmitter = require('events');


// Delivers Synchronous error using throws
exports.useExchange1 = () => {
    throw new Error('Error processing the payment (1).');
};

// Delivers async error in a callback
exports.useExchange2 = (callback) => {
    // Async error passed as a first argument to the callback
    if (callback) {
        callback(new Error('Error processing the payment (2).'));
    }
};

// Delivers async error with Event Emitter
exports.useExchange3 = () => {

    // Create an eventEmitter object
    const eventEmitter = new EventEmitter();
    // Emit error event at a later time / asynchronously
    process.nextTick(() => eventEmitter.emit('error', new Error('Error processing the payment (3).')));
    // Retun event emitter to the caller
    return eventEmitter;

};

// Delivers async error with promises
exports.useExchange4 = () => {
    // Create an eventEmitter object
    const promise = new Promise((resolve, reject) => {
        process.nextTick(() => reject(new Error('Error processing the payment (4).')));
    });
    return promise;
};


exports.useExchange5 = () => {
    return 'Success processing the payment!';
};