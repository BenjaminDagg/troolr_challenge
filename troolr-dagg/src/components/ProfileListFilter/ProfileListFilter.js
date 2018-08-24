import React, { Component } from 'react';
import { FilterTypes } from "../../models/FilterTypes";


/*
This component is a drop down selector that allows the user
to sort the list of profiles in different ways
-props
    onFilterChange(newFilterType: string): callback to parent to pass newly selected filter
    filter: FilterType: currently selected filter
 */

export class ProfileListFilter extends Component {

    constructor(props) {
        super(props);

        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    /*
    Handles event created when user selects option from drop down.
    Called parent callback to change parents state to new filter type
     */
    handleFilterChange(event) {
        //calling parent callback passed as a prop
        this.props.onFilterChanged(event.target.value);
    }

    render() {


        return (
            <div  id="list-filter">
                <select value={this.props.filters} onChange={this.handleFilterChange}>
                    <option>Sort By ({this.props.filter})</option>
                    <option value={FilterTypes.TOP_RATED}>{FilterTypes.TOP_RATED}</option>
                    <option value = {FilterTypes.VIEW_COUNT}>{FilterTypes.VIEW_COUNT}</option>
                </select>
            </div>
        );
    }
}


