import React, { Component } from 'react';
import "./Profile.css";
import { StarRating } from "../StarRating/StarRating";


/*
This component displays a users profile information in a clean div
-props
    profile: profile object to display
 */

export class Profile extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        var reviewURL = '/profile/' + this.props.profile.id + '/reviews';

        return (
            <div id="profile-content">
                <div id="profile-header">

                </div>

                <div id="profile-info">
                    <div id="rating">
                        <StarRating stars={this.props.profile.averageRating}/>
                        <span id="rating-count">{this.props.profile.reviews.length} Reviews</span>

                        <a href={reviewURL}>View All Reviews</a>
                        <h2>{this.props.profile.name}</h2>
                        <p>{this.props.profile.address.city}, {this.props.profile.address.state}</p>
                    </div>
                </div>
                <div class="image-box">
                    <img id="profile-img" src={this.props.profile.profile_picture} />
                </div>
            </div>
        );
    }
}


