"use strict";

import React from 'react';
import "./stylesheets/active_grid.css"
import "../../stylesheets/hint.min.css"

export default class ActiveGrid extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    };

    componentWillUnmount() {

    };

    getGridLevel() {
      const degree = this.props.grid.degree;
        switch (true) {
          case degree === 0: {
            return 'grid_level_0';
          }
          case degree === 1: {
            return 'grid_level_1';
          }
          case degree === 2: {
            return 'grid_level_2';
          }
          case degree === 3: {
            return 'grid_level_3';
          }
          case degree >= 4: {
            return 'grid_level_4';
          }
          default:
            return '';
        }
    }

    render() {
        return (
          <div className="grid">
            <span className="hint--top grid_hint" aria-label={ `${this.props.grid.degree || 'No'} contributions` } >
              <div className={ this.getGridLevel() }></div>
            </span>
          </div>
        );
    }
};
