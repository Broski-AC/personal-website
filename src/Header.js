import React from 'react';
import { Grid, AppBar, Toolbar, Drawer, IconButton, List, ListItem, ListItemText} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export default function Header() {

    const [state, setState] = React.useState({
        left: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')){
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    // Need onCLick event for buttons to go to specific subsections of the page

    return (
        <Grid>
            <AppBar>
                <Toolbar>
                    <IconButton onClick={toggleDrawer('left', true)}>
                        <MenuIcon />
                    </IconButton>
                    <Drawer anchor='left' open={state['left']} onClose={toggleDrawer('left', false)}>
                        <List>
                            <ListItem button>
                                <ListItemText primary='Profile'/>
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary='Public Works'/>
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary='Technical Experience'/>
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary='Contact'/>
                            </ListItem>
                        </List>
                    </Drawer>
                </Toolbar>
            </AppBar>
        </Grid>
    )
}
