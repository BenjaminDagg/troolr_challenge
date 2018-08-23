import React, { Component } from 'react';
import { ProfileTile} from "../ProfileTile/ProfileTile";

/*
This component recieves array of profile objects, creates
a ProfileTile component for each one, then displays them in
a grid
-props
    profiles: array of profile objects to display
 */

export class ProfileList extends Component {

    constructor(props) {
        super(props);

        this.createTable = this.createTable.bind(this);
    };


    //creates array of ProfileTitle components
    createTable() {

        //iterate over each profile prop and create
        //a ProfileTitle component
        var list = this.props.profiles.map((profile) => {
            console.log(profile.name);
            return (<ProfileTile profile={profile}/>);

        });

        //return array of ProfileTiles
        return (
           <div>
               {list}
           </div>
        );
    }

    render() {

        //when profile objects passes as props create list
        var table = this.createTable();

        return (
            <div  class="profile-container">
                {table}
            </div>
        );
    }
}


