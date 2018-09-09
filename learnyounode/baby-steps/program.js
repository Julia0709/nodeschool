'use strict';

const nums = process.argv.slice(2).map(Number);
const sum = nums.reduce((sum, num) => sum + Number(num), 0);

console.log(sum);
