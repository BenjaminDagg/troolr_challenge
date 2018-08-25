import React, { Component } from 'react';
import "./ProfileDetailsSwitch.css";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';



/*
This component is the button at the top of
the ProfileDetails page that allows the user to switch
between viewing a users profile and a users reviews by
routing to the appropriate page
-props
    profile: users profile to send their id to next page
 */

export class ProfileDetailsSwitch extends Component {

    constructor(props) {
        super(props);
    }



    render() {

        var profileURL = "/profile/" + this.props.profile.id;
        var reviewsURL = profileURL + "/reviews";

        return (
            <div  id="profile-switch-container">
                <a href={profileURL} >
                    <button  className="switch-btn" id="profile-switch-btn">&#x1f464; Profile</button>
                </a>
                <a href={reviewsURL} >
                    <button class="switch-btn" id="review-switch-btn">&#x2605; Reviews</button>
                </a>
            </div>
        );


    }
}


