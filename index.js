var React = require('react');
import ReactDOM from 'react-dom';
import GridTable from './components/GridTable';

const props = {
  grids: [ {level: 0}, {level: 1}, {level: 2}, {level: 3}, {level: 4} ]
}

ReactDOM.render(
  <GridTable {...props} />
, document.getElementById('app'));
