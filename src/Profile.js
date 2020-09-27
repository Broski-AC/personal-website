import React from 'react';
import {Grid, Typography} from '@material-ui/core';
// import prof_image from './allison_image.jpg';
import './css/profile.css';

export default function Profile () {

    return (
        <div>
            <Grid container direction="row" spacing={1}>
                <Grid item className="profile">
                    <Grid container className="text_content" direction="column">
                        <Grid item>
                            <Typography variant="h1">
                                Allison Broski
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h2">
                                Inquisitive,
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h2">
                                Inventive,
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h2">
                                Inimitable
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item className="profile">
                    <div className="container">
                        <div className="image"/>
                        <div className="overlay">
                            {/* Text needs to be optimized for mobile */}
                            <div className="text">
                                <ul> Did you know...
                                    <li> I love corgis </li>
                                    <li> I have duel citizenship </li>
                                    <li> Nobody really knows what they've doing </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <Grid container>

            </Grid>
        </div>
    )
}