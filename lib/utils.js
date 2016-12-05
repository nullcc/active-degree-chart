const moment = require('moment');
require('moment-range');

// get all dates by year
const getDatesByYear = function(year) {
  const start = moment(new Date(year, 0, 1));
  const end = moment(new Date(year, 11, 31));
  let days = [];
  for (let date = moment(start); date.isBefore(end) || date.isSame(end); date = date.add(1, 'days')) {
    days.push(moment(date).format('YYYY-MM-DD'));
  }
  return days;
};

module.exports = {
  getDatesByYear
};
