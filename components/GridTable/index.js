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

    renderGrids() {
      var grids = [];
      this.props.grids.forEach(function(grid){
        grids.push(
          <ActiveGrid grid={grid}/>
        );
      });
      return grids;
    }

    render() {

        return (
            <div className='grid_table'>
              { this.renderGrids() }
            </div>
        );
    }
};
