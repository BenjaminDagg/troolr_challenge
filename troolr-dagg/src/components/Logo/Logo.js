import React, { Component } from 'react';
import './Logo.css';

/*
This component is the troolr logo. When clicked
returns to the home page

 */

export class Logo extends Component {
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


