import React, { Component } from 'react';
import axios from 'axios';

import Element from './Element';

import { FaDiscord, FaEnvelope, FaLinkedin, FaGitlab } from 'react-icons/fa';

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


// import Detail from './Detail';

import radio from './images/radio.png';
import { Row, Col, Container } from 'reactstrap';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            buttonClicked: false,
            modal: false,
            element: {
                name: "",
                summary: "",
                symbol: "",
                category: "",
                number: "",
                source: "",
                appearance: "",
                atomic_mass: "",
                molar_heat: "",
                density: "",
                melt: "",
                boil: "",
                radioactive: false,
                shells: []
            },
            elementsEN: [],
            elementsPT: [],
            title: "Titulo",
            subtitle: "subtitle",
            languague: "en",
            cell: []
        };

    }

    showInfo = (data) => {
        this.setState({ showInfo: true, element: data, modal: !this.state.modal});
    };

    getElements = () => {

        axios.get('http://localhost:4000/elements/')
            .then((res) => {
                this.setState({
                    cell: this.mountElements(res.data[0].elements)
                })
            })
            .catch((error) => {
                console.log(error);
            }
        )

    }

    mountElements = (data) => {

        let cell = []
        let shells = []
        let radioactive = []
        let key = 0;
        let elementShells = this.state.element.shells;

        if (this.state.element.radioactive)
            radioactive.push(<img key={this.state.element.number} className="icon" alt="Radioactive" src={radio} />)

        if (elementShells) {
            for (let shell = 0; shell < elementShells.length; shell++)
            shells.push(<div key={shell}>{elementShells[shell]}</div>)
        }

        for (let index = 0; index < data.length; index++, key++)
            cell.push(<Element showInfo={this.showInfo} data={data[index]} key={key} />)
        
        return cell;
    }

    componentDidMount()
    {
        this.getElements()
    }
    
    render() {

        return (
            <div>
                <header className="header"> 
                    <Container>
                        <Row>
                            <Col xs="12">
                                <h1>{this.state.title}</h1>
                            </Col>
                        </Row>
                    </Container>    
                </header>
                <div className="wrapper">
                    <Row>
                        <Col xs="12">
                            <div id="table">
                                {this.state.cell}

                                <div id="element-box" className={this.state.element.category ? `shadow ${this.state.element.category}` : ''} >
                                    <Row>
                                        <Col xs="8">
                                            <Col xs="7">
                                                <div className="symbol">
                                                    {this.state.element.symbol}
                                                </div>
                                            </Col>
                                            <Col xs="5">
                                                <div className="number">
                                                    {this.state.element.number}
                                                </div>
                                            </Col>
                                            <Col xs="12">
                                                <div className="element-name">
                                                    {this.state.element.name}
                                                </div>
                                            </Col>
                                        </Col>
                                        <Col xs="4">
                                            <div id="shells">
                                                {/* {shells} */}
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div id="information">
                                    {this.state.element.summary}
                                </div>
                                <div id="details" className="mt-2">
                                    <span className={`shadow mr-2 badge badge-pill ${this.state.element.category}`}>
                                        {this.state.element.category}
                                    </span> 
                                    <span className={`shadow mr-2 badge ${this.state.element.category} badge-pill`}>
                                        {this.state.element.phase}
                                    </span>
                                    <span className="badge badge-pill">
                                        {/* {radioactive} */}
                                    </span>
                                </div> 
                            </div>
                        </Col>
                    </Row>
                </div>

                <footer className="footer">
                    <Container>
                        <Row>
                            <Col className="mt-4" xs="5">
                                <h5>
                                    Periodic Table of Elements and their respective categories. For suggestions contact me
                                </h5>
                                </Col>
                            <Col xs="2"></Col>
                            <Col className="mt-4" xs="5">
                                <h4>
                                    <FaDiscord className="mr-3" /> 
                                    <FaEnvelope className="mr-3" /> 
                                    <FaLinkedin className="mr-3" /> 
                                    <FaGitlab className="mr-3" /> 
                                </h4>
                                <small className="text-small">daniel.muniz997@gmail.com</small>
                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col xs="12">
                                <div className="text-center">Copyright @2019 | <small className="">{this.state.subtitle}Daniel Muniz</small></div>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </div>
        );
    }
}

export default App;
