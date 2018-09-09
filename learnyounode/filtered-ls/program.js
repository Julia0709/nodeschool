'use strict';

const fs = require('fs');

const [, , dirname, extention] = process.argv;
fs.readdir(dirname, (err, names) => {
  names
    .filter(name => new RegExp(`.${extention}`).test(name))
    .forEach(l => console.log(l));
});
