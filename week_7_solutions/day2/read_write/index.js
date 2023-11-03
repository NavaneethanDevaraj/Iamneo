const fs = require('fs');
const readline = require('readline');
const EventEmitter = require('events');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const file = 'input.txt';

const myEmitter = new EventEmitter();

const getUserInput = () => {
  rl.question('Enter data to be stored: ', (input) => {
    myEmitter.emit('dataEntered', input);
    rl.close();
  });
};

myEmitter.on('dataEntered', (input) => {
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, '');
  }
  
  fs.writeFile(file, input, (err) => {
    if (err) throw err;
    console.log('Data written to file.');

    setTimeout(() => {
      fs.readFile(file, 'utf8', (err, data) => {
        if (err) throw err;
        console.log('Data read from file:');
        console.log(data);
      });
    }, 2000);
  });
});

getUserInput();
