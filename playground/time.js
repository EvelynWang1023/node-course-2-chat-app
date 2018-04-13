var moment = require('moment');

// var date = new Date();

var data = moment();
data.add(1, 'year').subtract(9, 'months');
console.log(data.format("MMM Do, YYYY"));

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format("h:mm a"));