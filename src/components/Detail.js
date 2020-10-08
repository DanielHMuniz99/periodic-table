import React, { Component } from 'react';
import App from './App';

export default class Detail extends Component {

    render() {

        return (
            <div id="element-box" className={this.props.data.category}  >
                {this.props.data.symbol}
            </div>
        );
    }
}