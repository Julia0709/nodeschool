'use strict';

const fs = require('fs');

const paragraphs = fs
  .readFileSync(process.argv[2])
  .toString()
  .split('\n');

console.log(paragraphs.length - 1);
