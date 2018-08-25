import React, { Component } from 'react';
import { Review } from "../Review/Review";
import {CategoryTypes} from "../../models/CategoryTypes";
import {ProfileTile} from "../ProfileTile/ProfileTile";
import "./ProfileReviews.css";

/*
This component is profile review page. It displays an array of review
objects for a given users profile
-props
    reviews: array of reviews for current user
 */

export class ProfileReviews extends Component {

    constructor(props) {
        super(props);

        this.renderReviews = this.renderReviews.bind(this);
    }


    renderReviews() {
        if (!this.props.reviews) {
            return (
                <div>
                    Loading...
                </div>
            );
        }
        else {
            var reviews = this.props.reviews.map((review) => {

                    return (<Review review={review}/>);
            });

            return reviews;
        }
    }

    render() {

        var reviews = this.renderReviews();


        return (
            <div id="review-list">
                <h3 id="review-title">Reviews</h3>
                {reviews}
            </div>
        );
    }
}


