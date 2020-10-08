import React, { Component } from 'react';
import App from './App';

export default class Element extends Component {
    state = {
        hover: false
    };

    openInfo = () => {
        if (this.props.data.number)
            this.props.showInfo(this.props.data);
    };

    onMouseEnter = () => {
        let app = new App();
        app.selectElement(1);
        this.setState({ hover: true });
    };

    onMouseLeave = () => {
        this.setState({ hover: false });
    };

    render() {

        return (
            <div title={this.props.data.name} onClick={this.openInfo} onMouseLeave={this.onMouseLeave} className={`${this.props.data.number !== 0 ? `shadow element element-${this.props.data.number} ${this.props.data.category} ${this.state.hover ? 'active' : '' }` : '' }`}>
                <div className="number"><strong>{this.props.data.number ? this.props.data.number : ''}</strong></div>
                <div className="symbol">{this.props.data.symbol}</div>
            </div>
        );
    }
}
