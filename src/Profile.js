import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import {createMuiTheme, responsiveFontSizes, ThemeProvider} from '@material-ui/core/styles';
import './css/profile.css';

let theme = createMuiTheme();

theme = responsiveFontSizes(theme);

theme.typography.h1 = {
    fontSize: '5.35rem',
    '@media (min-width: 600px)':{
        fontSize: '3.0rem'
    },
    '@media (max-width: 600px)':{
        fontSize: '2.2rem'
    },
    [theme.breakpoints.up('md')]:{
        fontSize: '5.35rem'
    }
}

export default function Profile () {

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Grid container direction="row">
                    <Grid item className="profile">
                        <Grid container className="text_content" direction="column" justify="center" alignItems="center">
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
                            <div className="overlay">''
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
                <Grid container className="description">
                    <Grid item>
                        <Typography variant="subtitle1">
                            Allison never anticipated studying computer science. Yet here she is in her fourth year at Oakland Univeristy, learning the inner workings of computers and code. 
                            As a presidential scholar and member of the Honors College, Allison has had to learn Arabic, write a research thesis (currently in progress!), and become a leader on campus.
                            <br/>
                            As the President for the League of Engineers and Computer Scientists, Allison gets to interact with a team of incredible individuals to organize multiple events on OU's campus, including the GrizzHacks hackathon.
                            When she's not answering emails, you can find her tutoring students, reading books, or squashing (computer) bugs.
                        </Typography>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </div>
    )
}