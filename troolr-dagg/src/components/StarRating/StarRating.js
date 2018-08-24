import React, { Component } from 'react';
import "./StarRating.css";



/*
This component displays star images to represent a rating
-props
    stars: number of stars to display (float)
 */

export class StarRating extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        //convert # star rating into a percentage
        //to fill the bar
        var stars = this.props.stars;
        var percentage = (stars / 5) * 100;
        percentage += '%';

        return (
            <div class="star-container">


                <div class="star" style={{'width' : percentage}}>
                    <span>&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</span>
                </div>

            </div>
        );
    }
}


