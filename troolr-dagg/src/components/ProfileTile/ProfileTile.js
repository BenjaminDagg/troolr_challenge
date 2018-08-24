import React, { Component } from 'react';
import "./ProfileTile.css";
import { StarRating} from "../StarRating/StarRating";

/*
This component displays a div to represent
a person's profile information
-props
    profile: profile object to display

 */

export class ProfileTile extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div  class="profile-container">
                <img src = {this.props.profile.profile_picture} />
                <h4>{this.props.profile.name}</h4>
                <p>
                    {this.props.profile.title}

                </p>
                <p>
                    {this.props.profile.address.city}, {this.props.profile.address.state}
                </p>
                <StarRating stars={this.props.profile.averageRating}/>
                <button>View Profile</button>
            </div>
        );
    }
}


