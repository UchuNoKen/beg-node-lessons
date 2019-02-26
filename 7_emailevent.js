const emitter = require('./modules/sendEmail');

emitter.on('emailEvent', (message) => {
    console.log(`Email: ${message}`);
});

emitter.emit('emailEvent', 'Send activation email');