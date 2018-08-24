import React, { Component } from 'react';
import { FilterTypes } from "../../models/FilterTypes";
import "./ProfileListFilter.css"

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

        this.state = {
            filtersVisible: false
        };

        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.toggleFilters = this.toggleFilters.bind(this);
    }

    /*
    Handles event created when user selects option from drop down.
    Called parent callback to change parents state to new filter type
     */
    handleFilterChange(event) {
        //calling parent callback passed as a prop
        this.props.onFilterChanged(event.target.value);

        this.toggleFilters();
    }

    toggleFilters() {
        if (!this.state.filtersVisible) {
            document.getElementById('filters').style.display = "block";
            this.setState({filtersVisible: true});
        }
        else {
            document.getElementById('filters').style.display = "none";
            this.setState({filtersVisible: false});
        }
    }

    render() {

        /*
        return (
            <div  id="list-filter">
                <select id="filter" value={this.props.filters} onChange={this.handleFilterChange}>
                    <option class="filter-option">Sort By ({this.props.filter})</option>
                    <option class="filter-option" value={FilterTypes.TOP_RATED}>{FilterTypes.TOP_RATED}</option>
                    <option class="filter-option" value = {FilterTypes.VIEW_COUNT}>{FilterTypes.VIEW_COUNT}</option>
                </select>
            </div>
        );
        */
        return (
            <div id="list-filter">
                <button onClick={this.toggleFilters} id="filterbtn">Sort by ({this.props.filter}) &#9660;</button>
                <div id="filters">
                    <button class="dropdown-btn" onClick={this.handleFilterChange} value={FilterTypes.TOP_RATED}>Top Rated</button>
                    <br/>
                    <button class="dropdown-btn" onClick={this.handleFilterChange} value={FilterTypes.VIEW_COUNT} >Most Viewed</button>
                </div>
            </div>
        );
    }
}


