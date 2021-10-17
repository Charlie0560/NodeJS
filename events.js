const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('WaterFull', () => {
  console.log('Please turn of the motor!');
  setTimeout(() => {
      console.log('Please turn of the motor! Its a gentle reminder');
  }, 3000);
});
console.log("the script is running");
console.log("the script is still running");

myEmitter.emit('WaterFull');