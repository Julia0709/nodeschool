'use strict';

const fs = require('fs');

fs.readFile(process.argv[2], (err, data) => {
  const paragraphs = data.toString().split('\n');
  console.log(paragraphs.length - 1);
});
