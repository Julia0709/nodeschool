'use strict';

const mymodule = require('./mymodule');

const [, , dirname, ex] = process.argv;
mymodule(dirname, ex, (err, names) => {
  if (err) {
    return console.error(err);
  }
  names.forEach(name => console.log(name));
});
