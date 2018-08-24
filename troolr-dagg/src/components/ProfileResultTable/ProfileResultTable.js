import React, { Component } from 'react';
import {ProfileList} from "../ProfileList/ProfileList";
import "./ProfileResultTable.css"
import {ProfileListFilter} from "../ProfileListFilter/ProfileListFilter";
import { FilterTypes} from "../../models/FilterTypes";

/*
This component is thhe complete profile viewing page.
It holds the ProfileList, TableFilter, and CategoryFilter
components
-props
    profiles: array of profile objects
 */

export class ProfileResultTable extends Component {

    constructor(props) {
        super(props);

        this.state = {
            profileFilter: FilterTypes.TOP_RATED
        };

        this.onFilterChanged = this.onFilterChanged.bind(this);
    }

    /*
    Callback called in ProfileListFiler.
    When user selects filter type, passess the new
    type to this component and updates its state
     */
    onFilterChanged(filter) {

        switch(filter) {
            case 'Top Rated':
                this.setState({profileFilter: FilterTypes.TOP_RATED});
                break;
            case 'View Count':
                this.setState({profileFilter: FilterTypes.VIEW_COUNT});
                break;
            default:
                console.log("Error in changing profile filter type");

        }
    }

    render() {

        return (
            <div id="profile-page-container">
                <ProfileListFilter onFilterChanged={this.onFilterChanged} filter={this.state.profileFilter}/>
                <ProfileList filter={this.state.profileFilter} profiles={this.props.profiles}/>
            </div>
        );
    }
}


