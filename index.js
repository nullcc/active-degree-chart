const React = require('react');
import ReactDOM from 'react-dom';
import GridTable from './components/GridTable';
import {getDatesByYear} from './lib/utils';

function renderGridByYear(year) {
  const dates = getDatesByYear(year);
  const grids = dates.map(function(date, index) {
    return {degree: Math.floor(Math.random() * 5), date: date};
  });
  const props = {
    grids
  }

  ReactDOM.render(
    <div>
      <input className='year_btn' type='button' value='2015' onClick={ ()=>{renderGridByYear(2015)}} />
      <input className='year_btn' type='button' value='2016' onClick={ ()=>{renderGridByYear(2016)}} />
    </div>
  , document.getElementById('year_btn'));


  ReactDOM.render(
    <GridTable {...props} />
  , document.getElementById('app'));
}

renderGridByYear(2016);
