const React = require('react');
import ReactDOM from 'react-dom';
import GridTable from './components/GridTable';
import {getDatesByYear} from './lib/utils';

const year = 2016;
const dates = getDatesByYear(year);

const grids = dates.map(function(date, index){
  return {degree: Math.floor(Math.random()*5), date: date};
});

const props = {
  grids
}

ReactDOM.render(
  <GridTable {...props} />
, document.getElementById('app'));
