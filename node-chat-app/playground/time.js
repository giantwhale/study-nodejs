// Jan 1st 1970 00:00:00 am (UTC)

const moment = require('moment');


var date = moment();
date.add(100, 'year').subtract(9, 'month');
console.log(date.format('MMM Do, YYYY'));

