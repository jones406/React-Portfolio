import React from 'react';
import { Link } from 'react-router-dom';
import headshot from '../assets/images/headshot.png'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import WorkTwoToneIcon from '@material-ui/icons/WorkTwoTone';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import MailTwoToneIcon from '@material-ui/icons/MailTwoTone';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        alignItems: "space-between",
        flexGrow: 1,
        backgroundColor: "transparent",
    },
    title: {
        margin: "1%"
    },
    headshot: {
        width: "15%",
        margin: "1%",
        borderRadius: 100,
    },
    list: {
        display: "flex",
        alignItems: "space-between",
        marginRight: "5%",
        marginLeft: "5%"
    },
    links: {
        backgroundColor: "gray",
        borderRadius: 50,
        margin: "1%",
    }
}));

export default function Nav() {
    const classes = useStyles();
    return (
        <div>
            <AppBar className={classes.root} position="static" color="transparent">
                <Toolbar>
                        <img className={classes.headshot} src={headshot} alt="headshot" />
                    <Typography variant="h4" className={classes.title}>Brooke Jones</Typography>
                    <List className={classes.list}>
                        <ListItem button className={classes.links}>
                            <ListItemIcon>
                                <HomeTwoToneIcon />
                            </ListItemIcon>
                            <Link to="/">Home</Link>
                        </ListItem>
                        <ListItem button className={classes.links}>
                            <ListItemIcon>
                                <WorkTwoToneIcon />
                            </ListItemIcon>
                            <Link to="/portfolio">Portfolio</Link>
                        </ListItem>
                        <ListItem button className={classes.links}>
                            <ListItemIcon>
                                <MailTwoToneIcon />
                            </ListItemIcon>
                            <Link to="/contact">Contact</Link>
                        </ListItem>
                    </List>
                </Toolbar>
            </AppBar>
        </div>
    );
}