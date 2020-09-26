import React from 'react';
import { Grid, AppBar, Toolbar, IconButton, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export default function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const movePage = () => {
        // Go to new page
        console.log('Going to new page')
    }    
    return (
        <Grid>
            <AppBar>
                <Toolbar>
                    <IconButton edge="start">
                        <MenuIcon onClick={handleClick}/>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={movePage}>Profile</MenuItem>
                            <MenuItem onClick={movePage}>Public Works</MenuItem>
                            <MenuItem onClick={movePage}>Technical Experience</MenuItem>
                            <MenuItem onClick={movePage}>Contact</MenuItem>
                        </Menu>
                    </IconButton>
                    <h1>Allison Broski</h1>
                </Toolbar>
            </AppBar>
        </Grid>
    )
}
