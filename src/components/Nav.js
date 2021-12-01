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
        alignItems: "center",
        justifyContent: "center",
        flexGrow: 1,
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
        marginRight: "5%",
        marginLeft: "5%"
    },
    links: {
        backgroundColor: "gray",
        borderRadius: 50,
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
                    <Link to="/">
                        <ListItem button className={classes.links}>
                            <ListItemIcon>
                                <HomeTwoToneIcon />
                            </ListItemIcon>
                            Home
                        </ListItem>
                        </Link>
                        <Link to="/portfolio"><ListItem button className={classes.links}>
                            <ListItemIcon>
                                <WorkTwoToneIcon />
                            </ListItemIcon>
                            Portfolio
                        </ListItem>
                        </Link>
                        <Link to="/contact">
                        <ListItem button className={classes.links}>
                            <ListItemIcon>
                                <MailTwoToneIcon />
                            </ListItemIcon>
                            Contact
                        </ListItem>
                        </Link>
                    </List>
                </Toolbar>
            </AppBar>
        </div>
    );
}