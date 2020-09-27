import React from 'react';
import {Grid} from '@material-ui/core';
// import prof_image from './allison_image.jpg';
import './css/profile.css';

export default function Profile () {

    return (
        <Grid container direction="row" spacing={1}>
            <Grid item className="profile">
            </Grid>

            <Grid item className="profile">
                <div className="container">
                    <div className="image"/>
                    {/* <img src={prof_image} alt="Allison Profile" className="image"/> */}
                    <div className="overlay">
                        <div className="text">Greetings!</div>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}