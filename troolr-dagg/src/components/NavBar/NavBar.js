import React, { Component } from 'react';
import "./NavBar.css";



/*
This component is the navigation bar at the
top of the home page
 */

export class NavBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {


        var style = {
            'background-color' : 'rgb(92, 184, 92)'
        };

        return (
            <div style={style} id="navbar">
                <ul class="list-horiz">
                    <li>
                        <a href='/'>Locations</a>
                    </li>
                    <li>
                        <a href="/categories">Categories</a>
                    </li>

                </ul>
            </div>
        );
    }
}


