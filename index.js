var React = require('react');
import ReactDOM from 'react-dom';
import GridTable from './components/GridTable';

const props = {
  grids: [ {degree: 0}, {degree: 1}, {degree: 2}, {degree: 3}, {degree: 4}, {degree: 9} ]
}

ReactDOM.render(
  <GridTable {...props} />
, document.getElementById('app'));
