import React, { Component } from 'react';
import "./CategoryFilter.css";
import { CategoryTypes } from "../../models/CategoryTypes";


/*
This component displays buttons to filter the profile
list by categories
 */

export class CategoryFilter extends Component {

    constructor(props) {
        super(props);

        this.handleCategoryChange = this.handleCategoryChange.bind(this);
    }


    handleCategoryChange(event) {
        this.props.onCategoryChanged(event.target.value);
    }

    render() {

        return (
            <div id="category-filter">
                <ul class="sidebar-list">
                    <li>
                        <div class="category-item">
                            <button class="category-btn" value={CategoryTypes.HOME} onClick={this.handleCategoryChange} >Home</button>
                        </div>
                    </li>
                    <li>
                        <div class="category-item">
                            <button class="category-btn" value={CategoryTypes.WELLNESS} onClick={this.handleCategoryChange} >Wellness</button>
                        </div>
                    </li>
                    <li>
                        <div class="category-item">
                            <button class="category-btn" value={CategoryTypes.CONSULTING} onClick={this.handleCategoryChange} >Consulting</button>
                        </div>
                    </li>
                    <li>
                        <div class="category-item">
                            <button class="category-btn" value={CategoryTypes.AUTOMOTIVE} onClick={this.handleCategoryChange} >Automotive</button>
                        </div>
                    </li>
                    <li>
                        <div class="category-item">
                            <button class="category-btn" value={CategoryTypes.EVENTS} onClick={this.handleCategoryChange} >Events</button>
                        </div>
                    </li>
                    <li>
                        <div class="category-item">
                            <button class="category-btn" value={CategoryTypes.TECH} onClick={this.handleCategoryChange} >Tech</button>
                        </div>
                    </li>
                    <li>
                        <div class="category-item">
                            <button class="category-btn" value={CategoryTypes.PETS} onClick={this.handleCategoryChange} >Pets</button>
                        </div>
                    </li>
                    <li>
                        <div class="category-item">
                            <button class="category-btn" value={CategoryTypes.EDUCATION} onClick={this.handleCategoryChange} >Education</button>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}


