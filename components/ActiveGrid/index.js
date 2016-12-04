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
        switch (this.props.grid.level) {
          case 0: {
            return 'grid_level_0';
          }
          case 1: {
            return 'grid_level_1';
          }
          case 2: {
            return 'grid_level_2';
          }
          case 3: {
            return 'grid_level_3';
          }
          case 4: {
            return 'grid_level_4';
          }
          default:
            return '';
        }
    }

    render() {
        return (
          <div className="grid">
            <span className="hint--top grid_hint" aria-label={ `${this.props.grid.level || 'No'} contributions` } >
              <div className={ this.getGridLevel() }></div>
            </span>
          </div>
        );
    }
};
