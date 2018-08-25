import React, { Component } from 'react';
import { StarRating } from "../StarRating/StarRating";
import "./Review.css";

/*
This component displays a review object in an indeipendant div
-props
    review: review object to display
 */

export class Review extends Component {

    constructor(props) {
        super(props);

        this.parseDate = this.parseDate.bind(this);
    };

    //converts iso date format into readable format
    parseDate(iso) {

        //create date object
        var date = new Date(iso);

        //parse date in mm/dd/yyyy
        var day =  date.toLocaleDateString().replace(/\//g,'/');
        //get hour from ISO
        var hour = date.toISOString().substring(11,13);
        hour = parseInt(hour);
        if (hour > 12) {
            hour -= 12;
        }
        //get minute from ISO
        var min = date.toISOString().substring(14,16);
        //determine if time is AM or PM
        var tod = hour > 12 ? 'PM' : 'AM';

        return day + ' ' + hour + ':' + min + " " + tod;
    }



    render() {
        return (
            <div class="review">
                <h3 class="review-title">{this.props.review.title}</h3>
                <StarRating stars={this.props.review.rating}/>
                <span class="review-date">{this.parseDate(this.props.review.dateCreated)}</span>

            </div>
        );
    }
}


