const Emitter = require('events');
const eventConfig = require('./config').events;
const em = new Emitter();

em.on(eventConfig.GREET, () => {
    console.log('SomeWhere, someone said heelo.');
});

em.on(eventConfig.GREET, () => {
    console.log('A Greeting occurred!');
});

em.emit(eventConfig.GREET);