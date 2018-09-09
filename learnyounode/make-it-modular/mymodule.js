'use strict';

const fs = require('fs');
const path = require('path');

module.exports = (dirname, ex, callback) => {
  fs.readdir(dirname, (err, names) => {
    if (err) {
      return callback(err);
    }
    const data = names.filter(name => path.extname(name) === `.${ex}`);
    callback(null, data);
  });
};
