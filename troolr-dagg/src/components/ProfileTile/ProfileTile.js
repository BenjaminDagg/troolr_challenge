import React, { Component } from 'react';
import "./ProfileTile.css";

export class ProfileTile extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div  class="profile-container">
                <img src = "https://troolr.com/assets/graphics/logo-small.png" />
                <h4>Title</h4>
                <p>
                    this is info
                </p>
                <button>View Profile</button>
            </div>
        );
    }
}


