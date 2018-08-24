import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { profiles } from "../../models/profiles";
import "./ProfileDetails.css";

/*
This component is the navigation bar at the
top of the home page
 */

export class ProfileDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            profile: null
        };

        this.getProfile = this.getProfile.bind(this);
    }

    componentDidMount() {
        var profileId = this.props.match.params.id;
        console.log('id = ' + profileId);
        for (var i = 0; i < profiles.length;i++) {
            if (parseInt(profiles[i].id) == profileId) {
                console.log('found progile');
                this.setState({profile: profiles[i]});
            }
        }
    }


    getProfile() {
        if (this.state.profile == null) {
            return (
                <div>
                    Loading...
                </div>
            )
        }
        else {
            return (
                <div>
                    {this.state.profile.url}
                </div>
            )
        }
    }

    render() {

        var profile = this.getProfile();

        return (
            <div id="profile-details">
                {profile}
            </div>
        );
    }
}


