import React, { Component } from 'react';
import "./NavBar.css";



/*
This component is the navigation bar at the
top of the home page
-props: none
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
                <ul class="navbar-list">
                    <li class="navbar-item">
                        <a href='/'>Locations</a>
                    </li>
                    <li class="navbar-item">
                        <a href="/categories">Categories</a>
                    </li>

                </ul>
            </div>
        );
    }
}


