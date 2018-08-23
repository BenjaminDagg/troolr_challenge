import React, { Component } from 'react';
import './Logo.css';

/*
This component is the troolr logo. When clicked
returns to the home page

-props: none
 */

export class Logo extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div id="home-logo">
                <a href="/">
                    <img style={{'height':'auto', 'width':'150px'}} src="https://troolr.com/assets/graphics/logo-small.png" />
                </a>
            </div>
        );
    }
}


