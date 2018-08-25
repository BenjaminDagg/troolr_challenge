import React, { Component } from 'react';
import "./ProfileDetailsSideBar.css";



/*
This component is the sidebar of the ProfileDetails component
to display a users contact information and stats
-props
    profile: the profile to display
 */

export class ProfileDetailsSideBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {




        return (
            <div  id="profile-sidebar">
                <div class="sidebar-item">
                    <h3 className="sidebar-header">Contact</h3>
                    <button className="sidebar-contact-btn"> &#9993; Email</button>
                    <button className="sidebar-contact-btn"> &#9742; Phone</button>

                </div>


                <div class="sidebar-item">
                    <hr/>
                    <h3 className="sidebar-header">Links</h3>
                    <span> &#128187;website</span>

                </div>

                 <div class="sidebar-item">
                     <hr/>
                     <h3 className="sidebar-header">Share this profile</h3>

                 </div>

                 <div class="sidebar-item">
                     <hr/>
                     <h3 className="sidebar-header">Stats</h3>
                     <span>&#x1f464; Profile Views: {this.props.profile.views.length}</span>
                     <br/>
                     <br/>
                     <span>&#x2605; Reviews: {this.props.profile.reviews.length}</span>
                 </div>
            </div>
        );
    }
}


