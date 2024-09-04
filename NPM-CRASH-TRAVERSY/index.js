const _ = require('lodash');

const numbers = [1,2,3,4,5,6];

_.each(numbers, (num,i) =>{
  console.log(i, num)
})