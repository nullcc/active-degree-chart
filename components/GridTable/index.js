"use strict";

import React from 'react';
import "./stylesheets/grid_table.css"
import ActiveGrid from '../ActiveGrid';

export default class GridTable extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        rows: 6,
        cols: 10
      };
    }

    componentDidMount() {

    };

    componentWillUnmount() {

    };

    renderGrids(rows) {
      let grids = [];
      let col = [];
      for (let i  = 0; i < this.props.grids.length; i += 1) {
        const grid = this.props.grids[i];
        col.push(
          <ActiveGrid grid={grid}/>
        );
        if ((i + 1) % rows === 0) {
          grids.push(<span className="grid_col">{ col }</span>);
          col = [];
        }
      }
      grids.push(<span className="grid_col">{ col }</span>);
      return grids;
    }

    render() {
      return (
        <div>
          <div className='grid_table'>
            { this.renderGrids(this.state.rows) }
            <div style={{ 'clear':'both' }}></div>
          </div>
        </div>
      );
    }
};
