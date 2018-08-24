import React, { Component } from 'react';
import { ProfileTile} from "../ProfileTile/ProfileTile";
import './ProfileList.css';
import {CategoryTypes} from "../../models/CategoryTypes";

/*
This component recieves array of profile objects, creates
a ProfileTile component for each one, then displays them in
a grid
-props
    profiles: array of profile objects to display
    filter (string) : type of filter to sort  profile array by(top viewed or top rated)
 */

export class ProfileList extends Component {

    constructor(props) {
        super(props);

        this.sortProfiles = this.sortProfiles.bind(this);
        this.createTable = this.createTable.bind(this);
    };


    //sorts profiles by the currently
    //selected filter
    sortProfiles() {

        //if no profilee recieved or filter not set return empty array
        if (!this.props.profiles || !this.props.filter) {
            return [];
        }

        //determine which type of filter to apply
        switch(this.props.filter) {
            //sort by top viewed
            case 'Top Rated':
                var list = this.props.profiles.sort(function(a,b) {
                    return (a.averageRating < b.averageRating) ? 1 :((b.averageRating < a.averageRating) ? -1 : 0);
                });
                break;
            //sort by rating
            default:
                var list = this.props.profiles.sort(function(a,b) {
                    return (a.views.length < b.views.length) ? 1 :((b.views.length < a.views.length) ? -1 : 0);
                });
        }
    }


    //creates array of ProfileTitle components
    createTable() {

        this.sortProfiles()

        //iterate over each profile prop and create
        //a ProfileTitle component
        var list = this.props.profiles.map((profile) => {

            //checks if the profile is in te currently selected category
            if (this.props.categoryFilter != CategoryTypes.ALL) {
                //check if categories match
                if (profile.category == this.props.categoryFilter) {
                    return (<ProfileTile profile={profile}/>);
                }
            }
            //category set to ALL so display all
            else {
                return (<ProfileTile profile={profile}/>);
            }


        });

        //return array of ProfileTiles
        return list;
    }

    render() {

        //when profile objects passes as props create list
        var table = this.createTable();

        return (
            <div  id="list-container">
                {table}
            </div>
        );
    }
}


