import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { profiles } from "../../models/profiles";
import "./ProfileDetails.css";
import {ProfileResultTable} from "../ProfileResultTable/ProfileResultTable";
import { Profile} from "../Profile/Profile";
import { ProfileReviews} from "../ProfileReviews/ProfileReviews";
import { ProfileDetailsSwitch} from "../ProfileDetailsSwitch/ProfileDetailsSwitch";
import { ProfileDetailsSideBar} from "../ProfileDetailsSideBar/ProfileDetailsSideBar";

/*
This component is landing page for a users profile
By default displays profile information, but contains
router to switch to user reviews
-props
    id: profile id passed in from url parameter
-children
    Profile
    ProfilrReviews
    ProfileDetailsSwitch
    ProfileDetailsSideBar
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

        //get id passed in from url parameters
        var profileId = this.props.match.params.id;

        //find the profile object for the given id
        for (var i = 0; i < profiles.length;i++) {
            if (parseInt(profiles[i].id) == profileId) {

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
                {this.state.profile != null &&
                    <ProfileDetailsSwitch profile={this.state.profile}/>

                }
                {this.state.profile != null &&
                    <ProfileDetailsSideBar profile={this.state.profile}/>
                }

                <Router>
                    <div>
                        {this.state.profile != null &&
                            <Route exact path="/profile/:id" render={() => <Profile profile={this.state.profile}/>}/>
                        }
                        {this.state.profile != null &&
                        <Route  path="/profile/:id/reviews" render={()=><ProfileReviews reviews={this.state.profile.reviews}/>} />
                        }

                    </div>
                </Router>

            </div>
        );
    }
}


