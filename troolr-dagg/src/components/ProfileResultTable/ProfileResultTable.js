import React, { Component } from 'react';
import {ProfileList} from "../ProfileList/ProfileList";
import "./ProfileResultTable.css"
import {ProfileListFilter} from "../ProfileListFilter/ProfileListFilter";
import { FilterTypes} from "../../models/FilterTypes";
import { CategoryFilter } from "../CategoryFilter/CategoryFilter";
import { CategoryTypes } from "../../models/CategoryTypes";

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
            profileFilter: FilterTypes.TOP_RATED,
            categoryFilter: CategoryTypes.ALL
        };

        this.onFilterChanged = this.onFilterChanged.bind(this);
        this.onCategoryChanged = this.onCategoryChanged.bind(this);
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

    /*
    Callback called from CategoryFilter when user presses
    a category button. Passes value of the category button passed
    and updates state
     */
    onCategoryChanged(filter) {

        switch(filter) {
            case 'Home':
                this.setState({categoryFilter: CategoryTypes.HOME});
                break;
            case 'Wellness':
                this.setState({categoryFilter: CategoryTypes.WELLNESS});
                break;
            case 'Consulting':
                this.setState({categoryFilter: CategoryTypes.CONSULTING});
                break;
            case 'Automotive':
                this.setState({categoryFilter: CategoryTypes.AUTOMOTIVE});
                break;
            case 'Events':
                this.setState({categoryFilter: CategoryTypes.EVENTS});
                break;
            case 'Tech':
                this.setState({categoryFilter: CategoryTypes.TECH});
                break;
            case 'Pets':
                this.setState({categoryFilter: CategoryTypes.PETS});
                break;
            case 'Education':
                this.setState({categoryFilter: CategoryTypes.EDUCATION});
                break;
            default:
                this.setState({categoryFilter: CategoryTypes.ALL});
        }

    }

    render() {

        return (
            <div id="profile-page-container">
                <h3 id="result-header">Consulting in Valencia, Ca <span id="result-count">({this.props.profiles.length} Results)</span></h3>
                <ProfileListFilter onFilterChanged={this.onFilterChanged} filter={this.state.profileFilter}/>

                <ProfileList categoryFilter={this.state.categoryFilter} filter={this.state.profileFilter} profiles={this.props.profiles}/>
                <CategoryFilter onCategoryChanged={this.onCategoryChanged}/>
            </div>
        );
    }
}


